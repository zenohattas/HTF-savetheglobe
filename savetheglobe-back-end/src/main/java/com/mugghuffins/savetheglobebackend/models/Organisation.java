package com.mugghuffins.savetheglobebackend.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Organisation {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @OneToOne
    private Address address;
    @OneToMany
    private List<Location> locations;
    @OneToMany
    private List<ProjectContribution> projectContributions;
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public List<Location> getLocations() {
        return locations;
    }

    public void setLocations(List<Location> locations) {
        this.locations = locations;
    }

    public List<ProjectContribution> getProjectContributions() {
        return projectContributions;
    }

    public void setProjectContributions(List<ProjectContribution> projectContributions) {
        this.projectContributions = projectContributions;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean addContribution(ProjectContribution newProjectContribution) { return this.projectContributions.add(newProjectContribution);}
}
