<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Activities;
use Validator;

class ActivitiesController extends Controller
{
    public function index()
    {
        $a = Activities::all();

        return response()->json([
             "message" => "success",
             "data" => $a
         ]);
    }

    public function show($id)
    {
        $a = Activities::findOrFail($id);

        return response()->json([
            'success' => true,
            'id' => $a->id,
            'name' => $a->name,
            'img' => $a->img,
            'txt_choice' => $a->txt_choice,
            'txt_win' => $a->txt_win,
            'category_id' => $a->category_id,
            'trophie_id' => $a->trophie_id
        ], 201);
    }

    public function create(Request $req) 
    {
        $validator = Validator::make($req->all(), [ 
            'name' => 'required|min:3|max:255',
            'img' => 'required',
            'txt_choice' => 'required',
            'txt_win' => 'required',
        ]);

        $a = new Activities();
        $a->name = $req->input('name');
        $a->img = $req->input('img');
        $a->txt_choice = $req->input('txt_choice');
        $a->txt_win = $req->input('txt_win');
        $a->save();

        return response()->json([
            'success' => true,
            'id' => $a->id,
            'name' => $a->name,
            'img' => $a->img,
            'txt_choice' => $a->txt_choice,
            'txt_win' => $a->txt_win,
            'category_id' => $a->category_id,
            'trophie_id' => $a->trophie_id
        ], 201);
    }

    public function update(Request $req, $id)
    {
        // $validator = Validator::make($req->all(), [ 
        //     'name' => 'required|min:3|max:255',
        //     'img' => 'required',
        //     'txt_choice' => 'required',
        //     'txt_win' => 'required',
        // ]);

        $a = Activities::findOrFail($id);
        $a->name = $req->input('name');
        $a->img = $req->input('img');
        $a->txt_choice = $req->input('txt_choice');
        $a->txt_win = $req->input('txt_win');
        $a->save();

        return response()->json("Update");
    }

    public function delete($id)
    {
        $k = Kid::findOrFail($id);
        $k->delete();

        return response()->json([
            'success' => true
        ], 201);
    }
}
