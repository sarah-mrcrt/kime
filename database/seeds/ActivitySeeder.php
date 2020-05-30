<?php

use Illuminate\Database\Seeder;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $aCookie = new \App\Activity();
        $aCookie->name = "Cookie";
        $aCookie->img = $aCookie->name.".svg";
        $aCookie->txt_choice = "cuisine";
        $aCookie->txt_win = "cuisine";
        $aCookie->sub_category_id = 1;
        $aCookie->save();

        $aMuffin = new \App\Activity();
        $aMuffin->name = "Muffin";
        $aMuffin->img = $aMuffin->name.".svg";
        $aMuffin->txt_choice = "Muffin";
        $aMuffin->txt_win = "Muffin";
        $aMuffin->sub_category_id = 1;
        $aMuffin->save();

    }
}
