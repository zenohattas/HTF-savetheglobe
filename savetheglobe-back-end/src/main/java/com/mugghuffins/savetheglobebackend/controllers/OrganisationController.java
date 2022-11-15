package com.mugghuffins.savetheglobebackend.controllers;

import com.mugghuffins.savetheglobebackend.exceptions.OrganisationNotFoundException;
import com.mugghuffins.savetheglobebackend.models.Organisation;
import com.mugghuffins.savetheglobebackend.models.ProjectContribution;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class OrganisationController {
    @Autowired
    private com.mugghuffins.savetheglobebackend.repository.OrganisationRepository organisationRepository;
    

    @PostMapping("/organisation")
    Organisation newOrganisation(@RequestBody Organisation newOrganisation) {
        return organisationRepository.save(newOrganisation);
    }

    @GetMapping("/organisations")
    List<Organisation> getAllOrganisations(){
        return organisationRepository.findAll();
    }

    @GetMapping("/organisation/{id}")
    Organisation getOrganisationById(@PathVariable Long id){
        return organisationRepository.findById(id)
                .orElseThrow(() -> new OrganisationNotFoundException(id));
    }

    @PutMapping("/organisation//{id}")
    Organisation updateOrganisation(@RequestBody Organisation newOrganisation, @PathVariable Long id){
        return organisationRepository.findById(id)
                .map(organisation -> {
                    organisation.setAddress(newOrganisation.getAddress());
                    organisation.setDescription(newOrganisation.getDescription());
                    organisation.setName(newOrganisation.getName());
                    organisation.setLocations(newOrganisation.getLocations());
                    organisation.setProjectContributions(newOrganisation.getProjectContributions());
                    return organisationRepository.save(organisation);
                }).orElseThrow(() -> new OrganisationNotFoundException((id)));
    }
    @PutMapping("/organisation/{id}/contribution")
    Organisation updateOrganisation(@RequestBody ProjectContribution newProjectContribution, @PathVariable Long id){
        organisationRepository.findById(id).orElseThrow(() -> (new OrganisationNotFoundException(id)))
                .addContribution(newProjectContribution);
        return organisationRepository.findById(id).get();

    }
    /* @PutMapping("/organisation/{id}/addsupporter/{supporter_id}")
    Organisation addSupporter(@PathVariable Long id, @PathVariable Long supporter_id){
        organisationRepository.
        return organisationRepository.findById(id)
                .map(organisation -> {
                    organisation.setSupporters(organisation.getSupporters().add(supporterRepository.findById(supporter_id)));
                });
    } */

    @DeleteMapping("/organisation/{id}")
    String deleteOrganisation(@PathVariable Long id){
        if (!organisationRepository.existsById(id)){
            throw new OrganisationNotFoundException(id);
        }
        organisationRepository.deleteById(id);
        return "Organisation with id " + id + " has been deleted succesfully.";
    }
}
