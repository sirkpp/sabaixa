<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Product;


class CompanyController extends Controller
{ 
    
    public function giveProduct($user_id, $count){
        $products = (User::find($user_id)->product);
        $datas = json_decode($products);
        $len = count($datas);
        $myarr = array();
        foreach($datas as $data){
           $item = $data->id;
           array_push($myarr,$item);
        }
        return $myarr;
        if($len<$count)
        {
            return $myarr;
        }
        else{
            return array_slice($myarr,$len - $count);
        } 
    }
    public function showCompany($user_id){
        $users=User::findorFail($user_id);
        return $users;
        $data = array();

        if($users !=NULL){
            $data['id']=$users['id'];
            $data['name']=$users['name'];
            $data['main_product']=$users['main_product'];
            $data['experience']=$users['experience'];
            $data['location']=$users['location'];          
            $data['total_revenue']=$users['total_revenue'];
            $data['top_market']=$users['top_market'];
            $data['product']=$this->giveProduct($user_id,3);
            return $data;

        }
    }
    public function showCompanies($count){
        $users=json_decode(User::all());
        $len = count($users);
        $data = array();
        foreach($users as $user){
            $user_id=$user->id;
            $item = array(
                    'id'=>$user->id,
                    'name'=>$user->name,
                    'main_product'=>$user->main_product,
                    'experience'=>$user->experience,
                    'location'=>$user->location,         
                    'total_revenue'=>$user->total_revenue,
                    'top_market'=>$user->top_market,
                    'product'=>$this->giveProduct($user_id,3),
            );
            array_push($data,$item);

        }
        if($len<$count){
           
            return $data;
        }else
        {
            return array_slice($data,$len-$count);
        }

    }
}
