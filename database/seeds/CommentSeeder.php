<?php

use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $dummy=Faker\Factory::create();
        for($i=1;$i<=6;$i++)
        {
            \App\Comment::create([
                'film_id'=>$i,
                'user_id'=>1,
                'name'=>$name=$dummy->unique()->name,
                'comment'=>$dummy->text(),
            ]);
        }

    }

}
