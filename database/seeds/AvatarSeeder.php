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

        $avatars = ['Bob','Teddy','Ricky','Gloupy','Digo','Léo',"Abi","Théa","Paul","Ramy","Léa","Thibo","Julie","Max","Jamy"];

        for ($item=0; $item < count($avatars); $item++){ 
            foreach ($avatars as $avatar) {
                $minScore = 0;
                if ($item % 5 == 2) {
                    $minScore = 5;
                } else if ($item % 5 == 3) {
                    $minScore = 10;
                } else if ($item % 5 == 4) {
                    $minScore = 15;
                }
                $avatar = new \App\Avatar();
                $avatar->name = $avatars[$item];
                if($item<9){
                    $avatar->img = "/avatars/avatar-0".($item + 1).".svg";
                } else{
                    $avatar->img = "/avatars/avatar-".($item + 1).".svg";
                }
                $avatar->color = "blue";
                $avatar->minScore = $minScore;
                $avatar->save();
                $item+=1;
            }
        }
    }
}