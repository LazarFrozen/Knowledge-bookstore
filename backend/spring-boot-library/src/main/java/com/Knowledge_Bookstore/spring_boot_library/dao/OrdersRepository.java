package com.Knowledge_Bookstore.spring_boot_library.dao;

import com.Knowledge_Bookstore.spring_boot_library.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
    @Transactional
    void deleteByEmail(String email);

    @Query(value = "SELECT COALESCE(MAX(order_id), 0) + 1 FROM orders", nativeQuery = true)
    int getNextOrderId();
}
