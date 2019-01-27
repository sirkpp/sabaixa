<?php

namespace App\Http\Controllers;

use Auth;
use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
      /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('post');
    }

    public function showPost()
    {
        $posts = Post::all();
        $data = array();
        foreach($posts as $post)
        {
            $item = array(
                "id"=>$post['id'],
                "post_title"=>$post['post_title'],
                "post_type"=>$post['post_type'],
                "post_detail"=>$post['post_detail'],
                "img_path"=>$post['img_path'],
                "created_at"=>$post['created_at'],
                "updated_at"=>$post['updated_at'],
            );
            array_push($data,$item);
        }
        return $data;
    }
    public function createPost(Request $request)
    {
        if($this->validator(array("post_detail"=>$request['post_detail'], "post_title"=>$request['post_title']))){
            return Post::create([
                'post_title'=>$request['post_title'],
                'post_type'=>$post['post_type'],
                'post_detail'=>$post['post_detail'],
                'img_path'=>$post['img_path'],
            ]);
        }
    }
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'post_title' => ['required', 'string', 'max:191'],
            'post_detail' => ['required', 'string', 'min:6', 'confirmed'],
        ]);
    }
    public function post()
    {
        return $this->showPost();
     //   return view('post')->with(array("posts"=>$this->showPost()));
    }

}
