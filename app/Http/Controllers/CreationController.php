<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Kid;
use App\Activity;
use App\User;
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

    public function parentIndex($idParent)
    {
        // // Afficher toutes les créations des enfants qui appartiennent à l'utilisateur connecté
        $c = DB::select("SELECT creations.* FROM creation FROM creations JOIN kids on kid_id=kids.id WHERE user_id=?", [$idParent]);
        
        if($idParent != Auth::id()){
            abort(404);
        }

        // // Je récupère tous les enfants de chaque créations qui appartiennent à l'utilisateur connecté
        // $kids = DB::table('creations')
        // ->join('kids', function ($join) {
        //     $join->on('creations.kid_id', '=', 'kids.id')
        //          ->where('kids.user_id', '=', Auth::id());
        // }) 
        // ->orderby('creations.id', 'desc')
        // ->get();

        // // Je récupère tous les utilisateurs de chaque créations d'un enfant qui appartiennent à cet utilisateur connecté
        // $k = DB::table('users')
        // ->join('kids', function ($join) {
        //     $join->on('users.id', '=', 'kids.user_id')
        //          ->where('kids.user_id', '=', Auth::id());
        // })
        // ->get();
        
        return response()->json([
            // "data" => $c,
            // "All kids" => $kids,
            // "All users" => $users,
            "All creations" => $c,
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
            $c->img = ('/uploads/'.Auth::id()."/".$kid->id."/".$name);
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
        ], 200);
    }
}
