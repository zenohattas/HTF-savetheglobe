package com.mugghuffins.savetheglobebackend.exceptions;

public class ProjectNotFoundException extends RuntimeException{
    public ProjectNotFoundException(Long id){
        super("Could not find the project with id " + id);
    }

}
