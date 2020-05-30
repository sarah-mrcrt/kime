<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Avatar;

class AvatarController extends Controller
{
    public function index()
    {
        $a = Avatar::all();

        return response()->json([ 
            "data" => $a,
        ], 201);
    }

    public function show($id)
    {
        $a = Avatar::findOrFail($id);

        return response()->json([ 
            "data" => $a,
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
