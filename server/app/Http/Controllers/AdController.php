<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ad;

class AdController extends Controller
{
    //
    function addAd(Request $req)
    {
        $ad= new Ad;
        $ad->title=$req->input('title');
        $ad->description=$req->input('description');
        $ad->file_path=$req->file('file')->store('ads');
        $ad->salary=$req->input('salary');
        $ad->save();
        return $ad;
    }
    function ads()
    {
        return Ad::all();
    }

    function getAd($id)
    {
        return Ad::find($id);
    }


    function delete($id)
    {
        $result= Ad::where('id', $id)->delete();
        if($result)
        {
            return ['result'=>'Skelbimas sėkmingai pašalintas'];
        } else {
            return ['result'=>'Skelbimo nepavyko pašalinti'];

        }
    }

    function search($key) {
        return Ad::where('title', 'Like', "%$key%")->get();
    }
}
