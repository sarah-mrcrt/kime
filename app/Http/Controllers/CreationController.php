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
    // public function create(Request $req, $activity_id, $kid_id)
    // {
    //     $kid = Kid::findOrFail($kid_id);
    //     $activity = Activity::findOrFail($activity_id);
        
    //     $validator = Validator::make($req->all(), [ 
    //         'img' => 'file|mimes:jpg,jpeg,png,bmp,tiff|max:300'
    //     ]);

    //     if($req->file('img') != null){
    //         $name = $req->file('img')->hashName();
    //         $req->file('img')->move("uploads/".Auth::id()."/".$kid, $name);
    //     }

    //     $c = new Creation();
    //     $c->img = $req->input('img');
    //     $c->user_id = $kid;
    //     //$comment->project_id = $project->id;
    //     $c->activity_id = $activity;

    //     $c->save();

    //     return reponse()->json([
    //         'data' => $c
    //     ]);
    // }

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
