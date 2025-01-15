import React from 'react';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';
import type { Alert } from '../types';

const mockAlerts: Alert[] = [
  {
    id: '1',
    timestamp: new Date(),
    confidence: 98.5,
    location: 'Terminal 3 - Gate A',
    status: 'pending',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    matchedPerson: {
      name: 'REDACTED',
      threatLevel: 'high',
      lastSeen: new Date()
    }
  },
  {
    id: '2',
    timestamp: new Date(),
    confidence: 87.2,
    location: 'Parking Level 2',
    status: 'investigating',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  }
];

export function AlertsList() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
        Active Alerts
      </h2>
      
      <div className="space-y-4">
        {mockAlerts.map((alert) => (
          <div key={alert.id} className="border rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                {alert.status === 'pending' && (
                  <Clock className="w-4 h-4 text-yellow-500 mr-2" />
                )}
                {alert.status === 'investigating' && (
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                )}
                {alert.status === 'resolved' && (
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                )}
                <span className="font-semibold">{alert.location}</span>
              </div>
              <span className="text-sm text-gray-500">
                {alert.timestamp.toLocaleTimeString()}
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <img 
                src={alert.image} 
                alt="Alert capture"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm text-gray-600">
                  Confidence: {alert.confidence}%
                </p>
                {alert.matchedPerson && (
                  <p className="text-sm font-semibold text-red-600">
                    Threat Level: {alert.matchedPerson.threatLevel}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}