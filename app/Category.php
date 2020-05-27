<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    public function activities() {
        // 1 catégorie a plsr activitiés
        return $this->hasMany("App\Activities", "category_id");
    }
}
