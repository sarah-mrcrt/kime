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
        $trophies = [
            ['name' => 'Gâteaux', 'color' => 'blue'],
            ['name' => 'Jeux d\'équilibre', 'color' => 'red'],
            ['name' => 'Dessin', 'color' => 'red'],
            ['name' => 'Pains', 'color' => 'red'],
            ['name' => 'Glaces', 'color' => 'blue'],
            ['name' => 'Décos', 'color' => 'yellow'],
            ['name' => 'Nature & Découverte', 'color' => 'yellow'],
            ['name' => 'Jeux d\'eau', 'color' => 'red'],
            ['name' => 'Faire pousser', 'color' => 'blue'],
            ['name' => 'Jeux de cartes', 'color' => 'yellow'],
            ['name' => 'Jeux de tirs', 'color' => 'yellow'],
            ['name' => 'Coloriage', 'color' => 'blue']
        ];

        for ($item=0; $item < count($trophies); $item++){ 
            foreach ($trophies as $trophy) {
                $trophy = new \App\Trophy();
                $trophy->name = $trophies[$item]['name'];
                $trophy->color = $trophies[$item]['color'];
                if($item<9){
                    $trophy->img = "trophy-0".($item + 1).".svg";
                }else{
                    $trophy->img = "trophy-".($item + 1).".svg";
                }
                $trophy->save();
                $item+=1;
            }
        }
    }
}
