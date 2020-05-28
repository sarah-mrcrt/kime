<?php

use Illuminate\Database\Seeder;

class TrophySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $trophy = new \App\Trophy();
        $trophy->name = "Coloriage";
        $trophy->img = $trophy->name.".svg";
        $trophy->save();

        $trophy1 = new \App\Trophy();
        $trophy1->name = "Dessin";
        $trophy1->img = $trophy->name.".svg";
        $trophy1->save();
    }
}
