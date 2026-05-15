package com.adaptive.backend.controller;

import com.adaptive.backend.model.LearningPath;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/learning-paths")
@CrossOrigin("*")
public class LearningPathController {

    @PostMapping
    public LearningPath saveLearningPath(
            @RequestBody LearningPath learningPath
    ) {

        return learningPath;
    }
}