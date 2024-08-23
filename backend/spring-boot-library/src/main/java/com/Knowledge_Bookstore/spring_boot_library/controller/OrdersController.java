package com.Knowledge_Bookstore.spring_boot_library.controller;

import com.Knowledge_Bookstore.spring_boot_library.dao.OrdersRepository;
import com.Knowledge_Bookstore.spring_boot_library.entity.Orders;
import com.Knowledge_Bookstore.spring_boot_library.service.OrdersService;
import dto.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrdersController {
    @Autowired
    private OrdersService ordersService;

    @Autowired
    private OrdersRepository ordersRepository;

    @PostMapping("/add")
    public ResponseEntity<String> placeOrder(@RequestBody OrderRequest orderRequest) {
        int orderId = ordersRepository.getNextOrderId();
        List<Orders> ordersList = new ArrayList<>();


        for (OrderRequest.CartItem item : orderRequest.getCartItems()) {
            Orders order = new Orders();
            order.setOrderId(orderId);
            order.setFirstName(orderRequest.getFirstName());
            order.setLastName(orderRequest.getLastName());
            order.setStreetAndNumber(orderRequest.getStreetAndNumber());
            order.setPostalCode(orderRequest.getPostalCode());
            order.setCity(orderRequest.getCity());
            order.setPhone(orderRequest.getPhone());
            order.setBirthDate(orderRequest.getBirthDate());
            order.setEmail(orderRequest.getEmail());
            order.setTotalPrice(orderRequest.getTotalPrice());
            order.setImage(item.getImage());
            order.setTitle(item.getTitle());
            order.setAuthor(item.getAuthor());
            order.setPrice(item.getPrice());
            order.setQuantity(item.getQuantity());

            ordersList.add(order);
        }

        ordersService.saveAllOrders(ordersList);
        return ResponseEntity.ok("Order placed successfully");
    }

    @DeleteMapping("/remove/{email}")
    public List<Orders> removeFromOrders(@PathVariable String email) {
        ordersService.removeFromOrders(email);
        return ordersService.getAllOrders();
    }

    @GetMapping
    public List<Orders> getAllUsers() {
        return ordersService.getAllOrders();
    }
}
