<?php

use Illuminate\Database\Seeder;

class CreationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $creation = new \App\Creation();
        $creation->img = "toto.svg";
        $creation->kid_id = 1;
        $creation->activity_id = 1;
        $creation->save();
    }
}
