package br.com.Lavajato.repository;

import br.com.Lavajato.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"*"})
@RepositoryRestResource(path = "/client")
public interface ClientRepository extends JpaRepository<Client, Long> {
}
