package com.Knowledge_Bookstore.spring_boot_library.dao;

import com.Knowledge_Bookstore.spring_boot_library.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {
    List<Cart> findByBookId(Long bookId);

    @Transactional
    void deleteByBookId(Long bookId);
}
