package com.citibridge.arbitrage.service;

import java.io.IOException;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
public class PythonScriptExecutorService {
	private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);
	
	@PostConstruct
    public void startPythonExecution() {
        scheduler.scheduleAtFixedRate(this::executePythonScriptForNIfty50, 0, 20, TimeUnit.SECONDS);
        scheduler.scheduleAtFixedRate(this::executePythonScriptForNIftyIT, 0, 5, TimeUnit.SECONDS);
    }
	
	private void executePythonScriptForNIfty50() {
		System.out.println("nifty 50");
        try {
            String pythonCommand = "python";
            String scriptAbsolutePath = "C:/Users/BHAKTEE/Documents/CitiBridge/Workflow/Group14/New-Backend/NSE_BSE_Arbraitrage_System/Python Scripts/getNifty50.py"; // Replace with actual script path

            ProcessBuilder processBuilder = new ProcessBuilder(pythonCommand, scriptAbsolutePath);
            processBuilder.redirectErrorStream(true);

            Process process = processBuilder.start();
            int exitCode = process.waitFor();

            System.out.println("Python script executed with exit code: " + exitCode);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

	private void executePythonScriptForNIftyIT() {
		System.out.println("nifty it");
        try {
            String pythonCommand = "python";
            String scriptAbsolutePath = "C:/Users/BHAKTEE/Documents/CitiBridge/Workflow/Group14/New-Backend/NSE_BSE_Arbraitrage_System/Python Scripts/getNiftyIt.py"; // Replace with actual script path

            ProcessBuilder processBuilder = new ProcessBuilder(pythonCommand, scriptAbsolutePath);
            processBuilder.redirectErrorStream(true);

            Process process = processBuilder.start();
            int exitCode = process.waitFor();

            System.out.println("Python script executed with exit code: " + exitCode);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

}
