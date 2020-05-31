<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Activity;
use App\Creation;
use App\Kid;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{
    public function search($parameter) {
        $kids = Kid::where('user_id', '=', Auth::id())->whereRaw("name LIKE CONCAT(?,'%')", [$parameter])->get();

        // Afficher la création qui a pour nom l'activité XX
        $creations = Creation::
        join('activities', 'activities.id', '=', 'creations.activity_id')
        ->whereRaw("name LIKE CONCAT(?,'%')", [$parameter])->get();

        return response()->json([
            'recherche' => $parameter,
            'activity' => $creations,
            'kid' => $kids, 
        ], 200);
    }
}
