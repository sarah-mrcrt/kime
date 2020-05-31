<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subCategories = ['Coloriage','Dessin','Musique','Cuisine','Jeux de lancer'];

        for ($item=0; $item < count($subCategories); $item++){ 
            foreach ($subCategories as $subCategory) {
                $subCategory = new \App\SubCategory();
                $subCategory->name = $subCategories[$item];
                if($item<9){
                    $subCategory->img = "sub_category-0".($item + 1).".svg";
                }else{
                    $subCategory->img = "sub_category-".($item + 1).".svg";
                }
                $subCategory->slug = Str::slug($subCategory->name, "-");
                $subCategory->category_id = 1;
                $subCategory->category_slug = 'cuisine';
                $subCategory->save();
                $item+=1;
            }
        }
    }
}
