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

        $avatars = ['Bob','Teddy','Ricky','Gloupy','Digo'];

        for ($item=0; $item < count($avatars); $item++){ 
            foreach ($avatars as $avatar) {
                $avatar = new \App\Avatar();
                $avatar->name = $avatars[$item];
                if($item<9){
                    $avatar->img = "avatar-0".($item + 1).".svg";
                }else{
                    $avatar->img = "avatar-".($item + 1).".svg";
                }
                $avatar->color = "blue";
                $avatar->save();
                $item+=1;
            }
        }
    }
}