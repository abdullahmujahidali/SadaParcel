package com.sadapay.sadaparcel.Item;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.util.List;

public class ItemConfig {
    @Bean
    CommandLineRunner commandLineRunner(ItemRepository itemRepository){
        return args ->{
            Item milk = new Item(
                    "Apple",
                    20,
                    10.4
            );
            Item bread = new Item(
                    "Banana",
                    2,
                    12.49
            );

            itemRepository.saveAll(
                    List.of(milk, bread)
            );
        };
    }

}
