<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskManagementController extends Controller
{
    public function index()
    {
        return inertia('TaskManagement/TaskManagement');
    }
}
