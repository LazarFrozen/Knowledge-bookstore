package com.Knowledge_Bookstore.spring_boot_library.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "books")
@Data
public class Books {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "image")
    private String image;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "price")
    private double price;

    @Column(name = "description")
    private String description;

    @Column(name = "category")
    private String category;

    @Column(name = "publisher")
    private String publisher;

    @Column(name = "published")
    private String published;

    @Column(name = "language")
    private String language;

    @Column(name = "pages")
    private int pages;

    @Column(name = "weight")
    private int weight;

}
