<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function(Request $request) {
    return $request->user();
});    

// Parent profile
Route::get('/user', 'API\UserController@details');
Route::get('/user/update/{user}','API\UserController@update');
Route::delete('/user/delete/{user}','API\UserController@destroy');
Route::get('/creations/allNews/{idParent}','CreationController@parentIndex')->where('idParent', '[0-9]+');


// Kids & Creations
Route::get('/kids/all','KidController@index');
Route::get('/kid/{id}','KidController@show')->where('id', '[0-9]+');
Route::post('/kid/create','KidController@create');
Route::put('/kid/update/{id}','KidController@update')->where('id', '[0-9]+');
Route::delete('/kid/delete/{id}','KidController@delete')->where('id', '[0-9]+');

Route::get('/creations/all/{idkid}', 'CreationController@kidIndex')->where('idkid', '[0-9]+');
Route::get('/creation/{idKid}/{idCreation}', 'CreationController@show')->where(['idKid' => '[0-9]+', 'idCreation' => '[0-9]+']);
Route::post('creationCreate/{idKid}/{idActivity}', 'CreationController@create')->where(['idKid' => '[0-9]+', 'idActivity' => '[0-9]+']);
Route::delete('/creation/delete/{id}','CreationController@delete');


// Activities & Steps
Route::get('/activities/all', 'ActivityController@index');
Route::get('/activity/{id}', 'ActivityController@show')->where('id', '[0-9]+');
Route::get('/activity/{idActivity}/{position}', 'StepController@show')->where(['idActivity' => '[0-9]+', 'position' => '[0-9]+']);

Route::middleware('admin')->group(function () {
    Route::post('/activity/create', 'ActivityController@create');
    Route::put('/activity/update/{id}','ActivityController@update')->where('id', '[0-9]+');
    Route::delete('/activity/delete/{id}','ActivityController@delete')->where('id', '[0-9]+');

    Route::post('/step/{idActivity}/create', 'StepController@create');
    //modifier, supprimer steps
});


// Trophies
Route::get('/trophies/all', 'TrophyController@index');
Route::get('/trophy/{id}','TrophyController@show')->where('id', '[0-9]+');
Route::get('/winTrophy/{idKid}/{idTrophy}', 'TrophyController@unlock')->where(['idKid'=>'[0-9]+', 'idTrophy'=> '[0-9]+']);


// Categories & Sub categories
Route::get('/categories/all', 'CategoryController@index');
Route::get('/category/{id}', 'CategoryController@show')->where('slug', '^(?!.*dashboard).*$');
Route::get('/subcategories/all', 'SubCategoryController@index');
Route::get('/category/{slugCategory}/{slugSubCategory}', 'SubCategoryController@show')->where(['slugCategory' => '^(?!.*dashboard).*$', 'slugSubCategory' => '^[a-zA-Z0-9]+([\-]?[a-zA-Z0-9]+)*$']);


// Avatars
Route::get('/avatars/all', 'AvatarController@index');
Route::get('/avatar/{id}', 'AvatarController@show')->where('id', '[0-9]+');


// Search
Route::get('/search/{parameter}','SearchController@search')->where('parameter', '^(?!.*dashboard).*$');


// Mail
Route::get('/email', 'MailController@store');

Auth::routes();


Auth::routes();