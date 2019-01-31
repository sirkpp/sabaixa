<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Product;

class CompanyController extends Controller
{
    public function giveProduct($userID,$count=3){
        $user=User::find($userID);
        $products = $user->product();
        $data = array();
        if($products != NULL)
        {
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
    }
        $len = count($data);
        if($len<$count)
        {
            return $data;
        }
        else{
            return array_chunk($data,$count);
        }

    }
    public function showCompany($user_id){
        $users=User::findorFail($user_id);
        $data = array();
        if($users !=NULL){
            $data['id']=$users['id'];
            $data['name']=$users['name'];
            $data['main_product']=$users['main_product'];
            $data['experience']=$users['experience'];
            $data['location']=$users['location'];          
            $data['total_revenue']=$users['total_revenue'];
            $data['top_market']=$users['top_market'];
            $data['product']=$this->giveProduct($users['id'],3);
            return $data;

        }
    }
    public function showCompanies($count){
        $users=User::all();
        
        $data = array();
        foreach($users as $user){
            $item = array(
                    'id'=>$user['id'],
                    'name'=>$user['name'],
                    'main_product'=>$user['main_product'],
                    'experience'=>$user['experience'],
                    'location'=>$user['location'],         
                    'total_revenue'=>$user['total_revenue'],
                    'top_market'=>$user['top_market'],
                    'product'=>$this->giveProduct($user['id'],$count),
            );
            array_push($data,$item);
            $len = count($data);

        if($len<$count){
            
            }
            return $data;
        }
    }
}
