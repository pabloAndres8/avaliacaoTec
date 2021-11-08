package br.edu.uni7.tecnicasapp1.controller;

import br.edu.uni7.tecnicasapp1.model.Servicos;
import br.edu.uni7.tecnicasapp1.repository.ServicosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class ServicosController {

    private final ServicosRepository repository;

    @Autowired
    public ServicosController(ServicosRepository servicosRepository){
        this.repository = servicosRepository;
    }

    @ResponseBody
    @RequestMapping(value = "servicos", method = RequestMethod.GET)
    public List<Servicos> list(){
        return repository.list();
    }

    @ResponseBody
    @RequestMapping(value = "servicos/{id}", method = RequestMethod.GET)
    public Servicos findById(@PathVariable Integer id){
        return repository.findById(id);
    }

    @ResponseBody
    @RequestMapping(value = "servicos", method = RequestMethod.POST)
    public Servicos create(@RequestBody Servicos servicos){
        repository.insert(servicos);
        return servicos;
    }

    @ResponseBody
    @RequestMapping(value = "servicos/{id}", method = RequestMethod.PUT)
    public void update(@PathVariable Integer id, @RequestBody Servicos servicos){
        repository.update(id, servicos);
    }

    @ResponseBody
    @RequestMapping(value = "servicos/{id}", method = RequestMethod.DELETE)
    public void remove(@PathVariable Integer id){
        repository.remove(id);
    }
}