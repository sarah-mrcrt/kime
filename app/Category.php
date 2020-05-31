<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    public function subcategories() {
        return $this->hasMany('App\SubCategory', 'category_id');
    }

    public function activities() {
        // 1 catégorie a plsr activitiés
         return $this->hasMany('App\Activity', 'sub_category_id')
          ->join('sub_categories', 'sub_categories.id', '=', 'activities.sub_category_id')
          ->join('categories', 'categories.id', '=', 'sub_categories.category_id')
         ;
    }

    public function kids() {
        return $this->belongsToMany("App\Kid", 'link_kids_categories','category_id','kid_id');
    }
}
