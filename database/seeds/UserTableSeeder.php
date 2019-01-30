<?php

use Illuminate\Database\Seeder;
use App\User;
use Hash;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kpp=new User();
        $kpp['id']=1;
        $kpp['name']="Krishnaaa";
        $kpp['email']="kpp@kpp.com";
        $kpp['gender']="Male";
        $kpp['user_type']="God";
        $kpp['profile_pic']="banner01.jpg";
        $kpp['contact_no']=981;
        $kpp['password']=Hash::make('abcdefghh');
        $kpp->Save();
    }
}
