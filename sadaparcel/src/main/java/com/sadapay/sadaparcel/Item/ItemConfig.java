package com.sadapay.sadaparcel.Item;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Collections;
import java.util.List;

@Configuration
public class ItemConfig {

    @Bean
    CommandLineRunner commandLineRunner(ItemRepository itemRepository){
        return args ->{
            Item milk = new Item(
                    "Milk",
                    20,
                    10.4
            );
            Item bread = new Item(
                    "Bread",
                    2,
                    12.49
            );

            itemRepository.saveAll(
                    List.of(milk, bread)
            );
        };
    }

}
