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
        $user->name = "Sarah";
        $user->email = "sarah.nawal@live.fr";
        $user->password = bcrypt("12345678");
        $user->admin_password = bcrypt("12345678");
        $user->save();
    }
}
