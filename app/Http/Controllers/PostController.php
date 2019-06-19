<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use App\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index() {
//        $post = Post::with('user','category')->get();
//        return $post;

//        $users = User::all();
//        return $users;
        $post = Category::with('posts')->get();
        return $post;


    }
}
