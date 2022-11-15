package com.mugghuffins.savetheglobebackend.repository;

import com.mugghuffins.savetheglobebackend.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
