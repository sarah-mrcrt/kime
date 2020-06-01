<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Step;
use App\Activity;
use Validator;

class StepController extends Controller
{

    public function show($idActivity, $position){
        $s = Step::where([['position', '=', $position],['activity_id', '=', $idActivity]])->firstOrFail();

        return response()->json([
            'data' => $s,
            'activity_id' => $s->activity_id
        ], 201);
    }
    
    public function create(Request $req, $idActivity)
    {
        $validator = Validator::make($req->all(), [
            'position' => 'required|integer',
            'name' => 'required',
            'img' => 'required|file|mimes:jpg,jpeg,png,bmp,tiff|max:300',
            'title' => 'required',
            'text' => 'required',
        ]);

        $activity = Activity::findOrFail($idActivity);
        if($req->file('img') != null){
            $name = $req->file('img')->hashName();
            $req->file('img')->move("uploads/activities/".$activity->id."/", $name);
        }

        $s = new Step();
        $s->position = $req->input('position');
        $s->name = $req->input('name');
        if($req->file('img') != null){
            $c->img = ('/uploads/activities/'.$activity->id."/".$name);
        }
        $s->title = $req->input('title');
        $s->text = $req->input('text');
        $s->activity_id = $idActivity;

        $s->save();

         return response()->json([
            "data" => $s
        ], 200);
    }
}
