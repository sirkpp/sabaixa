<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


//Route::get('/user', 'ProfileController@')
Route::get('/user/{id}', 'ProfileController@index');
Route::post('/user/editName', 'ProfileController@editName')->name('user.editName');
Route::post('/user/editProfilePic', 'ProfileController@editProfilePic')->name('user.editProfilePic');
Route::post('/user/editContact', 'ProfileController@editContact')->name('user.editContact');


Route::get('/post/{id}', 'PostController@index');
Route::get('/post', 'PostController@post');
Route::post('/post/createPost', 'PostController@createPost');