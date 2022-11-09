package com.example.tp2;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.RequestManager;
import com.example.tp2.model.Formation;
import java.util.List;

public class FormationAdapter extends RecyclerView.Adapter<FormationViewHolder> {

    private List<Formation> formations = null;
    private RequestManager glide;

    public FormationAdapter(List<Formation> formations, RequestManager glide) {
        if(formations != null) {
            this.formations = formations;
        }
        this.glide = glide;
    }

    @NonNull
    @Override
    public FormationViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType)
    {
        LayoutInflater inflater = LayoutInflater.from(parent.getContext());
        View view = inflater.inflate(R.layout.formation_layout, parent, false);
        return new FormationViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull FormationViewHolder holder, int position)
    {
        Formation formation = formations.get(position);
        holder.afficher(formation, this.glide);

    }

    //Simple méthode pour renvoyer la taille des données
    @Override
    public int getItemCount() {
        if(formations != null)
            return formations.size();
        return 0;
    }

}
