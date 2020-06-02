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
            'success' => true,
            "data" => $c,
            "subcats" => $c->subcategories,
            "kids" =>  $c->kids,
            "activities" => $c->activities
        ], 200);
    }
}
