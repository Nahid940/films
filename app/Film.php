<?php

namespace App;

use App\Http\Resources\CommentResource;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    protected $fillable=['name',
        'description','date',
        'rating','price',
        'photo','country',
        'genre_id','slug','release'];

    public function comments()
    {
        return $this->hasMany(Comment::class)
            ->orderby('id','asc');
    }

    public function genres()
    {
        return $this->hasMany(Genre::class);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

}
