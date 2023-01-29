package com.sadapay.sadaparcel.Item;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.*;


class ItemControllerTest {

    @Test
    void givenPrePopulatedData_getItem_ShouldReturnAItemList() {
        ItemService itemService = mock(ItemService.class);
        ItemController itemController = new ItemController(itemService);
        List<Item> expectedItems = Arrays.asList(
                new Item(UUID.randomUUID(), "apple", 10, 10.0),
                new Item(UUID.randomUUID(), "banana", 5, 15.0),
                new Item(UUID.randomUUID(), "grapes", 20, 20.0)
        );
        when(itemService.getItems()).thenReturn(expectedItems);
        List<Item> actualItems = itemController.getItems();
        assertThat(actualItems).isEqualTo(expectedItems);
        assertThat(actualItems.size()).isEqualTo(3);
    }

    @Test
    void givenValidItem_registerNewItem_ShouldReturn201AndSavedItem() {
        ItemService itemService = mock(ItemService.class);
        ItemController itemController = new ItemController(itemService);
        Item newItem = new Item("orange", 15, 20.0);
        when(itemService.addNew(newItem)).thenReturn(newItem);
        ResponseEntity<String> response = itemController.registerNewItem(newItem, new BindException(newItem, "item"));
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }

    @Test
    void givenExistingItemId_deleteItem_ShouldRemoveItem() {
        ItemService itemService = mock(ItemService.class);
        ItemController itemController = new ItemController(itemService);
        UUID itemId = UUID.randomUUID();
        doNothing().when(itemService).deleteItem(itemId);
        itemController.deleteItem(itemId);
        List<Item> updatedItems = itemController.getItems();
        assertThat(updatedItems.stream().anyMatch(item -> item.getId().equals(itemId))).isFalse();
    }

    @Test
    void givenValidItemIdAndItem_updateItem_ShouldUpdateTheItem() {
        ItemService itemService = mock(ItemService.class);
        ItemController itemController = new ItemController(itemService);
        UUID itemId = UUID.randomUUID();
        Item expectedItem = new Item(itemId, "apple", 20, 10.0);
        Item originalItem = new Item(itemId, "banana", 20, 20.0);
    }
}