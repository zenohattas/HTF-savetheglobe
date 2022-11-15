package com.mugghuffins.savetheglobebackend.exceptions;

public class OrganisationNotFoundException extends  RuntimeException{
    public OrganisationNotFoundException(Long id){
        super("Could not find the organisation with id " + id);
    }
}
