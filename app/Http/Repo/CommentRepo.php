<?php
/**
 * Created by PhpStorm.
 * User: nahid
 * Date: 6/19/20
 * Time: 12:13 PM
 */

namespace App\Repo;


use App\Film;

class CommentRepo
{

    public function getFilmIDbySlug($slug)
    {
        $data=Film::where('slug',$slug)->select('id')->firstorfail();
        if($data)
        {
            return $data->id;
        }
        return false;
    }
}