<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SubCategory;
use App\Category;

class SubCategoryController extends Controller
{
    public function index()
    {
        $subcategory = SubCategory::all();
        return response()->json([ 
            "data" => $subcategory,
        ], 200);

    }

    public function show($slugCategory, $slugSubCategory)
    {
        $category = Category::where('slug', '=', $slugCategory) ->firstOrFail();
        $subcategory = SubCategory::where('slug', '=', $slugSubCategory) ->firstOrFail();

        return response()->json([ 
            'name' => $subcategory->name,
            'img' => $subcategory->img,
            'activities' => $subcategory->activities
        ], 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    
    public function destroy($id)
    {
        //
    }
}
