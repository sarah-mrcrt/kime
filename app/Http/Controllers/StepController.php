<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Step;
use App\Activity;
// use Illuminate\Database\Eloquent\Collection;

class StepController extends Controller
{

    public function show($idActivity, $position){
        // $a = Activity::findOrFail($idA);
        // $s = Step::where('position', '=', $position)->firstOrFail();
        $s = Step::where([['position', '=', $position],['activity_id', '=', $idActivity]])->firstOrFail();;

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
