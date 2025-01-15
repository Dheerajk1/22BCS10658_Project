import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { AlertsList } from './components/AlertsList';
import { LiveFeeds } from './components/LiveFeeds';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto py-6 px-4">
        <Dashboard />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <AlertsList />
          <LiveFeeds />
        </div>
      </main>
    </div>
  );
}

export default App;