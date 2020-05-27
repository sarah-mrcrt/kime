<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Steps;
use App\Activities;
// use Illuminate\Database\Eloquent\Collection;

class StepsController extends Controller
{

    public function show($idActivity, $position){
        // $a = Activities::findOrFail($idA);
        // $s = Steps::where('position', '=', $position)->firstOrFail();
        $s = Steps::where([['position', '=', $position],['activity_id', '=', $idActivity]])->firstOrFail();;

        return response()->json([
            'success' => true,
            'id' => $s->id,
            'position' => $s->position,
            'name' => $s->name,
            'img' => $s->img,
            'title' => $s->title,
            'text' => $s->text,
            'activity_id' => $s->activity_id
        ], 201);
    }
}
