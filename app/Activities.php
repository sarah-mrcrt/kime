<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activities extends Model
{
    protected $table = 'activities';

    public function steps() {
        // 1 activité a plsr étapes
        return $this->hasMany("App\Steps", "activity_id");
    }
    public function chansonsDelete() {
        // Plsr étapes € a une activité
        return $this->belongsToMany('App\Steps', 'steps', 'activity_id', 'id');
    }
}
