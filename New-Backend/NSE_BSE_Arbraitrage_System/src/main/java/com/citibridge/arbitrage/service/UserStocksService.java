package com.citibridge.arbitrage.service;

import java.util.*;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.citibridge.arbitrage.model.UserStocks;
import com.citibridge.arbitrage.repo.UserStocksRepo;


@Service
public class UserStocksService {
	
	private UserStocksRepo userStocksRepo;
	
	@Autowired
    public UserStocksService(UserStocksRepo userStocksRepo) {
        this.userStocksRepo = userStocksRepo;
    }
	
	public List<UserStocks> getUserStocksByUsername(String username) {
        return userStocksRepo.findByUsername(username);
    }

    public UserStocks saveUserStock(UserStocks userStocks) {
        return userStocksRepo.save(userStocks);
    }
    
    public void deleteById(String id) {
    	userStocksRepo.deleteById(id);;
    }
	
	

}
