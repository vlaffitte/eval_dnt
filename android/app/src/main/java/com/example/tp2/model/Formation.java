package com.example.tp2.model;

import android.net.Uri;

public class Formation {
    private String name;
    private String description;
    private String imgUrl;
    private String tag;

    public Formation(String name, String description, String imgUrl, String tag) {
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        this.tag = tag;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public String getTag() {
        return tag;
    }
}
