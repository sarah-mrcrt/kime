<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Kid;

class KidController extends Controller
{
    public function get(Request $req)
    {
        if( !$req->validate(['id' => 'required|integer']) ) {
            return response()->json([
                'success' => false,
                'error' => 'ID non renseignée ou invalide'
            ]);      
        }

        $k = Kid::find($req->id);

        return response()->json([
            'success' => true,
            'id' => $k->id,
            'name' => $k->name,
            'age' => $k->age,
            'avatar' => $k->avatar
        ], 201);
    }

    public function create(Request $req) 
    {
        $validator = Validator::make($request->all(), [ 
            'name' => 'required|min:3|max:255',
            'age' => 'required|integer',
            'avatar' => 'required|file',
        ]);

        if ($validator->fails()) { 
            return response()->json([
                'success' => false,
                'error' => $validator->errors()
            ]);            
        }

        $k = new Kid();
        $k->name = $req->name;
        $k->age = $req->age;
        $k->avatar = $req->avatar;
        $k->user_id = Auth::id();

        $k->save();

        return response()->json([
            'success' => true,
            'id' => $k->id,
            'name' => $k->name,
            'age' => $k->age,
            'avatar' => $k->avatar
        ], 201);
    }

    public function delete(Request $request)
    {
        if( !$req->validate(['id' => 'required|integer']) ) {
            return response()->json([
                'success' => false,
                'error' => 'ID non renseignée ou invalide'
            ]);      
        }

        $k = Kid::find($req->id);
        $k->delete();

        return response()->json([
            'success' => true
        ], 201);
    }
}
