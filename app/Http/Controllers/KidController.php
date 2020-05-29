<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Kid;
use App\User;
use App\Category;

class KidController extends Controller
{
    
    public function index()
    {
        $k = Kid::all();

        if($k->user_id != Auth::id()){
            abort(404);
        }
        
         return response()->json([
             "message" => "success",
             "data" => $k
         ]);
    }

    public function show($id)
    {
        // if( !$req->validate(['id' => 'required|integer']) ) {
        //     return response()->json([
        //         'success' => false,
        //         'error' => 'ID non renseignée ou invalide'
        //     ]);      
        // }

        // $k = Kid::find($req->id);
        $k = Kid::findOrFail($id);
        if($k->user_id != Auth::id()){
            abort(404);
        }

        return response()->json([
            'success' => true,
            'id' => $k->id,
            'name' => $k->name,
            'date_of_birth' => $k->date_of_birth,
            'avatar_id' => $k->avatar_id,
            'categories' => $k->categories,
            'created_at' => $k->created_at,
            'updated_at' => $k->updated_at,
            'Avatar informations' => $k->avatar
        ], 201);
    }

    public function create(Request $req) 
    {
        $validator = Validator::make($req->all(), [ 
            'name' => 'required|min:3|max:255',
            'birthdate' => 'required',
            'avatar_id' => 'required',
            'categories' => 'required'
        ]);

        // dd($req->date_of_birth);
        if ($validator->fails()) { 
            return response()->json([
                'success' => false,
                'error' => $validator->errors()
            ]);            
        }

        $categories = $req->input('categories');

        $k = new Kid();
        $k->name = $req->input('name');
        $k->date_of_birth = $req->input('birthdate');
        $k->avatar_id = $req->input('avatar_id');
        $k->categories = implode(',', $req->categories);
        $k->user_id = Auth::id();

        $k->save();
        // Passage par une table pivot
        $k->categories()->attach($req->categories);

        return response()->json([
            'success' => 'Kid created successfully',
            "data" => $k
        ], 200);
    }

    public function update(Request $req, $id)
    {
        $req->validate([
            'name' => 'required|min:3|max:255',
            'date_of_birth' => 'required|before:3y|date_format:Y-m-d',
            'avatar_id' => 'required|min:1',
            'categories' => 'required|min:1'
        ]);

        
        $k = Kid::findOrFail($id);
        $k->name = $req->input('name');
        $k->date_of_birth = $req->input('date_of_birth');
        $k->avatar_id = $req->input('avatar_id');
        $k->categories = implode(',', $req->categories);

        $k->save();
        $k->categories()->detach($req->categories);

        return response()->json($k, 200);
    }

    public function delete($id)
    {
        // if( !$req->validate(['id' => 'required|integer']) ) {
        //     return response()->json([
        //         'success' => false,
        //         'error' => 'ID non renseignée ou invalide'
        //     ]);      
        // }

        $k = Kid::findOrFail($id);
        if($k->user_id != Auth::id()){
            abort(404);
        }
            
        // $k = Kid::find($req->id);
        $k->delete();

        return response()->json([
            'success' => true
        ], 201);
    }
}
