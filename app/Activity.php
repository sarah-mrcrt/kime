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

    public function category() {
        // Plsr activitiés € a une catégory
        return $this->hasOne('App\Category', 'id');
    }

    public function kids() {
        // Récuperer les enfants appartenant à la même catégorie
        return $this->belongsToMany('App\Kids', '');
    }
}
