<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Kid;
use App\Activity;
use App\Creation;
use Illuminate\Support\Facades\Auth;

class CreationController extends Controller
{
    public function kidIndex($idKid)
    {
        $k = Kid::findOrFail($idKid);
        $c = Creation::all();
        // $c = Creation::all()->where('kid_id', '=', $idKid);
        dd($c);

        // if($c->kid_id != $idKid){
        //     abort(404);
        // }

        return response()->json([
            "data" => $c
        ], 200);
    }

    // public function parentIndex()
    // {
    //     $c = Creation::all();
    //     // $k = Kid::all();

    //     if($c->parent != Auth::id()){
    //         abort(404);
    //     }

    //     return response()->json([
    //         "data" => $c
    //     ], 200);
    // }

    public function show($idKid, $idCreation)
    {
        $k = Kid::findOrFail($idKid);
        $c = Creation::findOrFail($idCreation);

        if($c->kid_id != $idKid){
            abort(404);
        }

        return response()->json([
            "data" => $c
        ], 200);
    }

    public function create(Request $req, $idKid, $idActivity)
    {
        $validator = Validator::make($req->all(), [ 
            'img' => 'required|file|mimes:jpg,jpeg,png,bmp,tiff|max:300'
        ]);

        $kid = Kid::findOrFail($idKid);
        $activity = Activity::findOrFail($idActivity);
        if($req->file('img') != null){
            $name = $req->file('img')->hashName();
            $req->file('img')->move("uploads/".Auth::id()."/".$kid->id."/", $name);
        }

        $c = new Creation();
        if($req->file('img') != null){
            $c->img = ('/uploads/'.Auth::id().'/'.$name);
        }
        $c->kid_id = $idKid;
        $c->activity_id = $idActivity;

        $c->save();

         return response()->json([
            "data" => $c
        ], 200);
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function delete($id)
    {
        //
    }
}
