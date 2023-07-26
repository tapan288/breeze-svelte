<p align="center"><img src="/art/logo.svg" alt="Logo Laravel Breeze"></p>

<p align="center">
    <a href="https://packagist.org/packages/laravel/breeze">
        <img src="https://img.shields.io/packagist/l/laravel/breeze" alt="License">
    </a>
</p>

# Introduction

Svelte and Tailwind power this version of Laravel Breeze.
As a typical Breeze package, this publishes authentication controllers and views to your application that can be easily customized based on your application's needs.

# Documentation
## Installation
You can install the package via Composer:

```bash
composer require tapansharma/breeze-svelte --dev
```

Everything else is the same as the original Breeze package, you can either use the interactive installer or install it manually by passing the `svelte` flag to the `php artisan breeze:install` command.

## SSR Support
This package supports SSR out of the box, you can use the `--ssr` flag to install the package with SSR support.

```bash
php artisan breeze:install svelte --ssr
```

For further information about SSR, please refer to the [official documentation](https://inertiajs.com/server-side-rendering).

---

# Useful Links
- If you're new to the LIST Stack, you can [check out this introductory tutorial](https://www.youtube.com/watch?v=8Wze8o5s1Oo)
- **Laravel-Inertia-Svelte Course**
    - I guess you've already figured out that I'm loving this stack and I have been exploring it a lot lately, and to further improve your skills and help you get started, I have created a Udemy Course based on this stack, where we'll build multiple practical projects and learn a ton of stuff along the way.
    - [**You can check out the Course here**](https://www.udemy.com/course/learn-laravel-with-inertiajs-and-svelte/?couponCode=68E5C4AD2EE9CAC378D1)


## Screenshots
![image](https://user-images.githubusercontent.com/46927593/218656025-7f66a374-76a0-4de2-b766-b39d95f3e5b1.png)
---
![image](https://user-images.githubusercontent.com/46927593/218656109-13079ce0-b327-4a6c-a9c7-902fddfe3704.png)
---
![image](https://user-images.githubusercontent.com/46927593/218658845-aab15948-bc8f-422b-811b-71c72e2643e7.png)
---
![image](https://user-images.githubusercontent.com/46927593/218659186-3db2d7af-f051-474f-bc73-1c6060be7178.png)
---
![image](https://user-images.githubusercontent.com/46927593/218659277-a11b75b5-a6a2-4171-ac55-932144df940f.png)
---

## License

Laravel Breeze is open-sourced software licensed under the [MIT license](LICENSE.md).
