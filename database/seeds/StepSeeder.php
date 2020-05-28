<?php

use Illuminate\Database\Seeder;

class StepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $aCookieStep1 = new \App\Step();
        $aCookieStep1->position = 1;
        $aCookieStep1->name = "Matériaux";
        $aCookieStep1->img = "Loremipsum.svg";
        $aCookieStep1->title = "Lorem ipsum";
        $aCookieStep1->text = "Lorem ipsum";
        $aCookieStep1->activity_id = 1;
        $aCookieStep1->save();
    }
}
