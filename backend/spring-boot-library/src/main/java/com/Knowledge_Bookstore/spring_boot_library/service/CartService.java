package com.Knowledge_Bookstore.spring_boot_library.service;

import com.Knowledge_Bookstore.spring_boot_library.dao.CartRepository;
import com.Knowledge_Bookstore.spring_boot_library.entity.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Transactional
    public void removeFromCart(Long bookId) {
        cartRepository.deleteByBookId(bookId);
    }

    public List<Cart> getAllCartItems() {
        return cartRepository.findAll();
    }

    @Transactional
    public void updateCartQuantity(Long bookId, int quantityChange) {
        List<Cart> cartItems = cartRepository.findByBookId(bookId);
        if (!cartItems.isEmpty()) {
            Cart cartItem = cartItems.get(0);
            int updatedQuantity = cartItem.getQuantity() + quantityChange;
            if (updatedQuantity > 0) {
                cartItem.setQuantity(updatedQuantity);
                cartRepository.save(cartItem);
            }
        }
    }
}
