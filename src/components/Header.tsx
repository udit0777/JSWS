import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from './ui/Button';
import Image from 'next/image';

export default function Header() {
  return (
    <header style={{
      background: 'white',
      borderBottom: '1px solid #eee',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '0.75rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative', width: '40px', height: '40px' }}>
            <Image src="/images/logo.png" alt="Jan Swabhiman Logo" fill style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#333', lineHeight: 1.1 }}>Jan Swabhiman</div>
            <div style={{ fontSize: '0.7rem', color: '#666', fontWeight: 600 }}>Ek kadam, behtar kal ki aur</div>
          </div>
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href="/" style={{ fontWeight: 600, color: '#c0392b', fontSize: '0.9rem' }}>Home</Link>
          <Link href="/about" style={{ fontWeight: 600, color: '#555', fontSize: '0.9rem' }}>About Us</Link>
          <Link href="/work" style={{ fontWeight: 600, color: '#555', fontSize: '0.9rem' }}>Our Work</Link>
          <Link href="/impact" style={{ fontWeight: 600, color: '#555', fontSize: '0.9rem' }}>Impact</Link>
          <Link href="/stories" style={{ fontWeight: 600, color: '#555', fontSize: '0.9rem' }}>Stories</Link>
          <Link href="/involved" style={{ fontWeight: 600, color: '#555', fontSize: '0.9rem' }}>Get Involved</Link>
          <Link href="/contact" style={{ fontWeight: 600, color: '#555', fontSize: '0.9rem' }}>Contact Us</Link>
          <Button variant="primary" icon={Heart} style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            Donate Now <Heart size={14} fill="white" style={{ marginLeft: '4px' }} />
          </Button>
        </nav>
      </div>
    </header>
  );
}

