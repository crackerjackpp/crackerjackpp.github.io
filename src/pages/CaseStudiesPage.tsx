import React from 'react';
import { CASE_STUDIES } from '../constants';
import Card from '../components/Card';
import { CaseStudy } from '../types';

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <Card className="flex flex-col h-full">
    <div className="p-6 flex-grow">
      <p className="text-sm font-semibold text-secondary uppercase tracking-wide">{study.industry}</p>
      <h3 className="mt-2 text-lg font-bold text-primary">Challenge</h3>
      <p className="mt-1 text-slate-600">{study.challenge}</p>
      <h3 className="mt-4 text-lg font-bold text-primary">Solution</h3>
      <p className="mt-1 text-slate-600">{study.solution}</p>
    </div>
    <div className="bg-slate-50 p-6">
      <h3 className="text-lg font-bold text-primary">Result</h3>
      <p className="mt-1 text-slate-700 font-semibold">{study.result}</p>
    </div>
  </Card>
);

const CaseStudiesPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-100 py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Case Studies</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            Real-world examples of companies benefiting from our services.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, index) => (
              <CaseStudyCard key={index} study={study} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;