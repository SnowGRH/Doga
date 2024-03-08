<?php

namespace App\Http\Controllers;

use App\Models\Bejegyzesek;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function Laravel\Prompts\table;

class Bejegyzes extends Controller
{
    //

    function ShowAll()
    {
        return DB::table('bejegyzeseks as be')
        ->join('tevekenysegs as tev','be.tevekenyseg_id','=','tev.tevekenyseg_id')
        ->select('be.osztaly_id','tev.tevekenyseg_nev','tev.pontszam','be.allapot')
        ->get();
    }
    function Find($kereset)
    {
        //hibás még 
        return DB::table('bejegyzeseks as be')
        ->join('tevekenysegs as tev','be.tevekenyseg_id','=','tev.tevekenyseg_id')
        ->select('tev.tevekenyseg_nev','tev.pontszam')
        ->where('be.osztaly_id', '=', $kereset)
        ->get();
    }
    function New(Request $request)
    {
        $bejegyzes = new Bejegyzesek();
        $bejegyzes->tevekenyseg_id = $request->tevekenyseg_id;
        $bejegyzes->osztaly_id = $request->osztaly_id;
        $bejegyzes->allapot = $request->allapot->default(0);
        $bejegyzes->save();
    }
}
