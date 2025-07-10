import React, { useState } from 'react';
import Button from '../components/Button';
import { ContactFormData } from '../types';

const ContactUsPage: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In a real application, you would handle form submission here.
        // For this static site, we'll just log the data.
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
    }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Let's Start a Conversation</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                We're here to help you achieve your business goals. Reach out to us to learn more about how we can partner together.
            </p>
        </div>

        <div className="mt-16 grid md:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="input-field"/>
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company</label>
                            <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="input-field"/>
                        </div>
                    </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="input-field"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="input-field"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700">How can we help?</label>
                        <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="input-field"></textarea>
                    </div>
                    <div>
                        <Button type="submit" variant="primary" loading={isSubmitting} className="w-full sm:w-auto">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </div>
                </form>
            </div>
            {/* Contact Info */}
            <div className="md:col-span-2">
                <div className="bg-slate-50 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-primary">Direct Contact</h3>
                    <div className="mt-4 space-y-4 text-slate-600">
                        <p>
                            <strong className="block text-slate-800">Alex Png, CEO</strong>
                            <a href="mailto:alex.png@crackerjack.partners" className="text-secondary hover:underline">alex.png@crackerjack.partners</a><br/>
                             <a href="tel:+6587588048" className="text-secondary hover:underline">+65 8758 8048</a>
                        </p>
                        <p>
                           <strong className="block text-slate-800">LinkedIn</strong>
                           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">View our company profile</a>
                        </p>
                    </div>
                    <hr className="my-8"/>
                    <h3 className="text-xl font-bold text-primary">Flexible Ways to Partner With Us</h3>
                    <div className="mt-4 space-y-3 text-slate-600">
                        <p><strong>Retained:</strong> Ongoing partnership for continuous strategic support.</p>
                        <p><strong>Project:</strong> Defined scope and timeline for specific initiatives.</p>
                        <p><strong>Contingency:</strong> Success-based model for specific recruitment needs.</p>
                        <p><strong>Custom:</strong> A tailored model designed to fit your unique requirements.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
