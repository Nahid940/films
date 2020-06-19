<?php

namespace App\Http\Controllers;

use App\Classes\FileProcessor;
use App\Film;
use App\Http\Requests\FilmRequest;
use App\Http\Resources\FilmResource;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class FilmController extends Controller
{

    /** index method to return collection of movies with film resource**/

    public function index()
    {
        return FilmResource::collection(Film::with('comments')->paginate(3));
    }

    /**
     * storing data in database
     * Filmrequest is used to process request with validation
     * Fileprocessor in injected to process file (upload)
     **/
    public function store(FilmRequest $request,FileProcessor $fileProcessor)
    {
        $request->validated();
        /**storing data in the database**/
        Film::create([
            'name'=>$request->name,
            'description'=>$request->description,
            'release'=>$request->release,
            'date'=>$request->date,
            'rating'=>$request->rating,
            'ticket'=>$request->ticket,
            'price'=>$request->price,
            'country'=>$request->country,
            'genre_id'=>$request->genre_id,
            'slug'=>Str::slug($request->name),
            'photo'=>$fileProcessor->uploadFile($request->file('photo'),'photo') //process file in the uploadFile function and it returns the uploaded file name
        ]);
    }


    /**
     * Return film item without wrapping (excluding data object in the API)
     *
    **/
    public function show(Film $film)
    {
        FilmResource::withoutWrapping();
        return new FilmResource($film);
    }

    public function update(Request $request, Film $film)
    {
        //
    }

    public function destroy(Film $film)
    {
        //
    }
}
