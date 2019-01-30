<?php

namespace App\Http\Controllers;

//use Auth;
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
     * public function __construct()
   *{
    *    $this->middleware('auth');
    *}
     */
    

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index($id)
    {
        $product = Product::findorFail($id);
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
                "min_quantity"=>$product['min_quantity'],
                "price_per_min_quantity"=>$product['price_per_min_quantity'],
                "location"=>$product['location'],
                "seller"=>$product['seller'],
                "producdelivery_by_sellert_type"=>$product['delivery_by_seller'],
                "product_detail"=>$product['product_detail'],
                "img_path"=>$product['img_path'],
                "created_at"=>$product['created_at'],
                "updated_at"=>$product['updated_at'],
            );
            array_push($data,$item);
        }
        return $data;
    }
    public function createProduct(Request $request)
    {
        if($this->validator(array("product_detail"=>$request['product_detail'], "product_name"=>$request['product_name'], "min_quantity"=>$request['min_quantity'], "price_per_min_quantity"=>$request['price_per_min_quantity'], "location"=>$request['location'], "seller"=>$request['seller']))){
            return Product::create([
                'product_name'=>$request['product_name'],
                'product_type'=>$request['product_type'],
                "min_quantity"=>$request['min_quantity'],
                "price_per_min_quantity"=>$request['price_per_min_quantity'],
                "location"=>$request['location'],
                "seller"=>$request['seller'],
                "producdelivery_by_sellert_type"=>$request['delivery_by_seller'],
                'product_detail'=>$request['product_detail'],
                'img_path'=>$request['img_path'],
            ]);
        }
    }
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'product_name' => ['required', 'string', 'max:191'],
            'min_quantity' => ['required', 'bigInteger', 'max:191'],
            'price_per_min_quantity' => ['required', 'stringbigInteger', 'max:191'],
            'location' => ['required', 'string', 'max:191'],
            'seller' => ['required', 'string', 'max:191'],
            'product_type' => ['required', 'string', 'max:191'],
            'producdelivery_by_sellert_type' => ['required', 'boolean', 'max:191'],
            'product_detail' => ['required', 'string', 'min:6', 'confirmed'],
        ]);
    }
    public function editProductDetail(Request $request)
    {
        if(validator::make(array("product_detail"=>$request['product_detail']),[
            "product_detail" =>['required','string', 'max:191'],
            ])){
                $product = Product::find($request);
                $product->product_detail = $request['product_detail'];
                $product->save();
        }
    } 
    public function editLocation(Request $request)
    {
        if(validator::make(array("location"=>$request['location']),[
            "location" =>['required','string', 'max:191'],
            ])){
                $product = Product::find($request);
                $product->location = $request['location'];
                $product->save();
        }
    } 
    public function editSeller(Request $request)
    {
        if(validator::make(array("seller"=>$request['seller']),[
            "seller" =>['required','string', 'max:191'],
            ])){
                $product = Product::find($request);
                $product->seller = $request['seller'];
                $product->save();
        }
    } 
    public function editProductMinQuantity(Request $request)
    {
        if(validator::make(array("min_quantity"=>$request['min_quantity']),[
            "min_quantity" =>['required','bigInteger', 'max:191'],
            ])){
                $product = Product::find($request);
                $product->min_quantity = $request['min_quantity'];
                $product->save();
        }
    } 
    public function editProductPricePerMinQuantity(Request $request)
    {
        if(validator::make(array("price_per_min_quantity"=>$request['price_per_min_quantity']),[
            "price_per_min_quantity" =>['required','bigInteger', 'max:191'],
            ])){
                $product = Product::find($request);
                $product->price_per_min_quantity = $request['price_per_min_quantity'];
                $product->save();
        }
    } 
    public function editImgPath(Request $request)
    {
        if(validator::make(array("img_path"=>$request['img_path']),[
            "img_path" =>['required','string', 'max:191'],
            ])){
                $product = Product::find($request);
                $product->img_path = $request['img_path'];
                $product->save();
        }
    } 

    public function product()
    {
        return $this->showProduct();
     //   return view('product')->with(array("products"=>$this->showproduct()));
    }
    public function deleteProduct(Request $request)
    {
        $product = Product::find($request['id']);
        $product->delete();
    }
    public function userProduct()
    {
        return Auth::user()->uproduct;                                 
    }
}
