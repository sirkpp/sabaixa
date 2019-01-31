<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Review;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 50)->create();
        $review= Review::find(1);
        $user= User::find(1);
        $user->ureview()->attach($review);
    }
}
