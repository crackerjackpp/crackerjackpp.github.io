import React from 'react';
import { OUR_PROMISES } from '../constants';

const CheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Our Story Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary">About Us</h1>
              <p className="mt-6 text-lg text-slate-600">
                CrackerJack People Partners was founded on the principle that strategic, people-centric solutions are the cornerstone of business growth. With decades of combined experience across the Asia Pacific region, our team has partnered with organizations of all sizes—from dynamic startups to multinational corporations—to solve their most pressing talent and HR challenges.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                We are more than consultants; we are partners. We immerse ourselves in your business, treating your challenges and successes as our own. Our petite size is our strength, enabling us to be agile, responsive, and relentlessly focused on delivering timely, high-quality results.
              </p>
            </div>
            <div className="order-1 md:order-2">
                <img src="https://picsum.photos/600/500?random=3" alt="Team collaborating" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-slate-100 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Promise: Dedication, trust, integrity and commitment to excellence</h2>
                <p className="mt-4 text-lg text-slate-600">Values are key to the people business. These are the principles that guide every decision we make and every partnership we form.</p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {OUR_PROMISES.map((promise) => (
                    <div key={promise.title} className="text-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white mx-auto">
                            <CheckIcon className="w-6 h-6"/>
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-primary">{promise.title}</h3>
                        <p className="mt-2 text-base text-slate-600">{promise.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Our Leadership</h2>
                <p className="mt-4 text-lg text-slate-600">We are a team of seasoned professionals passionate about helping businesses succeed through people.</p>
            </div>
            <div className="mt-12 flex justify-center">
                <div className="text-center">
                    <img className="mx-auto h-40 w-40 rounded-full" src="https://picsum.photos/200/200?random=4" alt="Alex Png" />
                    <h3 className="mt-6 text-xl font-semibold text-primary">Alex Png</h3>
                    <p className="text-base font-semibold text-secondary">CEO & Founder</p>
                    <p className="mt-2 max-w-xs mx-auto text-slate-600">With over 20 years of experience in HR and talent management across APAC, Alex founded CrackerJack to provide businesses with agile and impactful people solutions.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;