<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{


    /**
        user login
     * validate
     * generate token
     * return response
     **/
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user=Auth::user();
            $success['user'] = Auth::user();
            $success['token'] = $user->createToken('FilmApp')->accessToken;
            return response()->json(['success' => $success], 200);
        }else{
            return response()->json(['error'=>'Invalid Credentials !!'], 401);
        }
    }

    public function logout(Request $request)
    {
        /** revoke access token on log out by user id**/
        DB::table('oauth_access_tokens')
            ->where('user_id', $request->id)
            ->update([
                'revoked' => true
            ]);
        return response()->json(['success'=>'Logged Out !!']);
    }
}
