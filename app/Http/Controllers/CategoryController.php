<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index(){
        $c = Category::all();

        return response()->json([ 
            "success" => true,
            "cats" => $c,
        ], 200);
    }

    public function show($slug){
        $c = Category::where('slug', '=', $slug) ->firstOrFail();

        return response()->json([ 
            "data" => $c,
            "subcats" => $c->subcategories,
            "kids" =>  $c->kids,
            "activities" => $c->activities
        ], 200);
    }

    public function create(Request $request) {
        $validator = Validator::make($req->all(), [ 
            'name' => 'required|min:3|max:255|unique',
            'img' => 'required',
        ]);

        if ($validator->fails()) { 
            return response()->json([
                'success' => false,
                'error' => $validator->errors()
            ]);            
        }

        $c->name = $request->name;
        $c->img = $request->img;
        $c->slug = Str::slug($c->name, "-");
        $c->save();

        return reponse()->json([
            'success' => true
        ]);
    }
}
