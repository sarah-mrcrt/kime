<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\User();
        $user->name = "Kime";
        $user->role = "admin";
        $user->email = "kimeapplens@gmail.com";
        $user->password = bcrypt("12345678");
        $user->admin_password = bcrypt("12345678");
        $user->save();
    }
}
