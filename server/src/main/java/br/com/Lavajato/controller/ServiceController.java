package br.com.Lavajato.controller;

import br.com.Lavajato.model.Service;
import br.com.Lavajato.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
public class ServiceController {

    @Autowired
    private ServiceRepository repoService;

    @GetMapping("/services")
    public List<Service> getServices() {
        return repoService.findAll();
    }
}
