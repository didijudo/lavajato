package br.com.Lavajato.repository;

import br.com.Lavajato.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
@RepositoryRestResource
public interface ClientRepository extends JpaRepository<Client, Long> {
}
