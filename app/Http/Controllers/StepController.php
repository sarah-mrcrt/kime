<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Step;
use App\Activity;
// use Illuminate\Database\Eloquent\Collection;

class StepController extends Controller
{

    public function show($idActivity, $position){
        $s = Step::where([['position', '=', $position],['activity_id', '=', $idActivity]])->firstOrFail();

        return response()->json([
            'data' => $s,
            'activity_id' => $s->activity_id
        ], 201);
    }
}
