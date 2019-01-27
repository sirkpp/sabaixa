<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Schema;
use File;
use Auth;
class MessageController extends Controller
{
    //Message type::
    //          1- String
    //          2- Picture
    //          3- Voice
    //          4- Video
    //          5- File

    //INTERNAL MESSAGE PROCESSES STARTS
    //Makes a user thread
    protected function createUserThread($sender,$receiver){
        Schema::create($sender.":".$receiver, function($table)
        {
            $table->increments('id');
            $table->integer('senderID');
            $table->string('messageType');
            $table->string('message');
            $table->timestamps();
        });
        File::makeDirectory(public_path().'\\'."u".$sender."o".$receiver,0777,true);
    }
    //get a single message
    protected function getUserThreadMessage($tableName,$id){
        if(Schema::hasTable($tableName))
            return DB::table($tableName)->whereIn('id', $id)->get();
        return new Response('Not Found', 404);
    }
    //adds a single message
    protected function AddUserThreadMessage($tableName,$messsagetype,$message){
        return DB::table($tableName)->insert(
            array('messageType'=>$messsagetype,
                'senderID'=>Auth::user()->id,
                'message'=>$message)
        );
    }
    //gets no. of messages from the last message sent
    protected function getUserThreadMessages($tableName,$countfromLast){
        if(Schema::hasTable($tableName)){
            $total=DB::table($tableName)->count();
            if($total<=$countfromLast)
                $countfromLast=$total-1;
            return DB::table($tableName)->whereIn('id', range($total-$countfromLast,$total))->get();
        }
        return new Response('Not Found', 404);
    }
    //gets no. of messages from given message ID
    protected function getUserThreadMessagesWithID($tableName,$count,$id){
        if(Schema::hasTable($tableName)){
            $total=DB::table($tableName)->count();
            if($total<=$count)
                $count=$total-1;
            return DB::table($tableName)->whereIn('id', range($id,$id))->get();
        }
        return new Response('Not Found', 404);
    }
    //gets a message of a group
    protected function getGroupThreadMessage($groupThreadID,$id){
        if(Schema::hasTable($groupThreadID))
            return DB::table($groupThreadID)->whereIn('id', $id)->get();
        return new Response('Not Found', 404);
    }
    //gets a no. of of messages from the last sent message
    protected function getGroupThreadMessages($groupThreadID,$countfromLast){
        if(Schema::hasTable($groupThreadID)){
            $total=DB::table($groupThreadID)->count();
            if($total<=$countfromLast)
                $countfromLast=$total-1;
            return DB::table($groupThreadID)->whereIn('id', range($total-$countfromLast,$total))->get();
        }
        return new Response('Not Found', 404);
    }
    //gets a no. of of messages with given ID
    protected function getGroupThreadMessagesFromID($groupThreadID,$count,$id){
        if(Schema::hasTable($groupThreadID)){
            $total=DB::table($groupThreadID)->count();
            if($total<=$count)
                $count=$total-1;
            return DB::table($groupThreadID)->whereIn('id', range($id-$count,$id))->get();
        }
        return new Response('Not Found', 404);
    }
    //adds a message to a group thread
    protected function AddGroupThreadMessage($groupThreadID,$messsagetype,$message){
        $this->CheckGroupThread();
        return DB::table($groupThreadID)->insert(
            array('messageType'=>$messsagetype,
                'userID'=>Auth::user()->id,
                'message'=>$message)
        );
    }
    //makes a group message thread
    protected function createGroupThread($groupThreadID){
        if(!Schema::hasTable($groupThreadID)){
            Schema::create($groupThreadID, function($table)
                {
                $table->increments('id');
                $table->integer('userID');
                $table->string('messageType');
                $table->string('message');
                $table->timestamps();
            });
            File::makeDirectory(public_path().'\\'."g".$groupThreadID,0777,true);
        }
    }
    //INTERNAL MESSAGE PROCESSES ENDS


    //EXTERNAL MESSAGE PROCESSES

