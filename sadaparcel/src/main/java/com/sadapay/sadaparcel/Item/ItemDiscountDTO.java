package com.sadapay.sadaparcel.Item;

public class ItemDiscountDTO {
    private boolean isDiscount;

    public ItemDiscountDTO(){

    }

    public ItemDiscountDTO(boolean isDiscount) {
        this.isDiscount = isDiscount;
    }

    public boolean getIsDiscount() {
        return isDiscount;
    }

    public void setIsDiscount(boolean isDiscount) {
        this.isDiscount = isDiscount;
    }
}

