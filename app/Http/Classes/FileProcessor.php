<?php
/**
 * Created by PhpStorm.
 * User: nahid
 * Date: 6/19/20
 * Time: 6:59 PM
 */

namespace App\Classes;


class FileProcessor
{

    //upload file to the destination (in this case it is public folder inside storage)
    public function uploadFile($file,$input_field)
    {
        return request()->file($input_field)
            ->storeAs('movie_files',$this->generateFileName($file));
    }


    //function to generate custom file name that will be called in the uploadFile() function
    public function generateFileName($file)
    {
        return 'film_poster'.time().".".$file->getClientOriginalExtension();
    }
}