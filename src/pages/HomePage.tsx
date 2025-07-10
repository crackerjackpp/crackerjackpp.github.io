import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { DISTINCTIONS } from '../constants';
import Card from '../components/Card';

const CheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32 mb-24">
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0">
            <img src="https://picsum.photos/1600/800?random=1" alt="Abstract nature background" className="w-full h-full object-cover opacity-20"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Your Partner for growth</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
            We are dedicated People Partners, providing turnkey solutions for fractional talent, HR advisory, and development.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button as={Link} to="/services" variant="primary" className="w-full sm:w-auto">Explore Our Services</Button>
            <Button as={Link} to="/contact" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">Book a Consultation</Button>
          </div>
        </div>
      </section>
      
      {/* Services Overview Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Customized Talent Solutions for Your Business</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">We offer a suite of services designed to meet you where you are and help you grow.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center">
            <h3 className="text-xl font-bold text-primary">Fractional Talent</h3>
            <p className="mt-4 text-slate-600">Access top-tier experts on a part-time basis, bringing specialized skills to your team exactly when you need them.</p>
          </Card>
          <Card className="p-8 text-center">
            <h3 className="text-xl font-bold text-primary">HR Advisory</h3>
            <p className="mt-4 text-slate-600">Optimize your people practices, systems, and processes with strategic guidance from seasoned HR professionals.</p>
          </Card>
          <Card className="p-8 text-center">
            <h3 className="text-xl font-bold text-primary">Leadership & Team Coaching</h3>
            <p className="mt-4 text-slate-600">Unlock the full potential of your leaders and teams through targeted coaching and development programs.</p>
          </Card>
        </div>
        <div className="mt-12 text-center">
            <Button as={Link} to="/services" variant="secondary">Learn More About Our Services</Button>
        </div>
      </section>

      {/* Social Proof / Results Section */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Real-World Results</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">We deliver measurable impact for our clients.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-secondary">20%</p>
                <p className="mt-2 text-slate-600">Increase in employee retention</p>
            </div>
             <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-secondary">40%</p>
                <p className="mt-2 text-slate-600">Savings on HR leadership costs</p>
            </div>
             <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-secondary">2x</p>
                <p className="mt-2 text-slate-600">Revenue growth within a year for a key client</p>
            </div>
          </div>
           <div className="mt-12 text-center">
            <Button as={Link} to="/case-studies" variant="secondary">See Our Case Studies</Button>
        </div>
        </div>
      </section>

      {/* The CrackerJack Distinction Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <img src="https://picsum.photos/600/500?random=2" alt="Business meeting" className="rounded-lg shadow-lg"/>
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The CrackerJack Distinction</h2>
                <p className="mt-4 text-lg text-slate-600">What makes us different is our commitment to your success.</p>
                <ul className="mt-8 space-y-4">
                    {DISTINCTIONS.map((distinction, index) => (
                        <li key={index} className="flex items-start">
                           <CheckIcon className="w-6 h-6 text-secondary flex-shrink-0 mr-3 mt-1"/>
                            <span className="text-slate-600 text-lg">{distinction}</span>
                        </li>
                    ))}
                </ul>
                 <div className="mt-10">
                    <Button as={Link} to="/about" variant="secondary">Learn More About Us</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Let's explore greenfields together.</h2>
            <p className="mt-4 text-lg text-indigo-200">Contact us for a no-obligations discussion about your business needs.</p>
            <div className="mt-8">
                <Button as={Link} to="/contact" variant="primary" className="bg-white text-secondary hover:bg-slate-200">Get In Touch</Button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
