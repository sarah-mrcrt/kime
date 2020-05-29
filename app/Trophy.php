<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trophy extends Model
{
    protected $table = 'trophies';

    public function kids() {
        return $this->belongsToMany("App\Kid", 'link_kids_trophies', 'trophy_id', 'kid_id');
    }

    public function activities() {
        return $this->hasOne("App\Activity", "trophy_id");
    }
}
