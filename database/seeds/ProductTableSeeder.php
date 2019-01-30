<?php

use Illuminate\Database\Seeder;
use App\Product;
class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kpp=new Product();
        $kpp['id']=1;
        $kpp['product_name']="Krishnaaa";
        $kpp['product_type']="Panthiii";
        $kpp['product_detail']="kpp@kpp.com";
        $kpp['img_path']="banner01.jpg";
        $kpp->Save();
    }
}
