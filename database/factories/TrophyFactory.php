<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'img' => $faker->sentence(1),
    ];
    // Terminal :
    // php artisan tinker
    // factory(\App\Trophy::class,10)->create();
});
