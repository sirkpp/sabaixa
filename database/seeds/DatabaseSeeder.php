<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
<<<<<<< HEAD
=======
        //$this->call(ProductTableSeeder::class);
>>>>>>> 15296388455c74c05136895035231c6291a5e7d6
        $this->call(UserTableSeeder::class);
        $this->call(ProductTableSeeder::class);
        $this->call(ReviewTableSeeder::class);

    }
}
