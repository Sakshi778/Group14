package com.citibridge.arbitrage.service;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.citibridge.arbitrage.model.NiftyFiftyStock;
import com.citibridge.arbitrage.repo.NiftyFiftyRepo;

@Service
public class NiftyFiftyService {
	
		
	private final NiftyFiftyRepo stockDetailsRepo;

    @Autowired
    public NiftyFiftyService(NiftyFiftyRepo stockDetailsRepo) {
        this.stockDetailsRepo = stockDetailsRepo;
    }
    
    public List<NiftyFiftyStock> getAllStocks() {
        return stockDetailsRepo.findAll();
    }
	
}
