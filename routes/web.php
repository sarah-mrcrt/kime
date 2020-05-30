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
Route::view('/test/test', 'testpage');
Route::get('/deconnexion', 'API\UserController@deconnexion');

// User
Route::post('/api/auth/login', 'API\UserController@login');
Route::post('/api/auth/register', 'API\UserController@register');
Route::post('/api/auth/logout', 'API\UserController@logout');
Route::post('/api/auth/user', 'API\UserController@details');

// Route::group(['middleware' => 'auth:api'], function () {
    // Parent profile
    Route::get('/kids/allCreations','UserController@index');
    Route::get('/user/update/{id}','UserController@update');

    // Kids
    Route::get('/kids/all','KidController@index');
    Route::get('/kid/{id}','KidController@show')->where('id', '[0-9]+');
    Route::post('/kid/create','KidController@create')->where('id', '[0-9]+');
    Route::put('/kid/update/{id}','KidController@update')->where('id', '[0-9]+');
    Route::get('/kid/delete/{id}','KidController@delete')->where('id', '[0-9]+');

    // Kid's creations
    // Route::get('/creations/all', 'CreationController@index');
    // Route::get('/creation/{id}', 'CreationController@show')->where('id', '[0-9]+');
    Route::post('{idKid}/{idActivity}/creation/create', 'CreationController@create')->where(['idKid' => '[0-9]+', 'idActivity' => '[0-9]+']);
    // Route::get('/creation/delete/{id}','CreationController@delete')->where('id','[0-9]+')->middleware('auth');

    // Activities
    Route::get('/activities/all', 'ActivityController@index');
    Route::get('/activity/{id}', 'ActivityController@show')->where('id', '[0-9]+');
    // Route::middleware('admin')->group(function () {
        Route::post('/activity/create', 'ActivityController@create');
        Route::put('/activity/update/{id}','ActivityController@update')->where('id', '[0-9]+');
        Route::get('/activity/delete/{id}','ActivityController@delete')->where('id', '[0-9]+');
    // });

    // Steps
    Route::get('/activity/{idActivity}/{position}', 'StepController@show')->where(['idActivity' => '[0-9]+', 'position' => '[0-9]+']);
        //modifier, supprimer, ajouter + protection admin

    // Trophies
    Route::get('/trophies/all', 'TrophyController@index');
    Route::get('/trophy/{id}','TrophyController@show')->where('id', '[0-9]+');
    Route::get('/winTrophy/{idKid}/{idTrophy}', 'TrophyController@unlock')->where(['idKid' => '[0-9]+', 'idTrophy' => '[0-9]+']);

    // Categories
    Route::get('/categories/all', 'CategoryController@index');
    Route::get('/category/{slug}', 'CategoryController@show')->where('slug', '[a-z]+');

    // Sub categories

    // Avatars

// });

Auth::routes();