<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class product_user extends Model
{
    protected $fillable = [
        'product_id' , 'user_id' ,
    ];

}
