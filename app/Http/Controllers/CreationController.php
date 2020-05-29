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
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $creations = Creation::all();

        if($creations->kid_id != Kid::id() ){
            abort(404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $c = Creation::findOrFail($id);
        $k = Kid::findOrFail($idK);

        if($c->kid_id != Auth::id()){
            abort(404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $req, $idKid, $idActivity)
    {
        $kid = Kid::all()->where('id', '=', $idKid);
        
        $validator = Validator::make($req->all(), [ 
            'img' => 'required|file|mimes:jpg,jpeg,png,bmp,tiff|max:300'
        ]);

        // $kid = Kid::findOrFail($idKid);
        $activity = Activity::findOrFail($idActivity);

        if($req->file('img') != null){
            $name = $req->file('img')->hashName();
            $req->file('img')->move("uploads/".Auth::id()."/".$kid, $name);
        }

        $c = new Creation();
        if($req->file('img') != null){
            $c->img = ('/uploads/'.Auth::id().'/'.$name);
        }
        // $c->img = $req->input('img');
        // $c->kid_id = $kid;
        //$comment->project_id = $project->id;
        // $c->activity_id = $activity;

        $c->save();

         return response()->json([
            "data" => $c
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete($id)
    {
        //
    }
}
