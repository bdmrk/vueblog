<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function addCategory(Request $request) {
        $category = New Category();

        $category->cat_name = $request->cat_name;
        $category->save();
        return ['message', 'OK'];
    }
}
