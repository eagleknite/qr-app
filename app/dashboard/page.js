// app\dashboard\page.js
"use client"
import DashboardLayout from './layout';
import Admin from './Admin';
import QRCodeGenerator from './QRCodeGenerator';
import { useState } from 'react';

export default function Dashboard() {
  const [url, setUrl] = useState('');

  return (
    <DashboardLayout>
      <Admin url={url} setUrl={setUrl}>
        <QRCodeGenerator url={url} />
      </Admin>
    </DashboardLayout>
  );
}
