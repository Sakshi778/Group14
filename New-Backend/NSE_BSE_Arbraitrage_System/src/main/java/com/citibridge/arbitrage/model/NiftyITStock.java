package com.citibridge.arbitrage.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Document(collection="Nifty_IT_Stocks")
@Data
public class NiftyITStock {
	@Id
    private String id;

    private String Symbol;
    
    @Field("Company Name")
    private String companyName;
    
    @Field("BSE Price")
    private double bsePrice;
    
    @Field("NSE Price")
    private double nsePrice;
    
    @Field("Profit")
    private double profit;


}
