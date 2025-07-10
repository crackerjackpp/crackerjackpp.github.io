import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const ArrowRightIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const CheckCircleIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);


const ServiceSection: React.FC<{ title: string; children: React.ReactNode; linkTo: string }> = ({ title, children, linkTo }) => (
  <div className="py-16 border-b border-slate-200 last:border-b-0">
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-1">
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <Button as={Link} to={linkTo} variant="outline" className="mt-4 text-sm">
          Learn More <ArrowRightIcon className="w-4 h-4 ml-2"/>
        </Button>
      </div>
      <div className="md:col-span-2">
        {children}
      </div>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
    const valueAddedServices = [
        'Employer branding', 'Executive Search', 'Campus recruitment', 'Talent mapping', 
        'M&A (HR)', 'Outplacement', 'Surveys (Culture, engagement, compensation)', 
        'Talent assessments', 'Training'
    ];
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-100 py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            We deliver customized solutions by combining deep expertise with a flexible approach, ensuring your talent and HR strategies drive business success.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-slate-200">
        <ServiceSection title="Fractional Hires" linkTo="/services/fractional-talent">
          <p className="text-slate-600 text-lg mb-6">Gain access to senior-level expertise without the cost of a full-time executive. Our fractional model provides the strategic leadership you need, when you need it.</p>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-3"/>Fractional CHRO, HR Director, Head of Talent</li>
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-3"/>HR Business Partners</li>
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-3"/>Talent Acquisition and Management Specialists</li>
          </ul>
        </ServiceSection>
        
        <ServiceSection title="HR Advisory" linkTo="/services/hr-advisory">
          <p className="text-slate-600 text-lg mb-6">Strengthen your HR foundation with our expert advisory services. We help you design and implement practices that attract, retain, and develop top talent.</p>
           <ul className="space-y-3 text-slate-600">
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-3"/>HR framework and policies design</li>
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-3"/>Performance management systems</li>
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-3"/>Compensation and benefits analysis</li>
             <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-3"/>Employee relations and compliance</li>
          </ul>
        </ServiceSection>

        <ServiceSection title="Leadership & Team Coaching" linkTo="/services/coaching">
          <p className="text-slate-600 text-lg mb-6">Invest in your most valuable asset—your people. Our coaching programs are designed to enhance leadership capabilities, improve team dynamics, and foster a culture of high performance.</p>
           <ul className="space-y-3 text-slate-600">
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-3"/>Executive and leadership coaching</li>
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-3"/>Team effectiveness workshops</li>
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-3"/>Talent development and succession planning</li>
          </ul>
        </ServiceSection>
      </section>
      
      {/* Value-Added Services */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-primary">Integrated Value-Added Services</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                    Through our trusted network of partners, we offer a range of specialized services to provide a holistic solution for your business.
                </p>
            </div>
            <div className="mt-12">
                 <div className="flex flex-wrap justify-center gap-4">
                    {valueAddedServices.map(service => (
                        <span key={service} className="bg-white text-secondary py-2 px-4 rounded-full shadow-sm text-sm font-medium">
                            {service}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
