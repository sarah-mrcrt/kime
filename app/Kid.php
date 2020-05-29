<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Kid extends Model  {
    
    protected $table = 'kids';

    public function parent() { 
        return $this->belongsTo("App\User", "user_id");
    }

    public function trophies() {
        return $this->belongsToMany("App\Trophy", 'link_kids_trophies', 'kid_id', 'trophy_id');
    }

    public function categories() {
        return $this->belongsToMany("App\Category", 'link_kids_categories','kid_id','category_id');
    }

    // Activités
}
