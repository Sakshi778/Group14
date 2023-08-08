package com.citibridge.arbitrage.repo;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.citibridge.arbitrage.model.UserStocks;
import org.springframework.stereotype.Repository;


@Repository
public interface UserStocksRepo extends MongoRepository<UserStocks, String>{
	List<UserStocks> findByUsername(String username);
//	void deleteByUsernameAndSymbol(String username, String symbol);
}
