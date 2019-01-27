<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'post_title' , 'post_detail' , 'post_type' , 'img_path',
    ];
}
