<?php

use Illuminate\Database\Seeder;

class AvatarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $avatar = new \App\Avatar();
        $avatar->name = "Slouch";
        $avatar->img = "avatar01.svg";
        $avatar->color = "blue";
        $avatar->save();
    }
}
