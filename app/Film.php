<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    //

    protected $fillable=['name,description,date,rating,price'];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

}
