package org.onlinebookstorebackend.appmodule;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
/* [TODO:] How to enable scan without specifying */
@SpringBootApplication(scanBasePackages = {
        "org.onlinebookstorebackend.auth",
        "org.onlinebookstorebackend.common"
})
public class AppModuleApplication {

    public static void main(String[] args) {
        SpringApplication.run(AppModuleApplication.class, args);
    }

}
