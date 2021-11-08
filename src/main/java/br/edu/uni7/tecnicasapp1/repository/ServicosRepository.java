package br.edu.uni7.tecnicasapp1.repository;

import br.edu.uni7.tecnicasapp1.model.Servicos;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ServicosRepository {

    private static Integer contador = 1;
    private Map<Integer, Servicos> servicosRepository;

    public ServicosRepository(){
        this.servicosRepository = new HashMap<>();
    }

    public Servicos findById(Integer id){
        return servicosRepository.get(id);
    }

    public List<Servicos> list(){
        return new ArrayList<>(servicosRepository.values());
    }

    public void insert(Servicos estoque){
        int id = contador++;
        estoque.setIdentificador(id);
        servicosRepository.put(id, estoque);
    }

    public void update(Integer id, Servicos estoque){
        servicosRepository.put(id, estoque);
    }

    public void remove(Integer id){
        servicosRepository.remove(id);
    }

}
