<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Kid;
use App\Trophy;
use Illuminate\Support\Facades\Auth;

class TrophyController extends Controller
{
    public function index()
    {
        $t = Trophy::all();

        return response()->json([
             "data" => $t
        ], 201);
    }

    public function show($id)
    {
        $t = Trophy::findOrFail($id);
        return response()->json([
            'data' => $t,
            'Activity associate to trophy' => $t->activities,
        ], 201);
    }

    public function unlock($idKid,$idTrophy){
        $kid = Kid::findOrFail($idKid);
        $kid->trophies()->syncWithoutDetaching($idTrophy);
        
        return response()->json([
            'success' => true
        ], 200);
    }
}
