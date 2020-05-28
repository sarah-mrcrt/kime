<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Kid;
use App\Trophy;
use Illuminate\Support\Facades\Auth;

class TrophyController extends Controller
{
    public function unlock($idKid,$idTrophy){
        $kid = Kid::findOrFail($idKid);
        // if($kid->user_id != Auth::id() ){
        //     abort(404);
        // }
        $kid->trophies()->syncWithoutDetaching($idTrophy);
        
        return response()->json([
            'success' => "Kid win a trophy"
        ], 201);
    }
}
