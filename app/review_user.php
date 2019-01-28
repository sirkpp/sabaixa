<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class review_user extends Model
{
    protected $fillable = [
        'user_id', 'review_id',
    ];
}
