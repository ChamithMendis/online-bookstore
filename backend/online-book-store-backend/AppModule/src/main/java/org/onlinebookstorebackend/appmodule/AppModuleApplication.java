package org.onlinebookstorebackend.appmodule;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/* [TODO:] How to enable scan without specifying */
@SpringBootApplication(scanBasePackages = {
        "org.onlinebookstorebackend.auth",
        "org.onlinebookstorebackend.common",
        "org.onlinebookstorebackend.users"
})
@EnableJpaRepositories(basePackages = {
        "org.onlinebookstorebackend.users.repositories"
})
@EntityScan(basePackages = {
        "org.onlinebookstorebackend.users.entities",
        "org.onlinebookstorebackend.auth.entities"
})
public class AppModuleApplication {

    public static void main(String[] args) {
        SpringApplication.run(AppModuleApplication.class, args);
    }

}
