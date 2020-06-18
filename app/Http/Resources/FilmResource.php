<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FilmResource extends JsonResource
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
            'name'=> $this->name,
            'description'=>$this->description,
            'release'=>$this->release,
            'date'=>$this->date,
            'photo'=>$this->photo,
            'price' => $this->price,
            'rating' => $this->rating,
            'country' => $this->country,
            'slug' => $this->slug,
            'comments' => $this->comments,
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at,
        ];
    }

}
