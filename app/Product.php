<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable =[
        'product_name' , 'product_detail' , 'product_type' , 'img_path',
    ];
}
