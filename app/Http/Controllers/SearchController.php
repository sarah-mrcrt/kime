<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Activity;
use App\Kid;

class SearchController extends Controller
{
    public function search($parameter) {
        $kids = Kid::whereRaw("name LIKE CONCAT(?,'%')", [$parameter])->get();
        $activities = Activity::whereRaw("name LIKE CONCAT(?,'%')", [$parameter])->get();
    }
}
