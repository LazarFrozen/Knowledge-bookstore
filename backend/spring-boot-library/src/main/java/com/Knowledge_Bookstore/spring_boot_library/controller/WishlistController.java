package com.Knowledge_Bookstore.spring_boot_library.controller;

import com.Knowledge_Bookstore.spring_boot_library.dao.BooksRepository;
import com.Knowledge_Bookstore.spring_boot_library.entity.Books;
import com.Knowledge_Bookstore.spring_boot_library.entity.Wishlist;
import com.Knowledge_Bookstore.spring_boot_library.service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist")
@CrossOrigin(origins = "http://localhost:3000")
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @Autowired
    private BooksRepository bookRepository;

    @PostMapping("/add")
    public Wishlist addToWishlist(@RequestParam Long bookId) {
        Books book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        Wishlist wishlist = new Wishlist();
        wishlist.setBookId(book.getId());
        wishlist.setImage(book.getImage());
        wishlist.setTitle(book.getTitle());
        wishlist.setAuthor(book.getAuthor());
        wishlist.setPrice(book.getPrice());

        return wishlistService.addToWishlist(wishlist);
    }

    @DeleteMapping("/remove/{bookId}")
    public List<Wishlist> removeFromWishlist(@PathVariable Long bookId) {
        wishlistService.removeFromWishlist(bookId);
        return wishlistService.getAllWishlistItems();
    }

    @GetMapping
    public List<Wishlist> getWishlist() {
        return wishlistService.getAllWishlistItems();
    }
}
