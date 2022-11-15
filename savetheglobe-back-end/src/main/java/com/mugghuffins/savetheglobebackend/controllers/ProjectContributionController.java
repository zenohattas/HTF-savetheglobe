package com.mugghuffins.savetheglobebackend.controllers;

import com.mugghuffins.savetheglobebackend.exceptions.ProjectContributionNotFoundException;
import com.mugghuffins.savetheglobebackend.models.ProjectContribution;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProjectContributionController {
    @Autowired
    private com.mugghuffins.savetheglobebackend.repository.ProjectContributionRepository projectContributionRepository;
    private com.mugghuffins.savetheglobebackend.repository.SupporterRepository supporterRepository;

    @PostMapping("/projectcontribution")
    ProjectContribution newProjectcontribution(@RequestBody ProjectContribution newProjectcontribution){
        return projectContributionRepository.save(newProjectcontribution);
    }

    @GetMapping("/projectcontributions")
    List<ProjectContribution> getAllProjectcontributions(){
        return projectContributionRepository.findAll();
    }

    @GetMapping("/projectcontribution/{id}")
    ProjectContribution getProjectcontributionById(@PathVariable Long id){
        return projectContributionRepository.findById(id)
                .orElseThrow(() -> new ProjectContributionNotFoundException(id));
    }

    @PutMapping("/projectcontribution//{id}")
    ProjectContribution updateProjectcontribution(@RequestBody ProjectContribution newProjectcontribution, @PathVariable Long id){
        return projectContributionRepository.findById(id)
                .map(projectcontribution -> {
                    projectcontribution.setAmountContributed(newProjectcontribution.getAmountContributed());
                    projectcontribution.setCarbonSaved(newProjectcontribution.getCarbonSaved());
                    projectcontribution.setUser(newProjectcontribution.getUser());
                    projectcontribution.setProject(newProjectcontribution.getProject());
                    return projectContributionRepository.save(projectcontribution);
                }).orElseThrow(() -> new ProjectContributionNotFoundException((id)));
    }

    @DeleteMapping("/projectcontribution/{id}")
    String deleteProjectcontribution(@PathVariable Long id){
        if (!projectContributionRepository.existsById(id)){
            throw new ProjectContributionNotFoundException(id);
        }
        projectContributionRepository.deleteById(id);
        return "Projectcontribution with id " + id + " has been deleted succesfully.";
    }
}
