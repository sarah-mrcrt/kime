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
        return $this->hasOne("App\Trophy", "id", 'trophy_id');
    }

    public function subcategory() {
        // Plsr activitiés € a une sous-catégorie
        return $this->belongsTo('App\SubCategory', 'sub_category_id');
    }

    //  public function category() {
    //     return $this->belongsTo('App\Category', 'categories', "id")
    //     ->join('sub_categories', 'sub_categories.category_id', '=', 'categories.id')
    //     ->join('activities', 'activities.sub_category_id', '=', 'sub_categories.id');
    // }

    // public function kids() {
    //     // Fonction quand il n'y avait pas sub_category
    //     // Récuperer les enfants appartenant à la même catégorie que l'activité
    //     return $this->belongsToMany('App\Kid', 'link_kids_categories', 'category_id')
    //     ->join('categories', 'categories.id', '=', 'link_kids_categories.category_id')
    //     ->join('activities', 'activities.category_id', '=', 'categories.id');
    //     // Possible aussi de le faire dans le front : 
    //     //if(kids.category_id == activities.category_id)
    // }
}
