<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Steps;
use App\Activities;
// use Illuminate\Database\Eloquent\Collection;

class StepsController extends Controller
{
    // public function show($id)
    // {
    //     $k = Kid::findOrFail($id);
        
    //     return response()->json([
    //         'success' => true,
    //         'id' => $k->id,
    //         'name' => $k->name,
    //         'age' => $k->age,
    //         'avatar' => $k->avatar
    //     ], 201);
    // }

    public function show($idA, $idS){
        $a = Activities::findOrFail($idA);
        $s = Steps::findOrFail($idS);
        // ->sortBy('ordre');     
        
// $project = Project::where('id',$id);

        // if(Steps::all()->id != Activities::all()->id){
        //     abort(404);
        // }
        
        return response()->json([
            'success' => true,
            'id' => $s->id,
            'ordre' => $s->ordre,
            'name' => $s->name,
            'img' => $s->img,
            'title' => $s->title,
            'text' => $s->text,
            'activities_id' => $s->activities_id
        ], 201);
    }
}
