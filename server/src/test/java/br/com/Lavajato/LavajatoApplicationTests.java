package br.com.Lavajato;

import br.com.Lavajato.repository.ClientRepository;
import br.com.Lavajato.repository.ServiceClientRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Collections;
import java.util.stream.Collectors;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LavajatoApplicationTests {

	@Autowired
	private ServiceClientRepository repo;
	@Autowired
	private ClientRepository repoClient;
	@Test
	public void contextLoads() {
		System.out.println(
				repo.findByClientEquals(repoClient.getOne(new Long(1))).size());
	}

}
