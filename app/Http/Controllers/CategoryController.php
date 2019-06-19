<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function addCategory(Request $request) {
        $this->validate($request,[
           'category'=> 'required|min:2|max:50'
        ]);

        $category = New Category();

        $category->cat_name = $request->category;
        $category->save();
        return ['message', 'OK'];
    }
}
