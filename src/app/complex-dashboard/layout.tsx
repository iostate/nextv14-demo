import React from 'react';

export default function DashboardLayout({
  children,
  users,
  revenue,
  login,
  currentUser,
  notifications,
}: {
  currentUser: { userId: string } | null;
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
  notifications: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      {/* We want this up top since Layout is going to wrap the page */}
      {/* complex-dashboard/children/page.tsx */}
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
