import React from 'react';
import { Camera, WifiOff } from 'lucide-react';
import type { CameraFeed } from '../types';

const mockFeeds: CameraFeed[] = [
  {
    id: '1',
    name: 'Main Entrance',
    location: 'Building A',
    status: 'online',
    lastPing: new Date()
  },
  {
    id: '2',
    name: 'Parking Gate',
    location: 'South Lot',
    status: 'online',
    lastPing: new Date()
  },
  {
    id: '3',
    name: 'Emergency Exit',
    location: 'Building B',
    status: 'offline',
    lastPing: new Date()
  }
];

export function LiveFeeds() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Camera className="w-5 h-5 mr-2 text-blue-500" />
        Live Camera Feeds
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockFeeds.map((feed) => (
          <div key={feed.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{feed.name}</span>
              {feed.status === 'online' ? (
                <span className="text-green-500 text-sm flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Online
                </span>
              ) : (
                <span className="text-red-500 text-sm flex items-center">
                  <WifiOff className="w-4 h-4 mr-1" />
                  Offline
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">{feed.location}</p>
            <p className="text-xs text-gray-500">
              Last Update: {feed.lastPing.toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}