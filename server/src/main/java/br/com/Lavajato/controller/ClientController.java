package br.com.Lavajato.controller;

import br.com.Lavajato.model.Client;
import br.com.Lavajato.model.Service;
import br.com.Lavajato.model.ServiceClient;
import br.com.Lavajato.repository.ClientRepository;
import br.com.Lavajato.repository.ServiceClientRepository;
import br.com.Lavajato.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.http.HTTPException;
import java.sql.Date;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

@CrossOrigin("*")
@RestController
public class ClientController {

    @Autowired
    private ClientRepository repoClient;
    @Autowired
    private ServiceRepository repoService;
    @Autowired
    private ServiceClientRepository repoServiceClient;

    @GetMapping("/clients")
    public List<Client> getClients() {
        List<Client> clients = repoClient.findAll();
        clients.sort((c1, c2) -> c1.getName().compareTo(c2.getName()));
        return clients;
    }

    @PostMapping("/wash/new")
    public void insertService(
            @RequestParam(required = true) Long clientId,
            @RequestParam(required = true) Long serviceId) {
        Client c = repoClient.getOne(clientId);
        Service s = repoService.getOne(serviceId);

        if (c == null || s == null) {
            new HTTPException(500);
        }

        ServiceClient sv = new ServiceClient();
        sv.setClient(c);
        sv.setService(s);
        sv.setDate(new GregorianCalendar());
        repoServiceClient.save(sv);
    }
}