    public function index(){
        return view('message');
    }
    public function newUserMessage(Request $request){
        if(Auth::check())
            return new Response('Forbidden', 403);
        if(!User::find($request['receiver']))
            return new Response('Not Found', 404);
        if($request['messageType']<=0&$request['messageType']>=6)
            return new Response('Bad Request',400);
        $sender=Auth::user()-id;
        $receiver=$request['receiver'];
        if(!Schema::hasTable($sender.":".$receiver)){
            $sender=$request['receiver'];
            $receiver=Auth::user()-id;
        }
        switch($request['messageType']){
            case 1:
                if($request['message']==null)
                    return new Response('Bad Request',400);
                if(!Schema::hasTable($sender.":".$receiver))
                    $this->createUserThread($sender,$receiver);
                $this->AddUserThreadMessage($sender.":".$receiver,$request['messageType'],$request['message']);
            break;
            case 2:
                if($request['image']==null)
                    return new Response('Bad Request',400);
                if(!Schema::hasTable($sender.":".$receiver))
                    $this->createUserThread($sender,$receiver);
                $file= $request->file('image');
                $filename = 'i' . (DB::table($sender.":".$receiver)->count()+1) . '.' . $file->getClientOriginalExtension();
                $file->move(public_path().'\\'."u".$sender."o".$receiver, $filename);
                $this->AddUserThreadMessage($sender.":".$receiver,$request['messageType'],$filename);
            break;
            case 3:
                if($request['audio']==null)
                    return new Response('Bad Request',400);
                if(!Schema::hasTable($sender.":".$receiver))
                    $this->createUserThread($sender,$receiver);
                $file= $request->file('audio');
                $filename = 'a' . (DB::table($sender.":".$receiver)->count()+1) . '.' . $file->getClientOriginalExtension();
                $file->move(public_path().'\\'."u".$sender."o".$receiver, $filename);
                $this->AddUserThreadMessage($sender.":".$receiver,$request['messageType'],$filename);
            break;
            case 4:
                if($request['video']==null)
                    return new Response('Bad Request',400);
                if(!Schema::hasTable($sender.":".$receiver))
                    $this->createUserThread($sender,$receiver);
                $file= $request->file('video');
                $filename = 'v' . (DB::table($sender.":".$receiver)->count()+1) . '.' . $file->getClientOriginalExtension();
                $file->move(public_path().'\\'."u".$sender."o".$receiver, $filename);
                $this->AddUserThreadMessage($sender.":".$receiver,$request['messageType'],$filename);
            break;
            case 5:
                if($request['file']==null)
                    return new Response('Bad Request',400);
                if(!Schema::hasTable($sender.":".$receiver))
                    $this->createUserThread($sender,$receiver);
                $file= $request->file('file');
                $filename = 'f' . (DB::table($sender.":".$receiver)->count()+1) . '.' . $file->getClientOriginalExtension();
                $file->move(public_path().'\\'."u".$sender."o".$receiver, $filename);
                $this->AddUserThreadMessage($sender.":".$receiver,$request['messageType'],$filename);
            break;
        }
    }
    
