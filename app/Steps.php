<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Steps extends Model
{
     protected $table = 'steps';

     public function activities() { 
        return $this->belongsTo("App\Activities", "user_id");
    }
}
