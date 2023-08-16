package com.citibridge.arbitrage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citibridge.arbitrage.model.NiftyITStock;
import com.citibridge.arbitrage.model.NiftyFiftyStock;
import com.citibridge.arbitrage.repo.NiftyITRepo;

@Service
public class NiftyITService {
	
	private final NiftyITRepo niftyItRepo;

    @Autowired
    public NiftyITService(NiftyITRepo niftyItRepo) {
        this.niftyItRepo = niftyItRepo;
    }
    
    public List<NiftyITStock> getAllStocks() {
        return niftyItRepo.findAll();
    }

}
