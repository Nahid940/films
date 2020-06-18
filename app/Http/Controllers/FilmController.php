<?php

namespace App\Http\Controllers;

use App\Film;
use App\Http\Resources\FilmResource;
use Illuminate\Http\Request;

class FilmController extends Controller
{

    public function index()
    {
        return FilmResource::collection(Film::with('comments')->paginate(3));
    }

    public function store(Request $request)
    {
        //
    }

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
