import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { 
  Heart, 
  Bell, 
  Users, 
  HandHeart, 
  GraduationCap, 
  Share2, 
  ShieldCheck, 
  FileText, 
  Award, 
  MapPin, 
  CheckCircle,
  ChevronRight,
  Quote
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section style={{
        position: 'relative',
        height: '85vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/images/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          zIndex: -2
        }} />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
          zIndex: -1
        }} />
        
        <div className="container">
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Aaj bhi kai bachche <span style={{ color: '#f39c12' }}>bina khana khaye</span> sone par majboor hain...
            </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem', fontWeight: 500, opacity: 0.9 }}>
              Aapka chhota sa contribution kisi ki zindagi badal sakta hai.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" size="lg" icon={Heart} style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Donate Now
              </Button>
              <Button variant="outline" size="lg" style={{ borderColor: 'white', color: 'white', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Read Stories
              </Button>
            </div>
            
            <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex' }}>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    border: '2px solid white', 
                    marginLeft: i === 1 ? 0 : '-15px',
                    overflow: 'hidden',
                    background: '#ddd'
                  }}>
                    <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="User" width={40} height={40} />
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                <span style={{ fontWeight: 800 }}>1000+</span> logon ne aaj hi madad ki
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Urgent Alert Banner */}
      <section style={{ background: '#c0392b', padding: '0.75rem 0', color: 'white' }}>
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem', borderRadius: '50%' }}>
              <Bell size={20} fill="white" />
            </div>
            <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>
              <span style={{ fontWeight: 800, textTransform: 'uppercase', marginRight: '0.5rem' }}>Urgent:</span> 
              27 parivaron ko iss hafte ration aur zarurat ki cheezo ki sakht zarurat hai.
            </p>
          </div>
          <Button variant="white" style={{ padding: '0.4rem 1.5rem', fontSize: '0.85rem' }}>Help Now</Button>
        </div>
      </section>

      {/* 3. Donation Options Section */}
      <section className="section bg-beige">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Aap kitni madad karna chahte hain?</h2>
            <div style={{ width: '60px', height: '4px', background: '#c0392b', margin: '1rem auto' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { amount: '100', label: 'Meal', desc: 'Ek bhookhe pet ko khana milega', color: 'var(--card-peach)', icon: '🍲' },
              { amount: '500', label: 'Ration for 1 Family', desc: 'Ek parivar ka ration pahunchega', color: 'var(--card-yellow)', icon: '📦' },
              { amount: '1000', label: 'Education for 1 Child', desc: 'Ek bachche ki padhai mein madad', color: 'var(--card-green)', icon: '📚' },
              { amount: 'Custom', label: 'Custom Amount', desc: 'Jitna chahen utna donate karein', color: 'var(--card-purple)', icon: '❤️' },
            ].map((item, idx) => (
              <Card key={idx} style={{ 
                background: item.color, 
                border: 'none', 
                textAlign: 'center', 
                padding: '2.5rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>₹{item.amount}</h3>
                <p style={{ fontWeight: 700, color: '#c0392b', marginBottom: '0.5rem' }}>{item.label}</p>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.4 }}>{item.desc}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Button variant="primary" size="lg" style={{ padding: '1rem 3rem', fontSize: '1.1rem', marginBottom: '1rem' }}>
              <ShieldCheck size={20} style={{ marginRight: '8px' }} /> Donate Securely
            </Button>
            <div className="flex justify-center gap-4 items-center" style={{ fontSize: '0.85rem', color: '#666' }}>
              <div className="flex items-center gap-1"><ShieldCheck size={14} /> 100% Secure Donation</div>
              <span>|</span>
              <div className="flex items-center gap-1"><FileText size={14} /> Tax Benefit Available (80G)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Impact Story (Rani) */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <Image src="/images/rani.png" alt="Rani's Story" width={600} height={450} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div style={{ 
                position: 'absolute', 
                bottom: '30px', 
                right: '-20px', 
                background: 'white', 
                padding: '10px', 
                borderRadius: '10px', 
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                transform: 'rotate(5deg)',
                width: '120px'
              }}>
                <div style={{ position: 'relative', height: '120px', background: '#eee', borderRadius: '5px', marginBottom: '5px' }}>
                  <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" alt="Before" fill style={{ objectFit: 'cover', borderRadius: '5px' }} />
                </div>
                <p style={{ fontSize: '0.7rem', fontWeight: 800, textAlign: 'center' }}>Pehle</p>
              </div>
            </div>
            
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>
                Yeh sirf numbers nahi,<br />
                asal zindagi ki <span style={{ color: '#c0392b' }}>kahani</span> hai.
              </h2>
              <div style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  Rani, 9 saal ki hai. Uske papa lockdown ke baad se kaam nahi kar paaye. Kai din aise the jab ghar me khana nahi tha. Jan Swabhiman ki madad se Rani ko padhai aur khana dono milne laga.
                </p>
                <p style={{ fontWeight: 700, color: '#c0392b' }}>
                  Aaj Rani school ja rahi hai aur apne sapne poore karne ki umeed rakhti hai.
                </p>
              </div>
              <Button variant="outline" icon={Heart} style={{ color: '#c0392b', borderColor: '#c0392b' }}>
                Help Another Child
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats Section */}
      <section className="section bg-beige" style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Aapki madad ka asar</h2>
            <div style={{ width: '50px', height: '3px', background: '#c0392b', margin: '1rem auto' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { count: '1200+', label: 'Lives Helped', icon: <Users size={40} />, color: '#fff5f0' },
              { count: '5000+', label: 'Meals Provided', icon: <HandHeart size={40} />, color: '#f0fff4' },
              { count: '300+', label: 'Children Educated', icon: <GraduationCap size={40} />, color: '#f5f0ff' },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-6" style={{ padding: '2rem', background: 'white', borderRadius: '15px', border: '1px solid #eee' }}>
                <div style={{ background: stat.color, padding: '1.25rem', borderRadius: '12px', color: '#c0392b' }}>
                  {stat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.25rem' }}>{stat.count}</h3>
                  <p style={{ fontSize: '1rem', color: '#666', fontWeight: 600 }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How you can help */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Aap kaise madad kar sakte hain?</h2>
            <div style={{ width: '50px', height: '3px', background: '#c0392b', margin: '1rem auto' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Donate', desc: 'Aapka contribution kisi ki zindagi badal sakta hai.', icon: <Heart fill="#c0392b" color="#c0392b" />, link: 'Donate Now' },
              { title: 'Volunteer', desc: 'Apna waqt dekar kisi ke sapno ko pankh dein.', icon: <Users color="#c0392b" />, link: 'Join Us' },
              { title: 'Share', desc: 'Humare kaam ko share karein aur zyada se zyada logon tak pahunchayein.', icon: <Share2 color="#c0392b" />, link: 'Share Now' },
            ].map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#fff5f0', padding: '1.5rem', borderRadius: '20px' }}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 40 })}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{item.desc}</p>
                <Link href="#" className="flex items-center justify-center gap-1" style={{ color: '#c0392b', fontWeight: 800, fontSize: '0.9rem' }}>
                  {item.link} <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Trust & Certificates */}
      <section className="section bg-beige">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Aapka bharosa, humari zimmedari</h2>
            <div style={{ width: '50px', height: '3px', background: '#c0392b', margin: '1rem auto' }}></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: 'NGO Registration', value: 'UP/2021/0287441' },
              { title: '80G Certificate', value: 'Available' },
              { title: '12A Certificate', value: 'Available' },
              { title: 'PAN Number', value: 'AACTJ1234Q' },
              { title: 'Registered Address', value: '123, Seva Marg, Lucknow' },
            ].map((item, idx) => (
              <Card key={idx} style={{ padding: '1.5rem 1rem', textAlign: 'center', border: '1px solid #eee' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <ShieldCheck size={32} color="#f39c12" />
                </div>
                <h4 style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>{item.value}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>
              Hum har donation ka sahi istemal karte hain aur regular reports share karte hain. 
              <Link href="#" style={{ color: '#c0392b', fontWeight: 700, marginLeft: '0.5rem', textDecoration: 'underline' }}>Transparency Report Dekhein →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Log kya kehte hain</h2>
            <div style={{ width: '50px', height: '3px', background: '#c0392b', margin: '1rem auto' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rahul Sharma', role: 'Donor', text: 'Maine Jan Swabhiman ko donate kiya aur mujhe unke kaam ki regular updates milti hain. Yeh ek trustworthy organization hai.' },
              { name: 'Priya Verma', role: 'Volunteer', text: 'Main yahan volunteer karti hun aur yahan kaam karke bahut sukoon milta hai. Bachchon ki khushi dekhne layak hoti hai.' },
              { name: 'Suresh Yadav', role: 'Beneficiary', text: 'Inhone humare gaon me ration aur education ki bahut madad ki. Dhanyawaad!' },
            ].map((item, idx) => (
              <Card key={idx} style={{ position: 'relative', padding: '2.5rem' }}>
                <Quote size={40} color="#fff5f0" style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 0 }} />
                <p style={{ position: 'relative', zIndex: 1, color: '#555', fontSize: '1rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.6 }}>"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#eee', overflow: 'hidden' }}>
                    <Image src={`https://i.pravatar.cc/100?u=user${idx}`} alt={item.name} width={50} height={50} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#999' }}>{item.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="section" style={{ padding: '0' }}>
        <div className="container" style={{ marginBottom: '-80px', position: 'relative', zIndex: 10 }}>
          <div style={{ 
            background: 'linear-gradient(to right, #2d3436, #000)', 
            borderRadius: '20px', 
            padding: '4rem', 
            color: 'white',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: 0, right: 0, bottom: 0, width: '40%', 
              backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.4
            }} />
            
            <div style={{ maxWidth: '600px', position: 'relative' }}>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Aap decide kar sakte hain,<br />
                aaj koi bhooka soyega ya nahi.
              </h2>
              <p style={{ fontSize: '1.4rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                Aaj hi madad karein.
              </p>
              <Button variant="primary" size="lg" icon={Heart} style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
                Donate Now
              </Button>
              <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#aaa' }}>Har chhoti madad, bada badlav!</p>
            </div>
          </div>
        </div>
        <div style={{ height: '150px', background: 'white' }}></div>
      </section>
    </>
  );
}

import React from "react";
import Link from "next/link";

