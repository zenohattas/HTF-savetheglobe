package com.mugghuffins.savetheglobebackend.controllers;

import com.mugghuffins.savetheglobebackend.exceptions.ProjectNotFoundException;
import com.mugghuffins.savetheglobebackend.models.Project;
import com.mugghuffins.savetheglobebackend.models.Supporter;
import com.mugghuffins.savetheglobebackend.repository.SupporterRepository;
import net.bytebuddy.implementation.bytecode.Throw;
import org.apache.logging.log4j.util.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProjectController {
    @Autowired
    private com.mugghuffins.savetheglobebackend.repository.ProjectRepository projectRepository;
    private com.mugghuffins.savetheglobebackend.repository.SupporterRepository supporterRepository;

    @PostMapping("/project")
    Project newProject(@RequestBody Project newProject){
        return projectRepository.save(newProject);
    }

    @GetMapping("/projects")
    List<Project> getAllProjects(){
        return projectRepository.findAll();
    }

    @GetMapping("/project/{id}")
    Project getProjectById(@PathVariable Long id){
        return projectRepository.findById(id)
                .orElseThrow(() -> new ProjectNotFoundException(id));
    }

    @PutMapping("/project//{id}")
    Project updateProject(@RequestBody Project newProject, @PathVariable Long id){
        return projectRepository.findById(id)
                .map(project -> {
                    project.setProjectType(newProject.getProjectType());
                    project.setDescirtionShort(newProject.getDescirtionShort());
                    project.setDescriptionLong(newProject.getDescriptionLong());
                    project.setPicturePath(newProject.getPicturePath());
                    project.setLocation(newProject.getLocation());
                    project.setProjectName(newProject.getProjectName());
                    return projectRepository.save(project);
                }).orElseThrow(() -> new ProjectNotFoundException((id)));
    }

    @DeleteMapping("/project/{id}")
    String deleteProject(@PathVariable Long id){
        if (!projectRepository.existsById(id)){
            throw new ProjectNotFoundException(id);
        }
        projectRepository.deleteById(id);
        return "Project with id " + id + " has been deleted succesfully.";
    }
}
