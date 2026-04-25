import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--foreground)',
      color: 'white',
      padding: '4rem 0 2rem',
      marginTop: 'auto'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem', color: 'white', marginBottom: '1rem' }}>
            <Heart size={28} fill="var(--primary)" color="var(--primary)" />
            <span>HopeFoundation</span>
          </Link>
          <p style={{ color: 'var(--text-muted)' }}>Empowering communities and changing lives across India since 2010.</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Quick Links</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none' }}>
            <li><Link href="#about" style={{ color: 'var(--text-muted)' }}>About Us</Link></li>
            <li><Link href="#impact" style={{ color: 'var(--text-muted)' }}>Our Impact</Link></li>
            <li><Link href="#donate" style={{ color: 'var(--text-muted)' }}>Donate</Link></li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Contact</h3>
          <p style={{ color: 'var(--text-muted)' }}>contact@hopefoundation.org</p>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>+91 98765 43210</p>
        </div>
      </div>
      <div className="container" style={{ borderTop: '1px solid #444', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} HopeFoundation. All rights reserved.</p>
      </div>
    </footer>
  );
}
