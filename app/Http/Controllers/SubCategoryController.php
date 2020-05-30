<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SubCategory;
use App\Category;

class SubCategoryController extends Controller
{
    public function index()
    {
        //
    }

    public function show($slugCategory, $slugSubCategory)
    {
        $category = Category::where('slug', '=', $slugCategory) ->firstOrFail();
        $subcategory = SubCategory::where('slug', '=', $slugSubCategory) ->firstOrFail();

        return response()->json([ 
            // "data" => $subcategory,
            //  "Category of the subcategory" => $subcategory->category,
            "Activities from the subcategory" => $subcategory->activities
        ], 201);
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
