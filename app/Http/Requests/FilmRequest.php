<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FilmRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required',
            'description'=>'required',
            'date'=>'required',
            'price'=>'required',
            'country'=>'required',
            'rating'=>'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required'=>'Provide film name',
            'description.required'=>'Provide film description',
            'date.required'=>'date is required',
            'price.required'=>'Price is required',
            'country.required'=>'Country is required',
            'rating.required'=>'Rating is required',
        ];
    }
}
