package com.Knowledge_Bookstore.spring_boot_library.controller;

import com.Knowledge_Bookstore.spring_boot_library.dao.BooksRepository;
import com.Knowledge_Bookstore.spring_boot_library.entity.Books;
import com.Knowledge_Bookstore.spring_boot_library.entity.Cart;
import com.Knowledge_Bookstore.spring_boot_library.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private BooksRepository bookRepository;

    @PostMapping("/add")
    public Cart addToCart(@RequestParam Long bookId) {
        Books book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        Cart cart = new Cart();
        cart.setBookId(book.getId());
        cart.setImage(book.getImage());
        cart.setTitle(book.getTitle());
        cart.setAuthor(book.getAuthor());
        cart.setPrice(book.getPrice());

        return cartService.addToCart(cart);
    }

    @DeleteMapping("/remove/{bookId}")
    public List<Cart> removeFromCart(@PathVariable Long bookId) {
        cartService.removeFromCart(bookId);
        return cartService.getAllCartItems();
    }

    @GetMapping
    public List<Cart> getCart() {
        return cartService.getAllCartItems();
    }

    @PatchMapping("/update-quantity")
    public ResponseEntity<List<Cart>> updateQuantity(@RequestBody Map<String, Object> payload) {
        try {
            Long bookId = ((Number) payload.get("bookId")).longValue();
            int quantityChange = (int) payload.get("quantityChange");
            cartService.updateCartQuantity(bookId, quantityChange);
            List<Cart> updatedCart = cartService.getAllCartItems();
            return ResponseEntity.ok(updatedCart);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
