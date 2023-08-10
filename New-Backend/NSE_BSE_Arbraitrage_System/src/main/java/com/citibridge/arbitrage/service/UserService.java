package com.citibridge.arbitrage.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citibridge.arbitrage.model.User;
import com.citibridge.arbitrage.repo.UserRepo;
import com.citibridge.arbitrage.exceptions.UserNotFoundException;

@Service
public class UserService {
	private final UserRepo userRepo;
	
	
	@Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }
	
	public User getByUsername(String username) {
        return userRepo.findByUsername(username);
    }
	
	public User updateEmail(String username, String newEmail) {
        Optional<User> userOptional = userRepo.findById(username);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            user.setEmail(newEmail);
            
            return userRepo.save(user);
        } else {
            throw new UserNotFoundException("User not found with the specified username: " + username);
        }
    }
	
	public User updateStreet(String username, String newStreet) {
        Optional<User> userOptional = userRepo.findById(username);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            user.setStreet(newStreet);
            
            return userRepo.save(user);
        } else {
            throw new UserNotFoundException("User not found with the specified username: " + username);
        }
    }
	
	public User updateArea(String username, String newArea) {
        Optional<User> userOptional = userRepo.findById(username);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            user.setArea(newArea);
            
            return userRepo.save(user);
        } else {
            throw new UserNotFoundException("User not found with the specified username: " + username);
        }
    }
	
	public User updateCity(String username, String newCity) {
        Optional<User> userOptional = userRepo.findById(username);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            user.setCity(newCity);
            
            return userRepo.save(user);
        } else {
            throw new UserNotFoundException("User not found with the specified username: " + username);
        }
    }
	
	public User updateState(String username, String newState) {
        Optional<User> userOptional = userRepo.findById(username);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            user.setState(newState);
            
            return userRepo.save(user);
        } else {
            throw new UserNotFoundException("User not found with the specified username: " + username);
        }
    }
	
	public User updateCountry(String username, String newCountry) {
        Optional<User> userOptional = userRepo.findById(username);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            user.setStreet(newCountry);
            
            return userRepo.save(user);
        } else {
            throw new UserNotFoundException("User not found with the specified username: " + username);
        }
    }
	
	public User updatePinCode(String username, String newPinCode) {
        Optional<User> userOptional = userRepo.findById(username);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            user.setPin_code(newPinCode);
            
            return userRepo.save(user);
        } else {
            throw new UserNotFoundException("User not found with the specified username: " + username);
        }
    }
	
	public User updateMobileNo(String username, String newMobileNo) {
        Optional<User> userOptional = userRepo.findById(username);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            user.setMobile_no(newMobileNo);
            
            return userRepo.save(user);
        } else {
            throw new UserNotFoundException("User not found with the specified username: " + username);
        }
    }
	
	public User updatePassword(String username, String newPassword) {
        Optional<User> userOptional = userRepo.findById(username);
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            user.setPassword(newPassword);
            
            return userRepo.save(user);
        } else {
            throw new UserNotFoundException("User not found with the specified username: " + username);
        }
    }
	
	public boolean authenticateUser(String username, String password) {
        User user = userRepo.findByUsername(username);

        if (user != null && user.getPassword().equals(password)) {
            return true; // Authentication success
        }

        return false; // Authentication failed
    }
}
