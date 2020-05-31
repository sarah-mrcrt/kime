<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = ['Cuisine', 'Créativité', "Jeux d'extérieurs", "Jeux d'intérieurs"];

        for ($item=0; $item < count($categories); $item++){ 
            foreach ($categories as $category) {
                $category = new \App\Category();
                $category->name = $categories[$item];
                if($item<9){
                    $category->img = "category-0".($item + 1).".svg";
                }else{
                    $category->img = "category-".($item + 1).".svg";
                }
                $category->slug = Str::slug($category->name, "-");
                $category->save();
                $item+=1;
            }
        }
    }
}
