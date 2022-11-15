package com.mugghuffins.savetheglobebackend.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Project {
    @Id
    @GeneratedValue
    private Long Id;

    private project_type projectType;
    private String descirtionShort;
    private String descriptionLong;
    private String picturePath;
    private String projectName;
    @OneToMany
    private List<Location> location;

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public List<Location> getLocation() {
        return location;
    }

    public void setLocation(List<Location> location) {
        this.location = location;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public project_type getProjectType() {
        return projectType;
    }

    public void setProjectType(project_type projectType) {
        this.projectType = projectType;
    }

    public String getDescirtionShort() {
        return descirtionShort;
    }

    public void setDescirtionShort(String descirtionShort) {
        this.descirtionShort = descirtionShort;
    }

    public String getDescriptionLong() {
        return descriptionLong;
    }

    public void setDescriptionLong(String descriptionLong) {
        this.descriptionLong = descriptionLong;
    }

    public String getPicturePath() {
        return picturePath;
    }

    public void setPicturePath(String picturePath) {
        this.picturePath = picturePath;
    }
}
enum project_type{
    TREES,
    DAM,
    WATERMILLS,
    WINDTURBINES
}