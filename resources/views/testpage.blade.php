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
        <h3>L'utilisateur est connecté.</h3>

        <h3>Add kid</h3>
        <form action="/kid/create" enctype="multipart/form-data" method="post">
            @csrf
            <input type="text" name="name" value='{{old('name')}}' required />
            <input type="date" name="date_of_birth"  value='{{old('date_of_birth')}}' required />
            <input type="radio" name="avatar_id"  value='1' required /> Avatar
            <input type="radio" name="avatar_id"  value='2' required /> Avatar2
            <input type="checkbox" name="categories[]"  value="1"/> cuisine
            <input type="checkbox" name="categories[]"  value="2"/> jeux
            <input type="submit" value="Submit" />
        </form>

        <h3>Création</h3>
        <form action="/creation/1/1/create" enctype="multipart/form-data" method="post">
            @csrf
            <input type="file" name="img" value='{{old('img')}}' required />
            <input type="submit" value="Submit" />
        </form>
    @endif

    {{-- <br/>
    <h2>Ajout d'une activité</h2>
    <form action="/activity/create" enctype="multipart/form-data" method="post">
        @csrf
        <input type="text" name="name" value='{{old('name')}}' required />
        <input type="text" name="img"  value='{{old('img')}}' required />
        <input type="text" name="txt_choice"  value='{{old('txt_choice')}}' required />
        <input type="text" name="txt_win"  value='{{old('txt_win')}}' required />
        <input type="submit" value="Submit" />
    </form>
     --}}
</body>
</html>
