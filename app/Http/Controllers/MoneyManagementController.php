<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MoneyManagementController extends Controller
{
    public function index()
    {
        return inertia('MoneyManagement/MoneyManagement');
    }
}
