package com.sadapay.sadaparcel.Item;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
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
        assertThat(newItem.getTitle()).isInstanceOf(String.class).isNotNull();
        assertThat(newItem.getQuantity()).isInstanceOf(Integer.class).isNotNull();
        assertThat(newItem.getPrice()).isInstanceOf(Double.class).isNotNull();
        when(itemService.addNew(newItem)).thenReturn(newItem);
        Item actualItem = itemController.registerNewItem(newItem).getBody();
        assertThat(actualItem).isEqualTo(newItem);
    }

    @Test
    void givenExistingItemId_deleteItem_ShouldRemoveItem() {
        ItemService itemService = mock(ItemService.class);
        ItemController itemController = new ItemController(itemService);
        UUID itemId = UUID.randomUUID();
    }
}