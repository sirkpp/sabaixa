<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class group_user extends Model
{
    protected $fillable = [
        'group_id' , 'user_id' ,
    ];

}
