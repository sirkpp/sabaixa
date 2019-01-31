<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'gender' => 'male',
        'profile_pic' => 'null',
        'user_type' => 'General',
        'contact_no' => $faker->unique()->e164PhoneNumber,
        'email_verified_at' => now(),
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
    ];
});
$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'product_name' => $faker->name,
        'min_quantity' => 100,
        'price_per_min_quantity' =>  100,
        'location' => 'Kathmandu',
        'seller' => $faker->name,
        'delivery_by_seller' => $faker->boolean,
        'img_path' =>'banner01.jpg',
        'product_detail'=>'This is BNK app',
        'product_type' => 'General',
    ];
});
$factory->define(App\Review::class, function (Faker $faker) {
    return [
        'product_rating'=>floor(rand(0,5)),
        'service_rating'=>floor(rand(0,5)),
        'product_review'=>'This is great',
        'product_name' => $faker->name,
    ];
});
