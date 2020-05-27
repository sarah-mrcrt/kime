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

// User
Route::post('/api/auth/login', 'API\UserController@login');
Route::post('/api/auth/register', 'API\UserController@register');
Route::post('/api/auth/logout', 'API\UserController@logout');
Route::post('/api/auth/user', 'API\UserController@details');

// Kids
Route::get('/kids','KidController@index');
Route::get('/kid/{id}','KidController@show')->where('id', '[0-9]+');
Route::post('/kid/create','KidController@create')->where('id', '[0-9]+');
Route::put('/kid/update/{id}','KidController@update')->where('id', '[0-9]+');
Route::get('/kid/delete/{id}','KidController@delete')->where('id', '[0-9]+');

// Activities
Route::get('/activities', 'ActivitiesController@index');
Route::get('/activity/{id}', 'ActivitiesController@show')->where('id', '[0-9]+');
Route::post('/activity/create', 'ActivitiesController@create');
Route::put('/activity/update/{id}','ActivitiesController@update')->where('id', '[0-9]+');
Route::get('/activity/delete/{id}','ActivitiesController@delete')->where('id', '[0-9]+');

// Steps


// Trophies