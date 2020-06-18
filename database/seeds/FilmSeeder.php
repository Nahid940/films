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
        for($i=0;$i<100;$i++)
        {
            \App\Film::create([
                'name'=>$name=$dummy->unique()->name,
                'description'=>$dummy->text(),
                'rating'=>rand(1,5),
                'slug'=>\Illuminate\Support\Str::slug($name),
                'price'=>rand(100,400),
                'release'=>$dummy->text(),
                'date'=>$dummy->date(),
                'genre'=>"Drama",
                'country'=>"Bangladesh",
                'photo'=>$dummy->imageUrl()
            ]);
        }
    }

}
