<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('films', function (Blueprint $table) {
            $table->id();
            $table->char('name',180);
            $table->text('description')->nullable();
            $table->string('release')->nullable();
            $table->date('date');
            $table->float('rating');
            $table->string('ticket')->nullable();
            $table->float('price');
            $table->char('country',30);
            $table->integer('genre_id')->references('id')->on('genres');
            $table->char('slug',150);
            $table->string('photo')->nullable();
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
        Schema::dropIfExists('films');
    }
}
