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

Route::post('/api/auth/login', 'API\UserController@login');
Route::post('/api/auth/register', 'API\UserController@register');
Route::post('/api/auth/logout', 'API\UserController@logout');
Route::post('/api/auth/user', 'API\UserController@details');