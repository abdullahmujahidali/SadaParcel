package com.sadapay.sadaparcel.Item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@RestController
@RequestMapping(path="api/v1/item")
public class ItemController {
    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    class ValidationException extends Exception {
        ValidationException(String message) {
            super(message);
        }
    }

    @GetMapping
    public List<Item> getItems(){
        return itemService.getItems();
    }

    @PostMapping
    public ResponseEntity<String> registerNewItem(@Valid @RequestBody Item item, BindingResult result) {
        if (result.hasErrors()) {
            return new ResponseEntity<>(result.getAllErrors().get(0).getDefaultMessage(), HttpStatus.BAD_REQUEST);
        }
        itemService.addNew(item);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("{itemId}")
    public void deleteItem(@Valid @PathVariable("itemId") UUID itemId){
        itemService.deleteItem(itemId);
    }

    @PutMapping("{itemId}")
    public ResponseEntity<Void> updateItem(@Valid @PathVariable("itemId") UUID itemId, @RequestBody Item item){
        try {
            itemService.updateItem(itemId, item);
            return ResponseEntity.noContent().build();
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @PatchMapping("/{itemId}")
    public ResponseEntity<Void> updateDiscount(@Valid @PathVariable("itemId") UUID itemId, @RequestBody ItemDiscountDTO itemDTO) {
        try {
            itemService.updateItemDiscount(itemId, itemDTO);
            return ResponseEntity.noContent().build();
        } catch (NoSuchElementException ex) {
            return ResponseEntity.badRequest().build();
        }
    }



}
