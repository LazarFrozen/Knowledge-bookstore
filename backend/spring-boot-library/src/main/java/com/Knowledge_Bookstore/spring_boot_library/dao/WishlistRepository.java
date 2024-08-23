package com.Knowledge_Bookstore.spring_boot_library.dao;

import com.Knowledge_Bookstore.spring_boot_library.entity.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface WishlistRepository extends JpaRepository<Wishlist, Long> {

    List<Wishlist> findByBookId(Long bookId);

    @Transactional
    void deleteByBookId(Long bookId);
}
