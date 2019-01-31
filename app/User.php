<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'gender', 'profile_pic', 'password', 'user_type' , 'contact_no',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function product(){
        return $this->belongsToMany('App\Product');
    }
    public function upost()
    {
        return $this->belongsToMany('App\Product');
    }
    public function ureview(){
        return $this->hasMany('App\Review');
    }
}
