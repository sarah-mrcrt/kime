<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Creation extends Model
{
    protected $table = 'creations';

    public function kid(){
        return $this->belongsTo("App\Kid", "id");
    }
}
