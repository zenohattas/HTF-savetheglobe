package com.mugghuffins.savetheglobebackend.models;

import javax.persistence.*;

@Entity
public class Supporter {
    @Id
    @GeneratedValue
    private Long Id;
    @OneToOne
    private User user;
    @OneToOne
    private ProjectContribution projectContribution;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ProjectContribution getProjectContribution() {
        return projectContribution;
    }

    public void setProjectContribution(ProjectContribution projectContribution) {
        this.projectContribution = projectContribution;
    }


}
