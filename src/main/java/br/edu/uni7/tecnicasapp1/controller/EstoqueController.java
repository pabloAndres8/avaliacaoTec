package br.edu.uni7.tecnicasapp1.controller;

import br.edu.uni7.tecnicasapp1.model.ControleEstoque;
import br.edu.uni7.tecnicasapp1.repository.EstoqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class EstoqueController {

    private final EstoqueRepository repository;

    @Autowired
    public EstoqueController(EstoqueRepository estoqueRepository){
        this.repository = estoqueRepository;
    }

    @ResponseBody
    @RequestMapping(value = "estoque", method = RequestMethod.GET)
    public List<ControleEstoque> list(){
        return repository.list();
    }

    @ResponseBody
    @RequestMapping(value = "estoque/{id}", method = RequestMethod.GET)
    public ControleEstoque findById(@PathVariable Integer id){
        return repository.findById(id);
    }

    @ResponseBody
    @RequestMapping(value = "estoque", method = RequestMethod.POST)
    public ControleEstoque create(@RequestBody ControleEstoque estoque){
        repository.insert(estoque);
        return estoque;
    }

    @ResponseBody
    @RequestMapping(value = "estoque/{id}", method = RequestMethod.PUT)
    public void update(@PathVariable Integer id, @RequestBody ControleEstoque estoque){
        repository.update(id, estoque);
    }

    @ResponseBody
    @RequestMapping(value = "estoque/{id}", method = RequestMethod.DELETE)
    public void remove(@PathVariable Integer id){
        repository.remove(id);
    }
}