package com.skiller.domain;

import java.util.List;

public final class Skill {
	private final String title;
	private final List<String> details;
	private final List<User> experts;

	public Skill(String title, List<String> details, List<User> experts) {
		this.title = title;
		this.details = details;
		this.experts = experts;
	}

	public String getTitle() {
		return title;
	}

	public List<String> getDetails() {
		return details;
	}

	public List<User> getExperts() {
		return experts;
	}
}
