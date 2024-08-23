package com.Knowledge_Bookstore.spring_boot_library.dao;

import com.Knowledge_Bookstore.spring_boot_library.entity.Books;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface BooksRepository extends JpaRepository<Books, Long> {
    Page<Books> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);
}
