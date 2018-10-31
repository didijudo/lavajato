package br.com.Lavajato.controller;

import br.com.Lavajato.model.Client;
import br.com.Lavajato.model.Service;
import br.com.Lavajato.repository.ClientRepository;
import br.com.Lavajato.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class ClientController {

    @Autowired
    private ClientRepository repoClient;
    @Autowired
    private ServiceRepository repoService;

    @GetMapping("/clients")
    public List<Client> getClients() {
        List<Client> clients = repoClient.findAll();
        clients.sort((c1, c2) -> c1.getName().compareTo(c2.getName()));
        return clients;
    }
}
