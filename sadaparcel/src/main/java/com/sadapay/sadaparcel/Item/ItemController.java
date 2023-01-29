package com.sadapay.sadaparcel.Item;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/item")
public class ItemController {

    @GetMapping
    public void getItems(){

    }

}
