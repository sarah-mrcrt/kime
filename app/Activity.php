<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $table = 'activities';

    public function steps() {
        // 1 activité a plsr étapes
        return $this->hasMany("App\Step", "activity_id");
    }

    public function trophy() { 
        return $this->hasOne("App\Trophy", "trophy_id");
    }

    public function category() {
        // Plsr activitiés € a une catégory
        return $this->belongsToMany('App\Category', 'activity_id');
    }
}
