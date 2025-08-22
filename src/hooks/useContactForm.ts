import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface UseContactFormReturn {
  formData: FormData;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  updateField: (field: keyof FormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: ''
};

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submission attempted with data:', formData);
    
    // Basic validation with trimming
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      console.log('Validation failed:', { name: trimmedName, email: trimmedEmail, message: trimmedMessage });
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS not configured properly. Please set up your environment variables.');
        
        // Fallback to mailto as temporary solution
        const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
        const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Service Interest: ${formData.service || 'General Inquiry'}

Message:
${formData.message}
        `);
        
        const mailtoLink = `mailto:zeyadsattar.me@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        setSubmitStatus('success');
        resetForm();
        return;
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: 'zeyadsattar.me@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        service_interest: formData.service || 'General Inquiry',
        message: formData.message,
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    updateField,
    handleSubmit,
    resetForm
  };
};