<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <!--<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">-->

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <h2>Page de tests</h2>
    @if (Auth::check())
     L'utilisateur est connecté.
    @endif

    <a href="/deconnexion" class="button">Déconnexion</a>

    <h2>Formulaire test</h2>
    <form action="/activity/create" enctype="multipart/form-data" method="post">
        @csrf
        <input type="text" name="name" value='{{old('name')}}' required />
        <input type="text" name="img"  value='{{old('img')}}' required />
        <input type="text" name="txt_choice"  value='{{old('txt_choice')}}' required />
        <input type="text" name="txt_win"  value='{{old('txt_win')}}' required />
        <input type="submit" value="Submit" />
        <input type="submit" value="Submit" />
    </form>
    <input type="hidden" name="_method" value="PUT">

    <a href="/activity/update/1">xx</a>
    
</body>
</html>
