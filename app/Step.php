<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Step extends Model
{
     protected $table = 'steps';

     public function activity() { 
         // pls étapes € a une activité
        return $this->belongsTo("App\Activity", "activities_id");
    }
}
