package br.com.Lavajato.repository;

import br.com.Lavajato.model.Client;
import br.com.Lavajato.model.ServiceClient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Calendar;
import java.util.List;

public interface ServiceClientRepository extends JpaRepository<ServiceClient, Long> {
    List<ServiceClient> findByClientEquals(Client c);
    List<ServiceClient> findByDateBetween(Calendar start, Calendar end);
}
