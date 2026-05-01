import { NextResponse } from 'next/server';

export async function GET() {
  const stats = {
    devices: {
      total: 1248,
      online: 1112,
      trend: 12
    },
    uptime: "99.9%",
    securityScore: 94,
    recentAlerts: [
      { id: 1, type: 'critical', msg: 'Unauthorized access attempt - Node 04', time: '2m ago', status: 'Active' },
      { id: 2, type: 'warning', msg: 'High CPU usage detected on Server A', time: '15m ago', status: 'Pending' },
      { id: 3, type: 'info', msg: 'Scheduled backup completed successfully', time: '1h ago', status: 'Resolved' },
    ]
  };

  return NextResponse.json(stats);
}
