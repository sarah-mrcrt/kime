<?php
 
namespace App\Http\Controllers;
 
use App\Http\Requests\ContactRequest;
use Illuminate\Support\Facades\Mail;
use App\Mail\DiscoverApp_Newsletter;
use Illuminate\Support\Facades\Auth; 

class MailController extends Controller
{
    public function create()
    {
        return view('DiscoverApp_Newsletter');
    }
 
    public function store(ContactRequest $request)
    {
        $user = Auth::user(); 
        Mail::to($user->email)
            ->queue(new DiscoverApp_Newsletter($request->except('_token')));
 
        return 
        new DiscoverApp_Newsletter([
            'nom' => Auth::user()->name,
            'email' => Auth::user()->email,
      ]);
    }
}
