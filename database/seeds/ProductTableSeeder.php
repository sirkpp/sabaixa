<?php

use Illuminate\Database\Seeder;
use App\Product;
use App\User;
class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Product::class, 50)->create();
        $product=Product::find(1);
        $user=User::find(1);
        $user->product()->attach($product);
    }
}   