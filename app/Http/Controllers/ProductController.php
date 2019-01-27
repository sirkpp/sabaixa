<?php

namespace App\Http\Controllers;

use Auth;
use App\Product;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
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
        $product = Product::findorfail($id);
        return $product;
        //return view('product');
    }

    public function showProduct()
    {
        $products = Product::all();
        $data = array();
        foreach($products as $product)
        {
            $item = array(
                "id"=>$product['id'],
                "product_name"=>$product['product_name'],
                "product_type"=>$product['product_type'],
                "product_detail"=>$product['product_detail'],
                "img_path"=>$product['img_path'],
                "created_at"=>$product['created_at'],
                "updated_at"=>$product['updated_at'],
            );
            array_push($data,$item);
        }
        return $data;
    }
    public function createproduct(Request $request)
    {
        if($this->validator(array("product_detail"=>$request['product_detail'], "product_name"=>$request['product_name']))){
            return product::create([
                'product_name'=>$request['product_name'],
                'product_type'=>$product['product_type'],
                'product_detail'=>$product['product_detail'],
                'img_path'=>$product['img_path'],
            ]);
        }
    }
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'product_name' => ['required', 'string', 'max:191'],
            'product_detail' => ['required', 'string', 'min:6', 'confirmed'],
        ]);
    }
    public function product()
    {
        return $this->showproduct();
     //   return view('product')->with(array("products"=>$this->showproduct()));
    }

    public function userProduct()
    {
        return Auth::user()->uproduct;                                 
    }
}
