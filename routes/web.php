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

// Kids
Route::get('/kids','KidController@index');
Route::get('/kid/{id}','KidController@show')->where('id', '[0-9]+');
Route::post('/kid/create','KidController@create')->where('id', '[0-9]+');
Route::put('/kid/update/{id}','KidController@update')->where('id', '[0-9]+');
Route::get('/kid/delete/{id}','KidController@delete')->where('id', '[0-9]+');

// Kid profile
// Route::get('/profile', 'CreationController@index');
// Route::get('/creation/{id}', 'CreationController@show')->where('id', '[0-9]+');
// Route::post('/creation/create', 'CreationController@create');
// Route::get('/creation/delete/{id}','CreationController@delete')->where('id','[0-9]+')->middleware('auth');

// Activities
Route::get('/activities', 'ActivityController@index');
Route::get('/activity/{id}', 'ActivityController@show')->where('id', '[0-9]+');
Route::post('/activity/create', 'ActivityController@create');
Route::put('/activity/update/{id}','ActivityController@update')->where('id', '[0-9]+');
Route::get('/activity/delete/{id}','ActivityController@delete')->where('id', '[0-9]+');

// Steps
Route::get('/activity/{idActivity}/{position}', 'StepController@show')->where(['idActivity' => '[0-9]+', 'position' => '[0-9]+']);
//modifier, supprimer, ajouter

// Trophies
Route::get('/trophies', 'TrophyController@index');
Route::get('/trophy/{id}','TrophyController@show')->where('id', '[0-9]+');
Route::get('/winTrophy/{idKid}/{idTrophy}', 'TrophyController@unlock')->where(['idKid' => '[0-9]+', 'idTrophy' => '[0-9]+']);

// Categories
Route::get('/categories', 'CategoryController@index');
Route::get('/category/{slug}', 'CategoryController@show')->where('slug', '[a-z]+');

// Sub catégories

// });

// Parent profile
// afficher toutes les créations de tous les enfants + update profile