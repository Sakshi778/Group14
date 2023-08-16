package com.citibridge.arbitrage.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.citibridge.arbitrage.model.NiftyFiftyStock; 

@Repository
public interface NiftyFiftyRepo extends MongoRepository<NiftyFiftyStock, String> {

}
