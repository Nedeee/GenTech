package lightningwheels.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/status")
    public String status() {
        return "Aplicația funcționează corect!";
    }
}
