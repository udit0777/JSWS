import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Heart, ShieldCheck, Users, TrendingUp, HandHeart, Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 2. Hero Section */}
      <section style={{
        position: 'relative',
        height: '80vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2
        }} />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: -1
        }} />
        
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Your kindness can change a child's entire world.
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Join thousands of donors who are making a real difference in communities across India. Every contribution counts.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Button variant="primary" size="lg" icon={Heart}>Donate Now</Button>
            <Button variant="outline" size="lg" style={{ borderColor: 'white', color: 'white' }}>Learn More</Button>
          </div>
        </div>
      </section>

      {/* 3. Urgency Banner */}
      <section style={{ backgroundColor: '#fff3cd', padding: '1rem 0', color: '#856404', textAlign: 'center', fontWeight: 600 }}>
        <div className="container">
          🚨 Urgent Appeal: Help us provide immediate relief for the recent flood victims. <a href="#donate" style={{ textDecoration: 'underline', marginLeft: '0.5rem' }}>Give Today</a>
        </div>
      </section>

      {/* 4. Donation Options Cards */}
      <section id="donate" className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <h2 className="section-title">Select an Amount to Donate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <Card className="text-center">
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>₹1,000</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Provides nutritious meals for a child for one month.</p>
              <Button variant="outline" style={{ width: '100%' }}>Select</Button>
            </Card>
            <Card className="text-center" style={{ transform: 'scale(1.05)', borderColor: 'var(--primary)', border: '2px solid var(--primary)' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 'bold' }}>Most Popular</div>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>₹2,500</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Covers the cost of education and supplies for a year.</p>
              <Button variant="primary" style={{ width: '100%' }}>Select</Button>
            </Card>
            <Card className="text-center">
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>₹5,000</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Supports community health checkups and basic medicine.</p>
              <Button variant="outline" style={{ width: '100%' }}>Select</Button>
            </Card>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button variant="outline">Enter Custom Amount</Button>
          </div>
        </div>
      </section>

      {/* 5. Story Section */}
      <section id="about" className="section" style={{ backgroundColor: 'white' }}>
        <div className="container grid md:grid-cols-2" style={{ alignItems: 'center' }}>
          <div>
            <Image src="/images/story.jpg" alt="Children smiling" width={600} height={400} style={{ borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)' }} />
          </div>
          <div style={{ padding: '0 2rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>The Story of Hope</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Since 2010, we have been on a mission to bring light into the darkest corners of rural India. What started as a small initiative by a group of volunteers has now grown into a nationwide movement.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              We believe that every individual, regardless of their background, deserves access to basic healthcare, quality education, and a chance at a better life. When you donate, you're not just giving money; you're offering hope.
            </p>
            <Button variant="primary">Read Full Story</Button>
          </div>
        </div>
      </section>

      {/* 6. Impact Metrics */}
      <section id="impact" className="section" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Our Impact So Far</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 text-center">
            <div>
              <Users size={48} style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>50K+</h3>
              <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>Lives Impacted</p>
            </div>
            <div>
              <Globe size={48} style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>120</h3>
              <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>Villages Reached</p>
            </div>
            <div>
              <HandHeart size={48} style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>10K+</h3>
              <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>Active Volunteers</p>
            </div>
            <div>
              <TrendingUp size={48} style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>₹5Cr</h3>
              <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>Funds Raised</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How You Can Help Section */}
      <section id="help" className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <h2 className="section-title">Other Ways You Can Help</h2>
          <div className="grid md:grid-cols-2 text-center">
            <Card>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Become a Volunteer</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Join our on-ground team and help us execute our projects.</p>
              <Button variant="outline">Sign Up Now</Button>
            </Card>
            <Card>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Corporate Partnership</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Fulfill your CSR goals by partnering with our ongoing initiatives.</p>
              <Button variant="outline">Partner With Us</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Trust Badges Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)', padding: '3rem 0' }}>
        <div className="container text-center">
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>100% Secure & Transparent</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#555' }}><ShieldCheck size={24} /> <span>80G Tax Exempt</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#555' }}><ShieldCheck size={24} /> <span>Razorpay Secured</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#555' }}><ShieldCheck size={24} /> <span>Annual Audits</span></div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          <div className="grid md:grid-cols-2">
            <Card>
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>
                "Seeing the smile on the children's faces when they received their new books was the most rewarding experience of my life. Highly transparent NGO."
              </p>
              <div style={{ fontWeight: 600 }}>— Rahul S., Donor</div>
            </Card>
            <Card>
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>
                "We partnered with them for our annual CSR initiative and the impact report they provided was thorough and inspiring."
              </p>
              <div style={{ fontWeight: 600 }}>— Priya K., CSR Manager</div>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. Final CTA banner */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--background) 0%, #fff 100%)', 
        textAlign: 'center',
        borderTop: '1px solid #eee'
      }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to make a difference?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            A small contribution from you can turn into a big opportunity for someone in need.
          </p>
          <Button variant="primary" size="lg" icon={Heart}>Donate Now</Button>
        </div>
      </section>
    </>
  );
}
