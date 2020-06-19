<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Film;
use App\Http\Requests\CommentRequest;
use App\Repo\CommentRepo;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;

class CommentController extends Controller
{

    protected $repo;

    public function __construct(CommentRepo $repo)
    {
        $this->repo=$repo;
    }


    public function index()
    {
        //
    }

    /**
     * Validate request with CommentRequest
     *
    **/

    public function store(CommentRequest $request)
    {
        $validated=$request->validated();
        $id=$this->repo->getFilmIDbySlug($request->slug);
        if($id)
        {
            Comment::create([
                'user_id'=>1,
                'film_id'=>$id,
                'name'=>$request->name,
                'comment'=>$request->comment
            ]);
            return [
                'status'=>200,
                'message'=>'Success'
            ];
        }
    }


    public function show(Comment $comment)
    {
        //
    }


    public function edit(Comment $comment)
    {
        //
    }


    public function update(Request $request, Comment $comment)
    {
        //
    }

    public function destroy(Comment $comment)
    {
        //
    }
}
