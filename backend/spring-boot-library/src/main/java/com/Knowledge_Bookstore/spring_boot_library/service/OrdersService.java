package com.Knowledge_Bookstore.spring_boot_library.service;

import com.Knowledge_Bookstore.spring_boot_library.dao.OrdersRepository;
import com.Knowledge_Bookstore.spring_boot_library.entity.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OrdersService {
    @Autowired
    private OrdersRepository ordersRepository;

    public Orders addToOrders(Orders order) {
        return ordersRepository.save(order);
    }

    @Transactional
    public void removeFromOrders(String email) {
        ordersRepository.deleteByEmail(email);
    }

    public List<Orders> getAllOrders() {
        return ordersRepository.findAll();
    }

    public List<Orders> saveAllOrders(List<Orders> orders) {
        return ordersRepository.saveAll(orders);
    }
}
