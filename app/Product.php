<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable =[
        'product_name' ,'min_quantity', 'price_per_min_quantity','location','seller','delivery_by_seller', 'product_detail' , 'product_type' , 'img_path',
    ];

    public function preview(){
        return $this->belongsToMany('App\Review');
    }
}
