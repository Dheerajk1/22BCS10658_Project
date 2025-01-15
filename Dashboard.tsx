import React from 'react';
import { Camera, AlertTriangle, Users, Activity } from 'lucide-react';

const stats = [
  { 
    icon: <Camera className="w-6 h-6 text-blue-500" />,
    label: 'Active Cameras',
    value: '124'
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    label: 'Active Alerts',
    value: '3'
  },
  {
    icon: <Users className="w-6 h-6 text-green-500" />,
    label: 'Persons of Interest',
    value: '847'
  },
  {
    icon: <Activity className="w-6 h-6 text-purple-500" />,
    label: 'Daily Scans',
    value: '24,521'
  }
];

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              {stat.icon}
            </div>
          </div>
          <p className="text-gray-600 text-sm">{stat.label}</p>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}