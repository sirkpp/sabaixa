<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class ActiveStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Auth::check())
        {
            $user = Auth::user();
            $user['last_active_at']= now()->timestamp;
        }
        return $next($request);
    }
}
