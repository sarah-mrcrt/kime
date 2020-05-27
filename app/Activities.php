<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activities extends Model
{
    protected $table = 'activities';

    public function steps() {
        // 1 activité a plsr étapes
        return $this->hasMany("App\Steps", "activities_id");
    }
    // public function stepss() {
    //     // Plsr étapes € a une activité
    //     return $this->belongsToMany('App\Steps', 'steps', 'activities_id', 'id');
    // }

    // public function chansons() {
    //     // Association chanson avec un utilisateur
    //     return $this->hasMany("App\Chanson", "utilisateur_id");
    // }
}
