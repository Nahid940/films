<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'user_id'=> $this->user_id,
            'comment'=>$this->comment,
            'name'=>$this->name,
            'created_at' => (string) date('d-m-Y h:i:a',strtotime($this->created_at)),
        ];
    }
}
