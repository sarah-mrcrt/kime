<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Steps extends Model
{
     protected $table = 'steps';

     public function activity() { 
         // pls étapes € a une activité
        return $this->belongsTo("App\Activities", "activities_id");
    }
}
