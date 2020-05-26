<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Activities;

class ActivitiesController extends Controller
{
    public function showAll()
    {
        $a = Activities::all();

        return response()->json([
            'success' => true,
            'id' => $a->id,
            'name' => $a->name,
            'img' => $a->img,
            'txt_choice' => $a->txt_choice,
            'txt_win' => $a->txt_win,
            'trophie_id' => $a->trophie_id
        ], 201);
    }
}
