<?php

use Illuminate\Database\Seeder;
use App\Product;
use App\Review;

class ReviewTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Review::class, 50)->create();
        $review=Review::find(1);
        $product=Product::find(1);
        $product->review()->attach($review);
    }
}
