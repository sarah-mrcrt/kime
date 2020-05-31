<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/{path?}', 'app');
Route::view('/{path1?}/{path2?}', 'app');
Route::view('/test/test', 'testpage');

// User
Route::group([ // Adding API prefix to all API routes
    'prefix' => 'api',

], function () {
    Route::post('auth/login', 'API\UserController@login');
    Route::post('auth/register', 'API\UserController@register');
    Route::post('auth/logout', 'API\UserController@logout');
    Route::post('auth/user', 'API\UserController@details');

// Route::group(['middleware' => 'auth:api'], function () {

    // Parent profile
    Route::get('/userUpdate/{user}','API\UserController@update');
    Route::delete('/userDelete/{user}','API\UserController@destroy');
    Route::get('/creations/allNews','CreationController@parentIndex');


    // Kids & Creations
    Route::get('/kids/all','KidController@index');
    Route::get('/kid/{id}','KidController@show')->where('id', '[0-9]+');
    Route::post('/kid/create','KidController@create');
    Route::put('/kidUpdate/{id}','KidController@update')->where('id', '[0-9]+');
    Route::delete('/kidDelete/{id}','KidController@delete')->where('id', '[0-9]+');

    Route::get('/creationsAll/{idkid}', 'CreationController@kidIndex')->where('idkid', '[0-9]+');
    Route::get('/creation/{idKid}+{idCreation}', 'CreationController@show')->where(['idKid' => '[0-9]+', 'idCreation' => '[0-9]+']);
    Route::post('creationCreate/{idKid}+{idActivity}', 'CreationController@create')->where(['idKid' => '[0-9]+', 'idActivity' => '[0-9]+']);
    Route::delete('/creationDelete/{id}','CreationController@delete');


    // Activities & Steps
    Route::get('/activities/all', 'ActivityController@index');
    Route::get('/activity/{id}', 'ActivityController@show')->where('id', '[0-9]+');
    Route::get('/activity/{idActivity}+{position}', 'StepController@show')->where(['idActivity' => '[0-9]+', 'position' => '[0-9]+']);

    Route::middleware('admin')->group(function () {
        Route::post('/activity/create', 'ActivityController@create');
        Route::put('/activityUpdate/{id}','ActivityController@update')->where('id', '[0-9]+');
        Route::delete('/activityDelete/{id}','ActivityController@delete')->where('id', '[0-9]+');
        //modifier, supprimer, ajouter steps
    });


    // Trophies
    Route::get('/trophies/all', 'TrophyController@index');
    Route::get('/trophy/{id}','TrophyController@show')->where('id', '[0-9]+');
    Route::get('/winTrophy/{idKid}-{idTrophy}', 'TrophyController@unlock')->where(['idKid'=>'[0-9]+', 'idTrophy'=> '[0-9]+']);


    // Categories & Sub categories
    Route::get('/categories/all', 'CategoryController@index');
    Route::get('/category/{id}', 'CategoryController@show')->where('slug', '^(?!.*dashboard).*$');


    Route::get('/subcategories/all', 'SubCategoryController@index');
    // PB, la route ne veux pas récuperer le '-'
    Route::get('/category/{slugCategory}-{slugSubCategory}', 'SubCategoryController@show')->where(['slugCategory' => '^(?!.*dashboard).*$', 'slugSubCategory' => '^[a-zA-Z0-9]+([\-]?[a-zA-Z0-9]+)*$']);


    // Avatars
    Route::get('/avatars/all', 'AvatarController@index');
    Route::get('/avatar/{id}', 'AvatarController@show')->where('id', '[0-9]+');


    // Search
    Route::get('/search/{parameter}','SearchController@search');

    // });
}); // Ending API prefix group

Auth::routes();