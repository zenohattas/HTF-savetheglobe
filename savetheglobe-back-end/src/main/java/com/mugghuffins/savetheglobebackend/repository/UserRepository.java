package com.mugghuffins.savetheglobebackend.repository;

import com.mugghuffins.savetheglobebackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
