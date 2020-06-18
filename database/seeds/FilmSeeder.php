<?php

use Illuminate\Database\Seeder;

class FilmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dummy=Faker\Factory::create();
        for($i=1;$i<=100;$i++)
        {
            \App\Film::create([
                'name'=>$name=$dummy->unique()->name,
                'description'=>$dummy->text(),
                'rating'=>rand(1,5),
                'slug'=>\Illuminate\Support\Str::slug($name),
                'price'=>rand(100,400),
                'release'=>$dummy->text(),
                'date'=>$dummy->date(),
                'genre_id'=>rand(1,10),
                'country'=>"Bangladesh",
                'photo'=>$dummy->imageUrl()
            ]);
        }
    }

}
