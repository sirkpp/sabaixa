<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReviewController extends Controller
{
      /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index($id)
    {
        $review = Review::findorFail($id);
        return $review;
    }

    public function showReview(){
        $reviews = Review::all();
        $data - array();
        foreach($reviews as $review)
        {
            $item = array(
                "id"=>$review['id'],
                "product_rating"=>$review['product_rating'],
                "service_rating"=>$review['service_rating'],
                "product_review"=>$review['product_review'],
                "product_name"=>$review['product_name'],
            );
            array_push($data,$item);
        }
        return $data;
    }

    public function createReview(Request $request)
    {
        if($request['product_rating']!=null || $request['service_rating']!=null || $request['product_review']!=null ){
            return Review::create([
                'product_rating'=>$request['product_rating'],
                'product_rating'=>$request['product_rating'],
                'product_review'=>$request['product_rating'],
                'product_name'=>$request['product_name'],
            ]);
        }
    }
    public function editReview(Request $request){
        $review = Review::find($request);
        $review->product_rating = $request['product_rating'];
        $review->service_rating = $request['service_rating'];
        $review->product_review = $request['product_review'];
        $review->produt_name = $request['product_name'];
        $review->save();
    }

    public function deleteReview(Request $request)
    {
        $review = Review::find($request['id']);
        $review->delete();
    }
    public function userReview()
    {
        return Auth::user()->ureview;                                 
    }

}
