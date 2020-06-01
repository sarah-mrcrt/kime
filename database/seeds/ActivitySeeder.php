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
        /*
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
        */

        $activities = [
            [
                'name' => 'Langues de chat',
                'txt_choice' => 'Langues de chat', 
                'txt_win' => 'Tu as fait de belles langues de chat !', 
                'sub_category_id' => 1, 
                'trophy_id' => 1
            ],
            [
                'name' => 'Fard breton',
                'txt_choice' => 'Fard breton', 
                'txt_win' => 'Quel beau far, tu as fait !', 
                'sub_category_id' => 1, 
                'trophy_id' => 1
            ],
        ];

        for ($item=0; $item < count($activities); $item++){ 
            foreach ($activities as $activity) {
                $activity = new \App\Activity();
                $activity->name = $activities[$item]['name'];
                print_r($activity);
                if($item<9){
                    $activity->img = "/activities/activity-0".($item + 1).".svg";
                }else{
                    $activity->img = "/activities/activity-".($item + 1).".svg";
                }
                $activity->txt_choice = $activities[$item]['txt_choice'];
                $activity->txt_win = $activities[$item]['txt_win'];
                $activity->sub_category_id = $activities[$item]['sub_category_id'];
                $activity->trophy_id = $activities[$item]['trophy_id'];
                $activity->save();
                $item+=1;
            }
        }

    }
}
