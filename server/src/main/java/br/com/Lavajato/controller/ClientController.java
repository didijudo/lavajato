package br.com.Lavajato.controller;

import br.com.Lavajato.model.Client;
import br.com.Lavajato.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
public class ClientController {

    @Autowired
    private ClientRepository repoClient;

    @GetMapping("/clients")
    public List<Client> getClients() {
        return repoClient.findAll();
    }
}
