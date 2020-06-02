<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DiscoverApp_Newsletter extends Mailable
{
    use Queueable, SerializesModels;

    public $informations;

    public function __construct(Array $informations)
    {
        $this->informations = $informations;
    }

    public function build()
    {
        return $this
        ->subject('La nouvelle application')
        ->from('noreply@kimeapp.com')
        ->view('mails.DiscoverApp_Newsletter');
    }
}
