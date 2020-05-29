<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(KidSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(SubCategorySeeder::class);
        $this->call(ActivitySeeder::class);
        $this->call(StepSeeder::class);
        $this->call(TrophySeeder::class);
        $this->call(AvatarSeeder::class);
        $this->call(CreationSeeder::class);
    }
}
