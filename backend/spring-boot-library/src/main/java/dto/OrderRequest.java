package dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Setter
@Getter
public class OrderRequest {
    private String firstName;
    private String lastName;
    private String streetAndNumber;
    private int postalCode;
    private String city;
    private String phone;
    private Date birthDate;
    private String email;
    private List<CartItem> cartItems;
    private double totalPrice;

    @Setter
    @Getter
    public static class CartItem {
        private String image;
        private String title;
        private String author;
        private double price;
        private int quantity;
    }
}

