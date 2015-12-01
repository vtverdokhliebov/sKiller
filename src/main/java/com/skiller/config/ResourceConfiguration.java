package com.skiller.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class ResourceConfiguration extends WebMvcConfigurerAdapter {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        super.addResourceHandlers(registry);
        registry.addResourceHandler("/js/**").addResourceLocations("classpath:/resources/js/");
        registry.addResourceHandler("/css/**").addResourceLocations("classpath:/resources/css/");
        registry.addResourceHandler("/fonts/**").addResourceLocations("classpath:/resources/fonts/");
        registry.addResourceHandler("/index.html").addResourceLocations("classpath:/resources/index.html");
    }
}
