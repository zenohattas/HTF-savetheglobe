package com.mugghuffins.savetheglobebackend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class ProjectContribution {
    @Id
    @GeneratedValue
    private Long id;
    @OneToOne
    private Project project;
    @OneToOne
    private User user;
    private int amountContributed;
    private int carbonSaved;


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public int getAmountContributed() {
        return amountContributed;
    }

    public void setAmountContributed(int amountContributed) {
        this.amountContributed = amountContributed;
    }

    public int getCarbonSaved() {
        return carbonSaved;
    }

    public void setCarbonSaved(int carbonSaved) {
        this.carbonSaved = carbonSaved;
    }

}