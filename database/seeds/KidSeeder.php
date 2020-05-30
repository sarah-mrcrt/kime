<?php

use Illuminate\Database\Seeder;

class KidSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kid = new \App\Kid();
        $kid->name = "Stéphane";
        $kid->date_of_birth = "2000-05-28";
        $kid->categories = "1";
        $kid->user_id = 1;
        $kid->save();
    }
}
