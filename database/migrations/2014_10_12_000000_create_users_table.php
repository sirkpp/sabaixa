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
            $table->string('gender')->nullable();
            $table->string('profile_pic')->nullable();
            $table->string('user_type');
            $table->string('main_product')->nullable();
            $table->bigInteger('experience')->nullable();
            $table->string('location')->nullable();
            $table->bigInteger('contact_no')->unique();
            $table->bigInteger('total_revenue')->nullable();
            $table->string('top_market')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->timestamp('last_active_at');
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
