package com.citibridge.arbitrage.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.citibridge.arbitrage.model.NiftyITStock;
import com.citibridge.arbitrage.model.StockDetails;
import com.citibridge.arbitrage.model.IndexStatus;
import com.citibridge.arbitrage.model.NiftyFiftyStock;
import com.citibridge.arbitrage.service.IndexStatusService;
import com.citibridge.arbitrage.service.MarketStatusService;
import com.citibridge.arbitrage.service.NiftyFiftyService;
import com.citibridge.arbitrage.service.NiftyITService;
import com.citibridge.arbitrage.service.StockDetailsService;


@RestController
@CrossOrigin
public class StocksDetailsController {
	
	private final NiftyFiftyService niftyFiftyService;
	private final NiftyITService niftyITService;
	private final StockDetailsService stockDetailsService;
	private final IndexStatusService  indexStatusService;
	private final MarketStatusService marketStatusService;
	
    @Autowired
    public StocksDetailsController(NiftyFiftyService niftyFiftyService, NiftyITService niftyITService, StockDetailsService stockDetailsService, IndexStatusService indexStatusService, MarketStatusService marketStatusService) {
        this.niftyFiftyService = niftyFiftyService;
        this.niftyITService = niftyITService;
        this.stockDetailsService = stockDetailsService;
        this.indexStatusService = indexStatusService;
        this.marketStatusService = marketStatusService;
    }
    
    @GetMapping("/nifty50")
    public ResponseEntity<List<NiftyFiftyStock>> getAllNifty50Stocks() {
        List<NiftyFiftyStock> stockList = niftyFiftyService.getAllStocks();
        return ResponseEntity.ok(stockList);
    }
    
    @GetMapping("/niftyIT")
    public ResponseEntity<List<NiftyITStock>> getAllNiftyITStocks() {
        List<NiftyITStock> stockList = niftyITService.getAllStocks();
        return ResponseEntity.ok(stockList);
    }
    
    @GetMapping("/marketStatus")
    public boolean getMarketStatus() {
    	return marketStatusService.getMarketStatus();
    }
    
    @GetMapping("/indexStatus/{index}")
    public IndexStatus getIndexStatus(@PathVariable String index) {
    	Optional<IndexStatus> indexStatusOp = indexStatusService.getIndexStatus(index);
    	IndexStatus value = indexStatusOp.orElse(null);
        return value;
    }
    
    @GetMapping("/getstockdetails/{symbol}")
    public StockDetails getStockDetails(@PathVariable String symbol) {
    	StockDetails stockDetails = stockDetailsService.getStockByID(symbol);
    	
    	return stockDetails;
    }

}
