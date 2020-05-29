<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Avatar extends Model
{
    protected $table = 'avatars';

    public function kids() { 
        return $this->hasMany("App\Kid", "id");
    }
}
