package br.edu.uni7.tecnicasapp1.repository;

import br.edu.uni7.tecnicasapp1.model.ControleEstoque;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class EstoqueRepository {

    private static Integer contador = 1;
    private Map<Integer, ControleEstoque> controleEstoque;

    public EstoqueRepository(){
        this.controleEstoque = new HashMap<>();
    }

    public ControleEstoque findById(Integer id){
        return controleEstoque.get(id);
    }

    public List<ControleEstoque> list(){
        return new ArrayList<>(controleEstoque.values());
    }

    public void insert(ControleEstoque estoque){
        int id = contador++;
        estoque.setIdentificador(id);
        controleEstoque.put(id, estoque);
    }

    public void update(Integer id, ControleEstoque estoque){
        controleEstoque.put(id, estoque);
    }

    public void remove(Integer id){
        controleEstoque.remove(id);
    }

}
