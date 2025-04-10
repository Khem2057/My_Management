<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TimeManagementController extends Controller
{
    public function index()
    {
        return inertia('TimeManagement/TimeManagement');
    }
}
