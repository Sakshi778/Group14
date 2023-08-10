package com.citibridge.arbitrage.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.citibridge.arbitrage.model.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<User, String> {
	
	User findByUsername(String username);
}
