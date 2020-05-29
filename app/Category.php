<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    public function activities() {
        // 1 catégorie a plsr activitiés
        return $this->hasMany("App\Activity", "category_id");
    }

    public function kids() {
        return $this->belongsToMany("App\Kid", 'link_kids_categories','category_id','kid_id');
    }
}
