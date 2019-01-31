<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
<<<<<<< HEAD
            $table->string('gender')->default('NULL');
            $table->string('profile_pic')->nullable();
            $table->string('user_type');
            $table->bigInteger('contact_no')->unique();
=======
            $table->string('profile_pic')->nullable();
            $table->string('user_type');
            $table->string('contact_no')->unique();
>>>>>>> 09985de278b4a1c6822e9dcd2b93393902d9da38
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
