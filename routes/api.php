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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::resource('/v1/films','FilmController');

Route::resource('/v1/films/comment','CommentController');

Route::post('/v1/films/register','RegistrationController@register');
Route::post('/v1/films/login','LoginController@login');
Route::post('/v1/films/logout','LoginController@logout');
