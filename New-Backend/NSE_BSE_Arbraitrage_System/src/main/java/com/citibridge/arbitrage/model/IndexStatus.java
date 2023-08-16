package com.citibridge.arbitrage.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Document(collection="Market_Status")
@Data
public class IndexStatus {
	@Id
	private String id;
	
	@Field("Symbol")
	private String index;
	
	@Field("Current Price")
	private Double currentPrice;
	
	@Field("Last Updated Time")
	private String lastUpdatedTime;
}
