package com.citibridge.arbitrage.controller;

import org.springframework.web.bind.annotation.RestController;

import com.citibridge.arbitrage.model.User;
import com.citibridge.arbitrage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin
public class UserController {
	
	private final UserService userService;
	
	
	@Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
	
	@GetMapping("/")
    public String handleRootRequest() {
        return "Hello, this is the root endpoint!";
        
    }
	
	
	
	@GetMapping("/{username}")
    public ResponseEntity<User> getUser(@PathVariable String username) {
        // Fetch user from database based on the userId
		
        User user = userService.getByUsername(username);

        if (user != null) {
            return ResponseEntity.ok(user); // Return 200 OK with the user data in the response body
        } else {
            return ResponseEntity.notFound().build(); // Return 404 Not Found if the user doesn't exist
        }
    }
	
	@PostMapping("/{username}/updateEmail")
    public User updateEmail(
            @PathVariable String username,
            @RequestBody User user
    ) {
        return userService.updateEmail(username, user.getEmail());
    }
	
	@PostMapping("/{username}/updateAddress")
    public User updateAddress(
            @PathVariable String username,
            @RequestBody User user
    ) {
		User response = null;
		if(user.getArea()!=null) {
			response = userService.updateArea(username, user.getArea());
		}
		else if(user.getCity()!=null) {
			response = userService.updateCity(username, user.getCity());
		}
		else if(user.getCountry()!=null) {
			response = userService.updateCountry(username, user.getCountry());
		}
		else if(user.getPin_code()!=null) {
			response = userService.updatePinCode(username, user.getPin_code());
		}
		else if(user.getState()!=null) {
			response = userService.updateState(username, user.getState());
		}
		else if(user.getStreet()!=null) {
			response = userService.updateStreet(username, user.getStreet());
		}
		
		return response;
    }
	
	@PostMapping("/{username}/updateMobile")
    public User updateMobileNo(
            @PathVariable String username,
            @RequestBody User user
    ) {
        return userService.updateMobileNo(username, user.getMobile_no());
    }

}
