<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Kid;
use App\User;

class KidController extends Controller
{
    
    public function index()
    {
        $k = Kid::all();
        
        return response('Hello World', 200);
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

        return response()->json([
            'success' => true,
            'id' => $k->id,
            'name' => $k->name,
            'age' => $k->age,
            'avatar' => $k->avatar,
            'categories' => $k->categories
        ], 201);
    }

    public function create(Request $req) 
    {
        $validator = Validator::make($req->all(), [ 
            'name' => 'required|min:3|max:255',
            'age' => 'required|integer',
            'avatar' => 'required',
            'categories' => 'required|min:1'
        ]);

        if ($validator->fails()) { 
            return response()->json([
                'success' => false,
                'error' => $validator->errors()
            ]);            
        }

        $k = new Kid();
        $k->name = $req->input('name');
        $k->age = $req->input('age');
        $k->avatar = $req->input('avatar');
        $k->categories = implode(',', $req->categories);
        $k->user_id = Auth::id();

        $k->save();

        return response()->json([
            'success' => true,
            'id' => $k->id,
            'name' => $k->name,
            'age' => $k->age,
            'avatar' => $k->avatar,
            'categories' => $k->categories
        ], 201);
    }

    public function update(Request $req, $id)
    {
        $k = Kid::findOrFail($id);
        // $k->update($req->all());
        $k->name = $req->input('name');
        $k->name = $req->input('name');
        $k->age = $req->input('age');

        $k->save();

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
        // $k = Kid::find($req->id);
        $k->delete();

        return response()->json([
            'success' => true
        ], 201);
    }
}
