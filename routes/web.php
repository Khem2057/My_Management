<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MoneyManagementController;
use App\Http\Controllers\ProfileManagementController;
use App\Http\Controllers\PlanMakingController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TaskManagementController;
use App\Http\Controllers\TimeManagementController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/profileManagement', function () {
//     return Inertia::render('ProfileManagement');
// })->middleware(['auth', 'verified'])->name('profileManagement');

Route::middleware('auth', 'verified')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/profileManagement', [ProfileManagementController::class, 'index'])->name('profileManagement');
    Route::get('/planMaking', [PlanMakingController::class, 'index'])->name('planMaking');
    Route::get('/taskManagement', [TaskManagementController::class, 'index'])->name('taskManagement');
    Route::get('/timeManagement', [TimeManagementController::class, 'index'])->name('timeManagement');
    Route::get('/moneyManagement', [MoneyManagementController::class, 'index'])->name('moneyManagement');
    Route::get('/settings', [SettingController::class, 'index'])->name('settings');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
