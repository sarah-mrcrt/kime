<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    
    public function index(){
        $c = Category::all();
    }

    public function show($slug){
        // $c = Category::findOrFail($slug);
        // $c = Category::where(Str::slug('name'), '=', $slug) ->firstOrFail();


        // dd($slug);
        $c = Category::where('slug', '=', $slug) ->firstOrFail();

        return response()->json([ 
            // "Category data" => $c,
            "Activities from the category" => $c->activities ], 201);
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
        $str = strtolower($request->name);
        $c->slug = preg_replace('/\s+/', '-', $str);
        $c->save();

        return reponse()->json([
            'success' => true
        ]);
    }
    // Au clic d'une catégorie, j'affiche les activités associées
}
