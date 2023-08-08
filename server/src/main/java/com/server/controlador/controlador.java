package com.server.controlador;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class controlador  {
    @GetMapping("/hello")
    public String hello() {
        return "¡Hola desde Spring Boot!";
    }
}
