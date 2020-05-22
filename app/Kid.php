<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Kid extends Model  {
    
    protected $table = 'kids';

    public function parent() { 
        return $this->belongsTo("App\User", "user_id");
    }
}
