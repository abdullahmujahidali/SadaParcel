package com.sadapay.sadaparcel.Item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.ValidationException;
import java.util.List;
import java.util.UUID;

@Service
public class ItemService {
    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getItems()
    {
        return itemRepository.findAll();
    }

    public Item addNew(Item item) throws ValidationException {
        validateItem(item);
        itemRepository.save(item);
        return item;
    }


    public void deleteItem(UUID itemId) {
        boolean exists = itemRepository.existsById(itemId);
        if(!exists){
            throw new IllegalStateException("Item with id " + itemId + " does not exists");
        }
        itemRepository.deleteById(itemId);
    }

    @Transactional
    public void updateItem(UUID itemId, Item item) {
        boolean exists = itemRepository.existsById(itemId);
        if(!exists){
            throw new IllegalStateException("Item with id " + itemId + " does not exists");
        }
        Item itemToUpdate = itemRepository.findById(itemId).get();
        itemToUpdate.setTitle(item.getTitle());
        itemToUpdate.setQuantity(item.getQuantity());
        itemToUpdate.setPrice(item.getPrice());
        itemRepository.save(itemToUpdate);
    }
    /**
     * @param itemId
     * @param itemDTO
     */
    public void updateItemDiscount(UUID itemId, ItemDiscountDTO itemDTO) {
        if (!itemRepository.existsById(itemId)) {
            throw new IllegalArgumentException("Item with id " + itemId + " does not exist");
        }
        Item item = itemRepository.findById(itemId).get();
        item.setIsDiscount(itemDTO.getIsDiscount());
        itemRepository.save(item);
    }


    private void validateItem(Item item) throws ValidationException {
        if (item.getTitle() == null || item.getTitle().isEmpty()) {
            throw new ValidationException("Title is required");
        }
        if (item.getQuantity() < 0) {
            throw new ValidationException("Quantity must be greater than or equal to 0");
        }
        if (item.getPrice() < 0) {
            throw new ValidationException("Price must be greater than or equal to 0");
        }
    }
}
