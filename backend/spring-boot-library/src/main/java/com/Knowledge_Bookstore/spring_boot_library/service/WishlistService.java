package com.Knowledge_Bookstore.spring_boot_library.service;

import com.Knowledge_Bookstore.spring_boot_library.dao.WishlistRepository;
import com.Knowledge_Bookstore.spring_boot_library.entity.Wishlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    public Wishlist addToWishlist(Wishlist wishlist) {
        return wishlistRepository.save(wishlist);
    }

    @Transactional
    public void removeFromWishlist(Long bookId) {
        wishlistRepository.deleteByBookId(bookId);
    }

    public List<Wishlist> getAllWishlistItems() {
        return wishlistRepository.findAll();
    }
}
