package com.citibridge.arbitrage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citibridge.arbitrage.model.StockDetails;
import com.citibridge.arbitrage.repo.StockDetailsRepo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

@Service
public class StockDetailsService {
	
	private StockDetailsRepo stockDetailsRepo;
	
	@Autowired
	public StockDetailsService(StockDetailsRepo stockDetailsRepo) {
		this.stockDetailsRepo = stockDetailsRepo;
	}
	
	private void executePythonScript(String symbol) {
		try {
            String[] command = {"python", "path/to/your/script.py", "arg1", "arg2"};
            ProcessBuilder processBuilder = new ProcessBuilder(command);
            Process process = processBuilder.start();

            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }

            int exitCode = process.waitFor();
            System.out.println("Script executed with exit code: " + exitCode);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
	}
	
	public StockDetails getStockByID(String symbol){
		StockDetails stockDetails = null;
		
		return stockDetails;
	}

}
