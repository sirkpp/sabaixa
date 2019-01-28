<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'product_rating', 'service_rating', 'product_review','product_name',
    ];
    public function product(){
        return $this->belongsToMany('App\Product');
    }
}
