package com.example.tp2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {


        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        EditText txtname = findViewById(R.id.editTextName);
        String username =  txtname.getText().toString();

        EditText txtpassword = findViewById(R.id.editTextPassword);
        String password =  txtpassword.getText().toString();
    }

    public boolean checkUserPass(String username, String password){
        if (username.equals("vl") & password.equals("vl")){
            Toast.makeText(this, "Uer and pwd ok!", Toast.LENGTH_SHORT).show();
            Intent intent = new Intent(this, MainActivity2.class);
            startActivity(intent);
            return true;
        } else {
            Toast.makeText(this, "Faux user or pwd", Toast.LENGTH_SHORT).show();
            return false;
            }
        }
    public void changeActivity(View view){
        Intent intent = new Intent(this, MainActivity2.class);
        startActivity(intent);
    }
    public void changeActivity2(View view){
        Intent intent = new Intent(this, MainActivity3.class);
        startActivity(intent);
    }
    public void affiche(View view){
        EditText txtname = findViewById(R.id.editTextName);
        String username =  txtname.getText().toString();

        EditText txtpassword = findViewById(R.id.editTextPassword);
        String password =  txtpassword.getText().toString();
        checkUserPass(username, password);
    }
    }
