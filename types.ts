export interface Alert {
  id: string;
  timestamp: Date;
  confidence: number;
  location: string;
  status: 'pending' | 'investigating' | 'resolved';
  image: string;
  matchedPerson?: {
    name: string;
    threatLevel: 'low' | 'medium' | 'high';
    lastSeen: Date;
  };
}

export interface CameraFeed {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline';
  lastPing: Date;
}