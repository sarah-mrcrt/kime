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
           /* 1 */ ['name' => 'Gâteaux','category_slug' => 'cuisine', 'category_id' => 2, 'color' => 'blue'], 
           /* 2 */ ['name' => 'Jeux d\'équilibre','category_slug' => 'jeux-dinterieurs', 'category_id' => 4, 'color' => 'red'],
           /* 3 */ ['name' => 'Dessin','category_slug' => 'creativite', 'category_id' => 2, 'color' => 'blue'],
           /* 4 */ ['name' => 'Pains','category_slug' => 'cuisine', 'category_id' => 2, 'color' => 'blue'],
           /* 5 */ ['name' => 'Glaces','category_slug' => 'cuisine', 'category_id' => 2, 'color' => 'yellow'],
           /* 6 */ ['name' => 'Décorations','category_slug' => 'cuisine', 'category_id' => 2, 'color' => 'blue'],
           /* 7 */ ['name' => 'Nature & Découverte','category_slug' => 'jeux-dexterieurs', 'category_id' => 3, 'color' => 'red'],
           /* 8 */ ['name' => 'Jeux d\'eau','category_slug' => 'jeux-dexterieurs', 'category_id' => 3, 'color' => 'red'],
           /* 9 */ ['name' => 'Faire pousser','category_slug' => 'jeux-dexterieurs', 'category_id' => 3, 'color' => 'red'],
           /* 10 */ ['name' => 'Jeux de cartes','category_slug' => 'jeux-dinterieurs', 'category_id' => 4, 'color' => 'red'],
           /* 11 */ ['name' => 'Jeux de tirs','category_slug' => 'jeux-dinterieurs', 'category_id' => 4, 'color' => 'red'],
           /* 12 */ ['name' => 'Coloriage','category_slug' => 'creativite', 'category_id' => 2, 'color' => 'red']
        ];

        for ($item=0; $item < count($subCategories); $item++){ 
            foreach ($subCategories as $subCategory) {
                $subCategory = new \App\SubCategory();
                $subCategory->name = $subCategories[$item]['name'];
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
