<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinkKidsCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('link_kids_categories', function (Blueprint $table) {
            $table->id();

            $table->integer('kid_id');
            // $table->foreign('kid_id')->references('id')->on('kids');

            $table->integer('category_id');
            //->unsigned();
            // $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('link_kids_categories');
        Schema::disableForeignKeyConstraints();
    }
}
