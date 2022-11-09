package com.example.tp2;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;

import com.bumptech.glide.Glide;
import com.example.tp2.model.Formation;

import java.util.ArrayList;
import java.util.List;

public class MainActivity3 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);

        recyclerView = (RecyclerView)findViewById(R.id.rvFormations);
        recyclerView.setHasFixedSize(true);
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        List<Formation> formations = getFormationData();

        adapter = new FormationAdapter(formations , Glide.with(this));
        recyclerView.setAdapter(adapter);

    }

    private RecyclerView recyclerView; // la vue
    private RecyclerView.Adapter adapter; // l'adaptateur
    private RecyclerView.LayoutManager layoutManager; // le gestionnaire de mise en page


    private List<Formation> getFormationData() {
        List<Formation> formations = new ArrayList<Formation>();
        formations.add(new Formation("Java", "Ceci est un cour sur le language Java.", "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png", "Dev" ));
        formations.add(new Formation("Python", "Ceci est un cour sur le language python.", "https://uploads-ssl.webflow.com/60ec34540d013784844d2ee2/61d42d538aec6733243470a7_Python-logo.png", "Dev" ));

        formations.add(new Formation("Javascript", "Ceci est un cour sur le language Javascript.", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png", "Dev" ));
        return formations;

    }

}