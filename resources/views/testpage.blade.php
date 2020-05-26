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

    <h2>Formulaire test</h2>
    <form action="/kid/create" enctype="multipart/form-data" method="post">
        @csrf
        <input type="text" name="name" value='{{old('name')}}' required />
        <input type="text" name="age"  value='{{old('age')}}' required />
        <input type="text" name="avatar"  value='{{old('avatar')}}' required />
        <input type="checkbox" name="categories[]" value="Cuisine">
        <input type="checkbox" name="categories[]" value="Jeux">

        <input type="submit" value="Submit" />
    </form>
    
</body>
</html>
