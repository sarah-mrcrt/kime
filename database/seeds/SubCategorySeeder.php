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
        $subCategories = [
            ['name' => 'Gâteaux','category_slug' => 'cuisine', 'category_id' => 2, 'color' => 'red'],
            ['name' => 'Coloriage','category_slug' => 'creativite', 'category_id' => 2, 'color' => 'red'],
            ['name' => 'Dessin','category_slug' => 'creativite', 'category_id' => 2, 'color' => 'blue'],
            ['name' => 'Musique','category_slug' => 'creativite', 'category_id' => 2, 'color' => 'red'],
            ['name' => 'Jeux d\'équilibre','category_slug' => 'jeux-dinterieurs', 'category_id' => 4, 'color' => 'red']
        ];

        for ($item=0; $item < count($subCategories); $item++){ 
            foreach ($subCategories as $subCategory) {
                $subCategory = new \App\SubCategory();
                $subCategory->name = $subCategories[$item]['name'];
                print_r($subCategory);
                if($item<9){
                    $subCategory->img = "sub_category-0".($item + 1).".svg";
                }else{
                    $subCategory->img = "sub_category-".($item + 1).".svg";
                }
                $subCategory->color = $subCategories[$item]['color'];
                $subCategory->slug = Str::slug($subCategory->name, "-");
                $subCategory->category_id = $subCategories[$item]['category_id'];
                $subCategory->category_slug = $subCategories[$item]['category_slug'];
                $subCategory->save();
                $item+=1;
            }
        }
    }
}
