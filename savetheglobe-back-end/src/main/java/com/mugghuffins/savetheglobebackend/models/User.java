package com.mugghuffins.savetheglobebackend.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String username;
    private String email;
    @OneToOne
    private Referral referral;

    @OneToMany
    private List<ProjectContribution> supportedProjectContributions;
    @ElementCollection
    private List<String> socials;

    public Referral getRefferal() {
        return referral;
    }

    public void setRefferal(Referral referral) {
        this.referral = referral;
    }

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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public Referral getRefferals() {
        return referral;
    }

    public void setRefferals(Referral referral) {
        this.referral = referral;
    }

    public List<ProjectContribution> getSupportedProjects() {
        return supportedProjectContributions;
    }

    public void setSupportedProjects(List<ProjectContribution> supportedProjectContributions) {
        this.supportedProjectContributions = supportedProjectContributions;
    }

    public List<String> getSocials() {
        return socials;
    }

    public void setSocials(List<String> socials) {
        this.socials = socials;
    }




}
