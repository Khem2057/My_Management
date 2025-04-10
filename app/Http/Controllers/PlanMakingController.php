<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlanMakingController extends Controller
{
    public function index()
    {
        return inertia('PlanMaking/PlanMaking');
    }
}
