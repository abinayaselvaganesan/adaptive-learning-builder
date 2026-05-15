package com.adaptive.backend.controller;

import com.adaptive.backend.model.ComponentItem;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/components")
@CrossOrigin("*")
public class ComponentController {

    @GetMapping
    public Map<String, Object> getComponents() {

        List<ComponentItem> items = new ArrayList<>();

        ComponentItem assessment = new ComponentItem();

        assessment.setId("cmp-assess-1");
        assessment.setTitle("Math Assessment");
        assessment.setShortDescription("Baseline assessment");
        assessment.setType("assessment");
        assessment.setApproximateDurationMinutes(30);

        ComponentItem unit = new ComponentItem();

        unit.setId("cmp-unit-1");
        unit.setTitle("Easy Math Unit");
        unit.setShortDescription("Foundational practice");
        unit.setType("unit");
        unit.setApproximateDurationMinutes(45);

        items.add(assessment);
        items.add(unit);

        Map<String, Object> response =
                new HashMap<>();

        response.put("items", items);

        response.put("totalCount", items.size());

        return response;
    }
}