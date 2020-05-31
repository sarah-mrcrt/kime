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
        $trophies = ['Coloriage','Dessin','Musique','Cuisine','Jeux de lancer','Coloriage','Dessin','Musique','Cuisine','Jeux de lancer','Coloriage','Dessin','Musique','Cuisine','Jeux de lancer'];

        for ($item=0; $item < count($trophies); $item++){ 
            foreach ($trophies as $trophy) {
                $trophy = new \App\Trophy();
                $trophy->name = $trophies[$item];
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
