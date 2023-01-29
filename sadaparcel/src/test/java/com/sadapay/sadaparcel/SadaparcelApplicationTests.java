package com.sadapay.sadaparcel;

import com.sadapay.sadaparcel.Item.Item;
import com.sadapay.sadaparcel.Item.ItemRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.util.AssertionErrors.assertFalse;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class SadaparcelApplicationTests {

	@LocalServerPort
	private int port;
	@Autowired
	private TestRestTemplate restTemplate;

	@Autowired
	private ItemRepository itemRepository;


	@Test
	void contextLoads() {
	}

	@Test
	void givenItems_GetItemsEndpoint_ShouldReturnItemsList(){
		String baseUrl = "http://localhost:" + port + "/api/v1/item";
		ResponseEntity<Item[]> response = restTemplate.getForEntity(baseUrl, Item[].class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(response.getBody().length).isGreaterThanOrEqualTo(2);
	}

	@Test
	void givenNewItem_PostItemEndpoint_ShouldAddNewItem(){
		String baseUrl = "http://localhost:" + port + "/api/v1/item";
		Item payload = new Item(
				"Butter",
				20,
				1.4
		);
		ResponseEntity<Item> response = restTemplate.postForEntity(baseUrl, payload ,Item.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
	}

	@Test
	void givenInvalidTitle_PostItemEndpoint_ShouldReturnBadRequest() {
		String baseUrl = "http://localhost:" + port + "/api/v1/item";
		Item payload = new Item("", 20, 1.4);
		ResponseEntity<String> response = restTemplate.postForEntity(baseUrl, payload, String.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
		assertThat(response.getBody()).contains("must not be blank");
	}

	@Test
	void givenInvalidQuantity_PostItemEndpoint_ShouldReturnBadRequest() {
		String baseUrl = "http://localhost:" + port + "/api/v1/item";
		Item payload = new Item("Butter", -1, 1.4);
		ResponseEntity<String> response = restTemplate.postForEntity(baseUrl, payload, String.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
		assertThat(response.getBody()).contains("must be greater than or equal to 0");
	}

	@Test
	void givenInvalidPrice_PostItemEndpoint_ShouldReturnBadRequest() {
		String baseUrl = "http://localhost:" + port + "/api/v1/item";
		Item payload = new Item("Butter", 20, -1.4);
		ResponseEntity<String> response = restTemplate.postForEntity(baseUrl, payload, String.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
		assertThat(response.getBody()).contains("must be greater than or equal to 0.00");
	}

	@Test
	void givenExistingItemId_WhenDeleteItemEndpointCalled_ShouldRemoveItemFromRepository() {
		UUID itemId = UUID.randomUUID();
		Item payload = new Item(
				itemId,
				"Butter",
				20,
				1.4
		);
		itemRepository.save(payload);
		restTemplate.delete("http://localhost:" + port + "/api/v1/item/" + itemId);
		assertFalse("Item still exists in repository after delete", itemRepository.existsById(itemId));
	}

	@Test
	void givenNonExistingItemId_WhenDeleteItemEndpointCalled_ShouldThrowIllegalStateException() {
		UUID itemId = UUID.randomUUID();
		try {
			restTemplate.delete("http://localhost:" + port + "/api/v1/item/" + itemId);
		} catch (Exception e) {
			assertTrue(e instanceof IllegalStateException);
			assertTrue(e.getMessage().contains("does not exists"));
		}
	}


}
