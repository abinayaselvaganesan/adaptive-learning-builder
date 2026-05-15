package com.adaptive.backend.model;

import lombok.Data;

@Data
public class ComponentItem {

    private String id;
    private String title;
    private String shortDescription;
    private String type;
    private int approximateDurationMinutes;
}