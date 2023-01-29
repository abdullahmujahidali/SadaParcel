package com.sadapay.sadaparcel.Item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path="api/v1/item")
public class ItemController {
    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping
    public List<Item> getItems(){
        return itemService.getItems();
    }

    @PostMapping
    public ResponseEntity<Item> registerNewItem(@Valid @RequestBody Item item){
        return ResponseEntity.status(HttpStatus.CREATED).body(itemService.addNew(item));
    }

    @DeleteMapping("{itemId}")
    public void deleteItem(@Valid @PathVariable("itemId") UUID itemId){

    }




}
