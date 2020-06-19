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

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
