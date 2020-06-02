<?php
 
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\DiscoverApp_Newsletter;
use Illuminate\Support\Facades\Auth; 

class MailController extends Controller
{
    public function store(Request $request)
    {
        $user = Auth::user(); 
        Mail::to($user)
            ->queue(new DiscoverApp_Newsletter($request->except('_token')));

            return new DiscoverApp_Newsletter([
            // 'nom' => Auth::user()->name,
            // 'email' => Auth::user()->email,
      ]);
    }
}
