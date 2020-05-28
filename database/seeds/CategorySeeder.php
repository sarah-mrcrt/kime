<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $category = new \App\Category();
       $category->name = "Cuisine";
       $category->img = "cuisine.svg";
       $category->slug = "cuisine";
       $category->save();

       $category1 = new \App\Category();
       $category1->name = "Jardin";
       $category1->img = "jardin.svg";
       $category1->slug = "jardin";
       $category1->save();
       
       $category2 = new \App\Category();
       $category2->name = "Creativité";
       $category2->img = "creativité.svg";
       $category2->slug = "creativité";
       $category2->save();

       $category3 = new \App\Category();
       $category3->name = "Jeux";
       $category3->img = "jeux.svg";
       $category3->slug = "jeux";
       $category3->save();
    }
}
