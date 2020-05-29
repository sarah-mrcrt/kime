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
        return $this->hasOne('App\Category', 'id', 'category_id');
    }

    public function kids() {
        // Récuperer les enfants appartenant à la même catégorie que l'activité
        return $this->belongsToMany('App\Kid', 'link_kids_categories', 'category_id')
        ->join('categories', 'categories.id', '=', 'link_kids_categories.category_id')
        ->join('activities', 'activities.category_id', '=', 'categories.id');
        // Possible de le faire dans le front : 
        //if(kids.category_id == activities.category_id)
    }
}
