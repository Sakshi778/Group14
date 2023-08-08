package com.citibridge.arbitrage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.citibridge.arbitrage.model.StockDetails;
import com.citibridge.arbitrage.service.NiftyFiftyService;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.DayOfWeek;

@RestController
@CrossOrigin
public class StocksDetailsController {
	
	private final NiftyFiftyService niftyFiftyService;

    @Autowired
    public StocksDetailsController(NiftyFiftyService niftyFiftyService) {
        this.niftyFiftyService = niftyFiftyService;
    }
    
    @GetMapping("/nifty50")
    public ResponseEntity<List<StockDetails>> getAllNifty50Stocks() {
        List<StockDetails> stockList = niftyFiftyService.getAllStocks();
        return ResponseEntity.ok(stockList);
    }
    
    @GetMapping("/marketStatus")
    public boolean getMarketStatus() {
    	LocalDate currentDate = LocalDate.now();
    	
    	if((currentDate.getDayOfWeek()==DayOfWeek.SATURDAY) || (currentDate.getDayOfWeek()==DayOfWeek.SUNDAY)) {
    		return false;
    	}
    	
    	LocalTime currentTime = LocalTime.now();
    	LocalTime openTime = LocalTime.of(9, 15, 0);
    	LocalTime closeTime = LocalTime.of(15, 30, 0);
    	
    	if(currentTime.isBefore(openTime) || currentTime.isAfter(closeTime)) {
    		return false;
    	}
    	
    	return true;
    }

}
