package com.mugghuffins.savetheglobebackend.exceptions;

public class ProjectContributionNotFoundException extends RuntimeException{
    public ProjectContributionNotFoundException(Long id){
        super("Could not find the project contributing with id " + id);
    }
}
