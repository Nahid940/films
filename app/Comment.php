<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;

class Comment extends Model
{
    protected $fillable=['user_id','film_id','name','comment'];
}
