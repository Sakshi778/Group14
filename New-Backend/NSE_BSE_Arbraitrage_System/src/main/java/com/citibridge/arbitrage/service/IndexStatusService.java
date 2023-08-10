package com.citibridge.arbitrage.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citibridge.arbitrage.model.IndexStatus;
import com.citibridge.arbitrage.repo.IndexStatusRepo;

@Service
public class IndexStatusService {
	private IndexStatusRepo indexStatusRepo;
	
	@Autowired
	public IndexStatusService(IndexStatusRepo indexStatusRepo) {
		this.indexStatusRepo = indexStatusRepo;
	}
	
	public Optional<IndexStatus> getIndexStatus(String index) {
		Optional<IndexStatus> indexStatus = indexStatusRepo.findById(index);
		return indexStatus;
	}
	
}
