<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Payment Policy — {{ config('app.name', 'AutoProExpress') }}</title>

        @vite(['resources/css/app.css', 'resources/js/payment-policy.jsx'])
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
