package com.Knowledge_Bookstore.spring_boot_library.config;

import com.Knowledge_Bookstore.spring_boot_library.entity.Books;
import com.Knowledge_Bookstore.spring_boot_library.entity.Cart;
import com.Knowledge_Bookstore.spring_boot_library.entity.Orders;
import com.Knowledge_Bookstore.spring_boot_library.entity.Wishlist;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    private String theAllowedOrigins = "http://localhost:3000";

    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors){
        HttpMethod[] theUnsupportedActions = {
                HttpMethod.POST,
                HttpMethod.PATCH,
                HttpMethod.DELETE,
                HttpMethod.PUT};

        config.exposeIdsFor(Books.class);
        config.exposeIdsFor(Wishlist.class);
        config.exposeIdsFor(Cart.class);
        config.exposeIdsFor(Orders.class);

        disableHttpMethods(Books.class, config, theUnsupportedActions);
        disableHttpMethods(Wishlist.class, config, theUnsupportedActions);
        disableHttpMethods(Cart.class, config, theUnsupportedActions);
        disableHttpMethods(Orders.class, config, theUnsupportedActions);

        cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(theAllowedOrigins);
    }

    private void disableHttpMethods(Class<?> theClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {
        config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
    }
}
