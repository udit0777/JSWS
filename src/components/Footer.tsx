import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe, Share2, Heart, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#1a1a1a',
      color: '#fff',
      padding: '4rem 0 2rem',
    }}>
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8" style={{ marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Image src="/images/logo.png" alt="Jan Swabhiman" width={32} height={32} />
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>Jan Swabhiman</div>
                <div style={{ fontSize: '0.6rem', color: '#aaa' }}>Ek kadam, behtar kal ki aur</div>
              </div>
            </div>
            <p style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Hum samaj ke zarooratmand logon ke liye shiksha, swasthya, ration aur rojgar ke kshetra me kaam karte hain.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="flex items-center justify-center" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#333' }}><Globe size={16} /></Link>
              <Link href="#" className="flex items-center justify-center" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#333' }}><Share2 size={16} /></Link>
              <Link href="#" className="flex items-center justify-center" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#333' }}><Heart size={16} /></Link>
              <Link href="#" className="flex items-center justify-center" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#333' }}><Users size={16} /></Link>
            </div>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#aaa' }}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/work">Our Work</Link></li>
              <li><Link href="/impact">Impact</Link></li>
              <li><Link href="/stories">Stories</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Get Involved</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#aaa' }}>
              <li><Link href="/donate">Donate Now</Link></li>
              <li><Link href="/volunteer">Volunteer</Link></li>
              <li><Link href="/partnership">CSR Partnership</Link></li>
              <li><Link href="/fundraise">Fundraise</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Contact Us</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#aaa' }}>
              <li className="flex gap-4">
                <Phone size={18} style={{ color: '#fff' }} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-4">
                <Mail size={18} style={{ color: '#fff' }} />
                <span>info@janswabhiman.org</span>
              </li>
              <li className="flex gap-4">
                <MapPin size={18} style={{ color: '#fff' }} />
                <span>123, Seva Marg, Lucknow, Uttar Pradesh - 226001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#666' }}>
          <p>&copy; 2024 Jan Swabhiman. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


