import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from './ui/Button';

export default function Header() {
  return (
    <header style={{
      background: 'var(--card-bg)',
      boxShadow: 'var(--shadow-sm)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary)' }}>
          <Heart size={28} fill="currentColor" />
          <span>HopeFoundation</span>
        </Link>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="#impact" style={{ fontWeight: 500 }}>Our Impact</Link>
          <Link href="#help" style={{ fontWeight: 500 }}>Ways to Help</Link>
          <Button variant="primary">Donate Now</Button>
        </nav>
      </div>
    </header>
  );
}
