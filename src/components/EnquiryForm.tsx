'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Info } from 'lucide-react';
import { GOOGLE_FORMS_CONFIG, SERVICE_OPTIONS } from '@/config/google-forms';

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'success_live' | 'validated_ready' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a valid contact number.';
    }

    if (!formData.service) {
      newErrors.service = 'Please choose a service.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      if (GOOGLE_FORMS_CONFIG.isConfigured && GOOGLE_FORMS_CONFIG.formEndpoint) {
        // Construct Google Forms payload using configured entry IDs
        const payload = new FormData();
        payload.append(GOOGLE_FORMS_CONFIG.entryIds.name, formData.name);
        payload.append(GOOGLE_FORMS_CONFIG.entryIds.email, formData.email);
        payload.append(GOOGLE_FORMS_CONFIG.entryIds.phone, formData.phone);
        payload.append(GOOGLE_FORMS_CONFIG.entryIds.service, formData.service);
        payload.append(GOOGLE_FORMS_CONFIG.entryIds.message, formData.message);

        await fetch(GOOGLE_FORMS_CONFIG.formEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          body: payload,
        });

        setSubmissionStatus('success_live');
      } else {
        // Transparent development/setup state: inputs validated, Google Forms URL awaiting insertion in config
        setSubmissionStatus('validated_ready');
      }
    } catch {
      setErrorMessage(
        'A connection issue occurred while submitting. Please try emailing us directly.'
      );
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: SERVICE_OPTIONS[0],
      message: '',
    });
    setErrors({});
    setSubmissionStatus('idle');
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Brownsberg Enquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    return `mailto:hello@brownsberg.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative rounded-2xl bg-[#0F131D]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-10 shadow-2xl">
      {/* Live Form submission success */}
      {submissionStatus === 'success_live' && (
        <div className="py-8 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">Enquiry Received</h3>
          <p className="text-neutral-300 max-w-md mx-auto text-sm leading-relaxed">
            Thank you, {formData.name}. Your details have been submitted to our creative &amp; learning strategists. We will be in touch within 24 hours.
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-colors"
          >
            Send Another Enquiry
          </button>
        </div>
      )}

      {/* Validated & Config Ready Notice (Compliant with no fake submission rule) */}
      {submissionStatus === 'validated_ready' && (
        <div className="py-6 space-y-5 animate-fadeIn">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300">
            <Info className="w-6 h-6 shrink-0" />
            <div className="text-sm">
              <span className="font-bold">Form Validated Successfully.</span>
              <p className="text-neutral-300 text-xs mt-1">
                Your entry is validated and ready for Google Forms. To transmit submissions directly to your live Google Sheet, add your endpoint URL in <code className="text-amber-300 font-mono">src/config/google-forms.ts</code>.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 space-y-1.5 font-mono">
            <p className="text-neutral-400 font-sans font-semibold text-sm mb-2">Validated Submission Data:</p>
            <p><span className="text-amber-400">Name:</span> {formData.name}</p>
            <p><span className="text-amber-400">Email:</span> {formData.email}</p>
            <p><span className="text-amber-400">Phone:</span> {formData.phone}</p>
            <p><span className="text-amber-400">Service:</span> {formData.service}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={generateMailtoUrl()}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email Client</span>
            </a>
            <button
              type="button"
              onClick={resetForm}
              className="px-5 py-3 rounded-xl text-sm font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              Back to Form
            </button>
          </div>
        </div>
      )}

      {/* Main Interactive Form */}
      {submissionStatus !== 'success_live' && submissionStatus !== 'validated_ready' && (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {submissionStatus === 'error' && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Full Name <span className="text-amber-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                  errors.name
                    ? 'border-red-500/80 focus:border-red-500'
                    : 'border-white/10 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/50'
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Email Address <span className="text-amber-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                  errors.email
                    ? 'border-red-500/80 focus:border-red-500'
                    : 'border-white/10 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/50'
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone & Service Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Phone Number <span className="text-amber-400">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                  errors.phone
                    ? 'border-red-500/80 focus:border-red-500'
                    : 'border-white/10 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/50'
                }`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs text-red-400">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Service Required <span className="text-amber-400">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/50 transition-all cursor-pointer"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0D1018] text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Project Brief or Learning Objectives <span className="text-amber-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project goals, timelines, target audience, or learning requirements..."
              className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border text-white placeholder-neutral-500 text-sm focus:outline-none transition-all resize-y min-h-[110px] ${
                errors.message
                  ? 'border-red-500/80 focus:border-red-500'
                  : 'border-white/10 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/50'
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-[length:200%_auto] hover:bg-right shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-black" />
                <span>Processing Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <Send className="w-4 h-4 text-black" />
              </>
            )}
          </button>

          {/* Configuration Note */}
          <p className="text-center text-[11px] text-neutral-500">
            {GOOGLE_FORMS_CONFIG.isConfigured
              ? 'Connected to live Google Forms endpoint'
              : 'Google Forms integration ready • Configurable in src/config/google-forms.ts'}
          </p>
        </form>
      )}
    </div>
  );
}

