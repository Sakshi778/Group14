package com.citibridge.arbitrage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.citibridge.arbitrage.model.UserStocks;
import com.citibridge.arbitrage.service.UserStocksService;

import java.util.*;

@RestController
@CrossOrigin
public class UserStocksController {
    private final UserStocksService userStocksService;

    @Autowired
    public UserStocksController(UserStocksService userStocksService) {
        this.userStocksService = userStocksService;
    }
    
    @GetMapping("/{username}/stocks")
    public ResponseEntity<List<UserStocks>> getUserStocksByUsername(@PathVariable String username) {
        List<UserStocks> userStocks = userStocksService.getUserStocksByUsername(username);
        return ResponseEntity.ok(userStocks);
    }

    @PostMapping("{username}/addStock")
    public ResponseEntity<List<UserStocks>> addUserStockForUsername(@RequestBody List<UserStocks> userStocks) {
    	List<UserStocks> savedUserStocks = new ArrayList<>();
    	for(int i=0;i<userStocks.size();i++) {
    		savedUserStocks.add(userStocksService.saveUserStock(userStocks.get(i)));
    	}
        return ResponseEntity.ok(savedUserStocks);
    }
    
    @DeleteMapping("/deleteStock")
    public void deleteStock(@RequestBody List<String> id) {
    	for(int i=0;i<id.size();i++) {
    		userStocksService.deleteById(id.get(i));
    		System.out.println(id.get(i));
    	}
    }

    
}

