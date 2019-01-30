<?php

use Illuminate\Database\Seeder;
use App\User;
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
        $kpp['first_name']="Krishnaaa";
        $kpp['last_name']="Panthiii";
        $kpp['email']="kpp@kpp.com";
        $kpp['gender']="Male";
        $kpp['user_type']="God";
        $kpp['profile_pic']="Male";
        $kpp['contact_no']=981;
        $kpp['password']="abcdefghh";
        $kpp->Save();
    }
}
