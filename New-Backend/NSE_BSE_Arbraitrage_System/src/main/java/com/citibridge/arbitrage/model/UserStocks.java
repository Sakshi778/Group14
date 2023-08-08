package com.citibridge.arbitrage.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection = "User_Stocks")
public class UserStocks {
	@Id
    private String id;
	
	@Field("Username")
    private String username;
    
	@Field("Symbol")
    private String symbol;

    private Long Timestamp;
    
    @Field("Company Name")
    private String companyName;
    
    @Field("BSE Price")
    private Double bsePrice;
    
    @Field("NSE Price")
    private Double nsePrice;
    
    @Field("Profit")
    private double profit;
    
    public double getProfit() {
		return profit;
	}

	public void setProfit(double profit) {
		this.profit = profit;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public Long getTimestamp() {
		return Timestamp;
	}

	public void setTimestamp(Long timestamp) {
		Timestamp = timestamp;
	}

	public String getCompanyName() {
		return companyName;
	}

	public Double getBsePrice() {
		return bsePrice;
	}

	public void setBsePrice(Double bsePrice) {
		this.bsePrice = bsePrice;
	}

	public Double getNsePrice() {
		return nsePrice;
	}

	public void setNsePrice(Double nsePrice) {
		this.nsePrice = nsePrice;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
    
    
}
