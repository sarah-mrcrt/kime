<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Steps;
use App\Activities;
// use Illuminate\Database\Eloquent\Collection;

class StepsController extends Controller
{

    public function show($idA, $idS){
        // $a = Activities::findOrFail($idA)->steps()->get();
        // $a = Activities::findOrFail($idA)->join('steps', 'steps.activity_id', '=', 'activities.id')->where('activity_id','=',$idA)->get();
        $a = Activities::findOrFail($idA);
        $s = Steps::findOrFail($idS);

        return response()->json([
            'success' => true,
            'id' => $s->id,
            'ordre' => $s->ordre,
            'name' => $s->name,
            'img' => $s->img,
            'title' => $s->title,
            'text' => $s->text,
            'activity_id' => $s->activity_id
        ], 201);
    }
}