    public function newGroupMessage(Request $request){
        if(Auth::check())
            return new Response('Forbidden', 403);
        if($request['messageType']<=0&$request['messageType']>=6)
            return new Response('Bad Request',400);
        if(!DB::table($request['messageThreadID'])->count()){
            $this->createGroupThread($request['messageThreadID']);
        }
        switch($request['messageType']){
            case 1:
                if($request['message']==null)
                    return new Response('Bad Request',400);
                $this->AddUserThreadMessage($request['messageThreadID'],$request['messageType'],$request['message']);
            break;
            case 2:
                if($request['image']==null)
                    return new Response('Bad Request',400);
                $file= $request->file('image');
                $filename = 'i' . (DB::table($request['messageThreadID'])->count()+1) . '.' . $file->getClientOriginalExtension();
                $file->move(public_path().'\\'."g".$request['messageThreadID'], $filename);
                $this->AddUserThreadMessage($request['messageThreadID'],$request['messageType'],$filename);
            break;
            case 3:
                if($request['audio']==null)
                    return new Response('Bad Request',400);
                $file= $request->file('audio');
                $filename = 'a' . (DB::table($request['messageThreadID'])->count()+1) . '.' . $file->getClientOriginalExtension();
                $file->move(public_path().'\\'."g".$request['messageThreadID'], $filename);
                $this->AddUserThreadMessage($request['messageThreadID'],$request['messageType'],$filename);
            break;
            case 4:
                if($request['video']==null)
                    return new Response('Bad Request',400);
                $file= $request->file('video');
                $filename = 'v' . (DB::table($request['messageThreadID'])->count()+1) . '.' . $file->getClientOriginalExtension();
                $file->move(public_path().'\\'."g".$request['messageThreadID'], $filename);
                $this->AddUserThreadMessage($request['messageThreadID'],$request['messageType'],$filename);
            break;
            case 5:
                if($request['file']==null)
                    return new Response('Bad Request',400);
                if(!Schema::hasTable($request['messageThreadID']))
                    $this->createUserThread($sender,$receiver);
                $file= $request->file('file');
                $filename = 'f' . (DB::table($request['messageThreadID'])->count()+1) . '.' . $file->getClientOriginalExtension();
                $file->move(public_path().'\\'."g".$request['messageThreadID'], $filename);
                $this->AddUserThreadMessage($request['messageThreadID'],$request['messageType'],$filename);
            break;
        }
    }

    public function getUserMessagesfromlast($count,$sender){
        if(Auth::check())
            return new Response('Forbidden', 403);
        $receiver=Auth::user()->id;
        if(!Schema::hasTable($sender.":".$receiver)){
            $receiver=$sender;
            $sender=Auth::user()->id;
            if(!Schema::hasTable($sender.":".$receiver)){
                return new Response('Forbidden', 403);
            }
        }
        return $this->getUserThreadMessages($sender.":".$receiver,$count);
    }
    public function getGroupMessagesfromlast($count,$groupThreadID){
        if(Auth::check())
            return new Response('Forbidden', 403);
        if(!Schema::hasTable($groupThreadID)){
            return new Response('Not Found', 404);
        }
        return $this->getGroupThreadMessages($groupThreadID,$count);
    }

    public function getUserMessagefromID($receiver,$id){
        if(Auth::check())
            return new Response('Forbidden', 403);
        $receiver=Auth::user()->id;
        if(!Schema::hasTable($sender.":".$receiver)){
            $receiver=$sender;
            $sender=Auth::user()->id;
            if(!Schema::hasTable($sender.":".$receiver)){
                return new Response('Forbidden', 403);
            }
        }
        return $this->getUserThreadMessage($sender.":".$receiver,$id);
    }

    public function getGroupMessagesfromID($id,$groupThreadID){
        if(Auth::check())
            return new Response('Forbidden', 403);
        if(!Schema::hasTable($groupThreadID)){
            return new Response('Not Found', 404);
        }
        return $this->getGroupThreadMessages($groupThreadID,$id);
    }

    public function getUserMessagesFromIDandCount($receiver,$id,$count){
        if(Auth::check())
            return new Response('Forbidden', 403);
        $receiver=Auth::user()->id;
        if(!Schema::hasTable($sender.":".$receiver)){
            $receiver=$sender;
            $sender=Auth::user()->id;
            if(!Schema::hasTable($sender.":".$receiver)){
                return new Response('Forbidden', 403);
            }
        }
        return $this->getUserThreadMessagesWithID($sender.":".$receiver,$count,$id);
    }

    public function getGroupMessagesFromIDandCount($groupThreadID,$id,$count){
        if(Auth::check())
            return new Response('Forbidden', 403);
        if(!Schema::hasTable($groupThreadID)){
            return new Response('Not Found', 404);
        }
        return $this->getGroupThreadMessagesFromID($groupThreadID,$count,$id);
    }
    
    //EXTERNAL MESSAGE PROCESSES ENDS
}
