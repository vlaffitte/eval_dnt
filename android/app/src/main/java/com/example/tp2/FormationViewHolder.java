package com.example.tp2;


import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.RequestManager;
import com.bumptech.glide.request.RequestOptions;
import com.example.tp2.model.Formation;

public class FormationViewHolder  extends RecyclerView.ViewHolder {
    private final TextView name;
    private final TextView description;
    private final TextView tag;
    private final ImageView img;

    private Formation formation;

    public FormationViewHolder (final View itemView)
    {
        super(itemView);
        name = ((TextView)itemView.findViewById(R.id.formation_name));
        description = ((TextView)itemView.findViewById(R.id.formation_description));
        img = ((ImageView)itemView.findViewById(R.id.formation_img));
        tag = ((TextView)itemView.findViewById(R.id.formation_tag));
    }


    public void afficher(Formation formation, RequestManager glide) {
        this.formation = formation;

       name.setText(formation.getName());
       description.setText(formation.getDescription());
        tag.setText(formation.getTag());
        glide.load(formation.getImgUrl()).apply(RequestOptions.circleCropTransform()).into(img);
    }

}
