<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Avatar extends Model
{
    public function kids() { 
        return $this->hasMany("App\Kid", "id");
    }
}
