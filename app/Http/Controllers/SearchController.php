<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Activity;
use App\Kid;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{
    public function search($parameter) {
        $kids = Kid::where('user_id', '=', Auth::id())->whereRaw("name LIKE CONCAT(?,'%')", [$parameter])->get();
        
        $activities = Activity::whereRaw("name LIKE CONCAT(?,'%')", [$parameter])->get();

        return response()->json([
            'recherche' => $parameter,
            'activity' => $activities,
            'kid' => $kids, 
        ], 200);
    }
}
