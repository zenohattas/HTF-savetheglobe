package com.mugghuffins.savetheglobebackend.repository;

import com.mugghuffins.savetheglobebackend.models.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrganisationRepository extends JpaRepository<Organisation, Long> {
}
