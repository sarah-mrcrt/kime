<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Kid;
use App\Activity;
use App\Creation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CreationController extends Controller
{
    public function kidIndex($idKid)
    {
        $k = Kid::findOrFail($idKid);
        $c = Creation::all()->where('kid_id', '=', $idKid)->sortByDesc('id');

        return response()->json([
            "data" => $c
        ], 200);
    }

    public function parentIndex()
    {
        // Afficher toutes les créations des enfants qui appartiennent à l'utilisateur connecté
        
        $c = DB::table('creations')
            ->where('kids.user_id', '=', Auth::id())
            ->join('kids', 'creations.kid_id', '=',  'kids.id')
            ->join('users', 'kids.user_id', '=', 'users.id')
            ->select('creations.*', 'kids.*', 'users.*')
            ->orderby('creations.id', 'desc')
            ->get();
        
        // $c = DB::table('users')
        //     ->join('kids', 'users.id', '=',  'kids.user_id')
        //     ->join('creations', 'kids.id', '=', 'creations.kid_id')
        //     ->select('kids.*', 'users.*','creations.*')
        //     ->orderby('creations.id', 'desc')
        //     ->get();
        
        // Je récupère tous les utilisa
        // $c = DB::table('creations')
        // ->join('kids', function ($join) {
        //     $join->on('creations.kid_id', '=', 'kids.id')
        //          ->where('kids.user_id', '=', Auth::id());
        // })
        // ->get();

        // $c = DB::table('users')
        // ->join('kids', function ($join) {
        //     $join->on('users.id', '=', 'kids.user_id')
        //          ->where('kids.user_id', '=', Auth::id());
        // })
        // ->get();

        // ->join('kids', 'kids.id', '=', 'creations.kid_id')
        // ->where('kids.user_id', '=', Auth::id());

        return response()->json([
            "data" => $c
        ], 200);
    }

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
        $c = Creation::findOrFail($id);
        $c->delete();

        return response()->json([
            'success' => true
        ], 201);
    }
}
