<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class ProfileController extends Controller
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
    public function index($id)
    {
            $user = User::findorFail($id);
            return $user;
            /*if($user != null){
                return view('user.userprofile')->with(array("user"=>$user));
            }*/
    }
    public function editName(Request $request)
    {
        if($this->validator(array("ame"=>$request['name'],))){
            $user = User::find($request);
            $user->name = $request['name'];
            $user->save();
        }
    }
    protected function validator(array $data)
    {
        return validator::make($data,[
            'name' => ['required', 'string', 'max:191'],
        ]);
    }
    public function editProfilePic(Request $request)
    {
        $user = User::find($request);
        $user->profile_pic = $request['profile_pic'];
        $user->save();
    }
    public function editContact(Request $request)
    {
        if(validator::make(array("contact_no"=>$request['contact_no']),[
            'contact_no' => ['required', 'integer'],
        ]))
        {
            $user = User::find($request);
            $user->contact_no = $request['contact_no'];
            $user->save();
        }
    }
    public function editMainProduct(Request $request)
    {
        
        if(validator::make(array("main_product"=>$request['main_product']),[
            'main_product' => ['required', 'string'],
        ]))
        {
            $user = User::find($request);
            $user->main_product = $request['main_product'];
            $user->save();
        }
    }
    public function editExperience(Request $request)
    {
        
        if(validator::make(array("experience"=>$request['experience']),[
            'experience' => ['required', 'bigInteger'],
        ]))
        {
            $user = User::find($request);
            $user->experience = $request['experience'];
            $user->save();
        }
    }
    public function editTotalRevenue(Request $request)
    {
        
        if(validator::make(array("total_revenue"=>$request['total_revenue']),[
            'total_revenue' => ['required', 'bigInteger'],
        ]))
        {
            $user = User::find($request);
            $user->total_revenue = $request['total_revenue'];
            $user->save();
        }
    }
    public function editTopMarket(Request $request)
    {
        
        if(validator::make(array("top_market"=>$request['top_market']),[
            'top_market' => ['required', 'string'],
        ]))
        {
            $user = User::find($request);
            $user->top_market = $request['top_market'];
            $user->save();
        }
    }
    
   

    
}
/*
user ko detail save garne 
ek ek detail xhr bata aaune banauna function haru banaune
lixkher firstname matra edit garna milne
ok but xhrhttpresponse ta blade maa matrai use garni haina ra
tesko function haru ta handle garnu paro ni tyo chae banau na
show edit haru banauni ?
exequest
aab yo function ma xhr bata data dina milo ani yesle user ko name matra edit garni vo ni 
yastae vaneko
ani xhr use garna namilni function ko ex deu ta
saab ko banau na name ko lagi xuttai contact ko lagi xuttai garni ?
hunxa post ko lagi ni banau
and editprofile vanni function banayera sabai akai choti edit garna mildaina ?
panthi le saab xhr ma banaune vanya xan
fb haru ma yestae ta ho
detail dharai vayesi detail rakhna garo hunxa tyasaile
fb khola ta
bujhe bujhe 
lala kaam gara 
ma pani garxu 
 */