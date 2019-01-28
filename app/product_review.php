<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class product_review extends Model
{
    protected $fillable = [
        'product_id', 'review_id',
    ];
}
