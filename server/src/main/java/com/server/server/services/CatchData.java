package com.server.server.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class CatchData {
    private final RestTemplate restTemplate;

    @Autowired
    public CatchData(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    // Método para realizar la solicitud al endpoint
    public String fetchDataFromEndpoint(String urlString) {
        String url = urlString; // Reemplaza con tu URL de endpoint
        String response = restTemplate.getForObject(url, String.class);
        return response;
    }
    
}
