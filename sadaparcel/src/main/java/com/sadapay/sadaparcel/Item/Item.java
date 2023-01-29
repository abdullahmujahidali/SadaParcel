package com.sadapay.sadaparcel.Item;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.UUID;


@Entity
@Table
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    @NotBlank
    private String title;
    @Min(0)
    private int quantity;
    @DecimalMin(value = "0.00")
    private double price;
    private boolean isDiscount;

    public Item() {
        isDiscount = false;
    }

    public Item(UUID id, String title, int quantity, double price) {
        this.id = id;
        this.title = title;
        this.quantity = quantity;
        this.price = price;
        isDiscount = false;
    }
    public Item(String title, int quantity, double price) {
        this.title = title;
        this.quantity = quantity;
        this.price = price;
        isDiscount = false;
    }

    public boolean getIsDiscount() {
        return isDiscount;
    }

    public void setIsDiscount(boolean isDiscount) {
        this.isDiscount = isDiscount;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        if(this.isDiscount == false){
            return 1 * price;
        }
        else{
            return price - 0.10;
        }
    }
    public void setPrice(double price) {
        this.price = price;
    }
}
