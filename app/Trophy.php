<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trophies extends Model
{
    public function kids() {
        return $this->belongsToMany("App\Kid", 'link_kids_trophies', 'trophy_id', 'kid_id');
    }
}
