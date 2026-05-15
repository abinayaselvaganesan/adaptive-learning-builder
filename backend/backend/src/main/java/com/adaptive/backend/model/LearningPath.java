package com.adaptive.backend.model;

import java.util.List;

public class LearningPath {

    private String id;
    private String name;
    private String status;

    private List<Object> nodes;
    private List<Object> edges;

    public LearningPath() {
    }

    public LearningPath(
            String id,
            String name,
            String status,
            List<Object> nodes,
            List<Object> edges
    ) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.nodes = nodes;
        this.edges = edges;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<Object> getNodes() {
        return nodes;
    }

    public void setNodes(List<Object> nodes) {
        this.nodes = nodes;
    }

    public List<Object> getEdges() {
        return edges;
    }

    public void setEdges(List<Object> edges) {
        this.edges = edges;
    }
}