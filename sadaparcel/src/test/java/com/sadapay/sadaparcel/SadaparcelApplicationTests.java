package com.sadapay.sadaparcel;

import com.sadapay.sadaparcel.Item.Item;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.springframework.test.util.AssertionErrors.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class SadaparcelApplicationTests {

	@LocalServerPort
	private int port;
	@Autowired
	private TestRestTemplate restTemplate;


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
		Item newData = response.getBody();
		assertThat(newData).isNotNull();
		assertEquals("Item names should be same", payload.getTitle(), newData.getTitle());
	}

}
