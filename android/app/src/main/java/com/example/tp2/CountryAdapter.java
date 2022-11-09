package com.example.tp2;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.RequestManager;
import com.example.tp2.model.Country;

import java.util.List;

public class CountryAdapter extends RecyclerView.Adapter<CountryViewHolder>{
    private List<Country> countries = null;
    private RequestManager glide;

    public CountryAdapter(List<Country> countries, RequestManager glide) {
        if(countries != null){
            this.countries = countries;
        }
        this.glide = glide;
    }

    @NonNull
    @Override
    public CountryViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(parent.getContext());
        View view = inflater.inflate(R.layout.country_layout, parent, false);
        return new CountryViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull CountryViewHolder holder, int position) {
        Country country = countries.get(position);
        holder.afficher(country, this.glide);
    }

    @Override
    public int getItemCount() {
        if(countries != null)
            return countries.size();
        return 0;
    }
}
