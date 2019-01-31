<?php

use Illuminate\Http\Request;

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

<<<<<<< HEAD
//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
//Route::get('/', function () {
//    return view('welcome');
//});
Route::group(['middleware' => ['web']], function () {
    // your routes here

=======
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
>>>>>>> 09985de278b4a1c6822e9dcd2b93393902d9da38
Auth::routes();
Route::group(['middleware' => ['web']], function () {
    Route::post('/login','Auth\LoginController@login');
});


Route::get('/home', 'HomeController@index')->name('home');

Route::get('/user/{id}', 'ProfileController@index');
Route::post('/user/editName', 'ProfileController@editName')->name('user.editName');
Route::post('/user/editProfilePic', 'ProfileController@editProfilePic')->name('user.editProfilePic');
Route::post('/user/editContact', 'ProfileController@editContact')->name('user.editContact');


Route::get('/post/{id}', 'PostController@index');
Route::get('/post', 'PostController@post');
Route::post('/post/createPost', 'PostController@createPost')->name('post.createPost');
Route::post('/post/deletePost', 'PostController@deletePost')->name('post.deletePost');

Route::get('/product/{id}', 'ProductController@index');
Route::get('/product', 'ProductController@product');
Route::post('/product/createProduct', 'ProductController@createProduct')->name('product.createProduct');
Route::post('/product/editProductDetail', 'ProductController@editProductDetail')->name('product.editProductdetail');
Route::post('/product/editImgPath', 'ProductController@editImgPath')->name('product.editImgPath');
Route::post('/product/deleteProduct', 'ProductController@deleteProduct')->name('product.deleteProduct');
Route::post('/product/editLocation', 'ProductController@editLocation')->name('product.editLocation');
Route::post('/product/editSeller', 'ProductController@editSeller')->name('product.editSeller');
Route::post('/product/editProductMinQuantity', 'ProductController@editProductMinQuantity')->name('product.editProductMinQuantity');
Route::post('/product/editProductPricePerMinQuantity', 'ProductController@editProductPricePerMinQuantity')->name('product.editProductPricePerMinQuantity');


Route::get('/review/{id}', 'ReviewController@index');
Route::get('/review/showReview', 'ReviewController@showReview');
Route::post('/review/createReview', 'ReviewController@createReview')->name('review.createreview');
Route::post('/review/deleteReview', 'ReviewController@deleteReview')->name('user.deletereview');
});