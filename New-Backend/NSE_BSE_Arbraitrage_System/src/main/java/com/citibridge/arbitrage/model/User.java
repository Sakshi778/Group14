package com.citibridge.arbitrage.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Data
@Document(collection="User")
public class User {
	
	@Id
	@Field("_id")
	private String username;
	
	@Field("Name")
	private String name;
	
	@Field("Password")
	private String password;
	
	@Field("Street")
	private String street;
	
	@Field("Area")
	private String area;
	
	@Field("City")
	private String city;
	
	@Field("State")
	private String state;
	
	@Field("Country")
	private String country;
	
	@Field("PIN Code")
	private String pin_code;
	
	@Field("Mobile No")
	private String mobile_no;
	
	@Field("Email")
	private String email;
	
	@Field("Gender")
	private String gender;
	
	@Field("Birth Date")
	private String birth_date;

	
}
