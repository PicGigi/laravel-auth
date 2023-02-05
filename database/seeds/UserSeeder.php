<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Luigi Piccioni',
                'email' => 'junior.1997@live.it',
                'password' => Hash::make('asdfasdf'),
            ],
            [
                'name' => 'Ida Franceschini',
                'email' => 'ida.franceschini@live.it',
                'password' => Hash::make('qwerqwer'),
            ],
            [
                'name' => 'Simona Piccioni',
                'email' => 'simona.piccioni@live.it',
                'password' => Hash::make('zxcvzxcv'),
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
