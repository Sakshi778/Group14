package com.citibridge.arbitrage.service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.stereotype.Service;

@Service
public class MarketStatusService {
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
