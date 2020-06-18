<?php

use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dummy=Faker\Factory::create();
        for($i=1;$i<=10;$i++)
        {
            \App\Genre::create([
                'genre_name'=>$dummy->unique()->name,
            ]);
        }
    }
}
