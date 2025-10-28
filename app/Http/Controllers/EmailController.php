<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;


class EmailController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:subscribers,email',
        ]);

        Email::create([
            'email' => $request->email,
        ]);

        return back()->with('message', 'Subscribed successfully!');
    }
}
