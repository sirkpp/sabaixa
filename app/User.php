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
        'name', 'email', 'gender', 'profile_pic', 'user_type' ,'main_product', 'experience', 'contact_no',  'total_revenue','top_market', 'password', 'last_active_at',
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
        return $this->belongsToMany('App\Review');
    }
}
