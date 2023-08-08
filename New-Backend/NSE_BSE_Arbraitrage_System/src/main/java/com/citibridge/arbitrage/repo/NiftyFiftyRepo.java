package com.citibridge.arbitrage.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.citibridge.arbitrage.model.StockDetails; 

@Repository
public interface NiftyFiftyRepo extends MongoRepository<StockDetails, String> {

}
