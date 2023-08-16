package com.citibridge.arbitrage.model;

public class AuthResponse {
	private String message;

    public AuthResponse(String message) {
        this.setMessage(message);
    }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
