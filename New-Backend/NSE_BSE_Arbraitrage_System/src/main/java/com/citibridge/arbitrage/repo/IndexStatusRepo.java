package com.citibridge.arbitrage.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.citibridge.arbitrage.model.IndexStatus;

@Repository
public interface IndexStatusRepo extends MongoRepository<IndexStatus, String> {
}
