<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Steps extends Model
{
     protected $table = 'steps';

     public function activity() { 
        return $this->belongsTo("App\Activities", "activity_id");
    }
}
