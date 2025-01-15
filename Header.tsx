import React from 'react';
import { Shield, Bell, Settings, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-slate-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-blue-400" />
          <h1 className="text-xl font-bold">SecureVision AI</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-slate-800 rounded-full relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
          </button>
          <button className="p-2 hover:bg-slate-800 rounded-full">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-slate-800 rounded-full">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}