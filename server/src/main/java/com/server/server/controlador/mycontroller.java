package com.server.server.controlador;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.server.server.services.CatchData;

@RestController
public class mycontroller {
    
    private final CatchData catchData;

    public mycontroller(CatchData catchData) {
        this.catchData = catchData;
    }

    @GetMapping("/search")
    public String getProducts(@RequestParam String nameParam) {

        return catchData.fetchDataFromEndpoint("https://api.mercadolibre.com/sites/MLA/search?q=:"+nameParam);
        // return "search:"+nameParam ;
    }
    @GetMapping("/details")
    public String getDetails(@RequestParam String nameParam) {


        return catchData.fetchDataFromEndpoint("https://api.mercadolibre.com/sites/MLA/search?q=:"+nameParam);
        // return "search:"+nameParam ;
    }
}

