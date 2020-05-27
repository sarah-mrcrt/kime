<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Steps;
use Faker\Generator as Faker;

$factory->define(Steps::class, function (Faker $faker) {
    return [
        'name'         => $faker->name,
        'description'   => $fake->paragraph(1),
        'content'       => implode($faker->paragraphs(10)),
        'activities_id'       => factory(Steps::class)->create()->id,
    ];
});
