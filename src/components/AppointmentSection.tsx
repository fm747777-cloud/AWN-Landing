import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  Mail,
  Send,
} from 'lucide-react';
import { Language, SiteContent } from '../data/content';

interface AppointmentSectionProps {
  lang: Language;
  content: SiteContent;
  preselectedSubject: string;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  content,
  preselectedSubject,
}) => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });
  const [isReadyToSend, setIsReadyToSend] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedSubject) {
      setValues((prev) => ({ ...prev, subject: preselectedSubject }));
      setErrors((prev) => ({ ...prev, subject: undefined }));
      setIsReadyToSend(false);
    }
  }, [preselectedSubject]);

  const validateField = (field: keyof FormValues, val: string): string | undefined => {
    const trimmed = val.trim();
    const v = content.appointmentSection.validation;

    switch (field) {
      case 'name':
        if (!trimmed) return v.nameRequired;
        return undefined;
      case 'email':
        if (!trimmed) return v.emailRequired;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return v.emailInvalid;
        return undefined;
      case 'phone': {
        if (!trimmed) return v.phoneRequired;
        const digitsOnly = trimmed.replace(/[\s\-()]/g, '');
        if (!/^(\+?966|0)?5\d{8}$/.test(digitsOnly) && !/^\+?\d{8,15}$/.test(digitsOnly)) {
          return v.phoneInvalid;
        }
        return undefined;
      }
      case 'subject':
        if (!trimmed) return v.subjectRequired;
        return undefined;
      case 'message':
        if (!trimmed) return v.messageRequired;
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const nextErrors: FormErrors = {
      name: validateField('name', values.name),
      email: validateField('email', values.email),
      phone: validateField('phone', values.phone),
      subject: validateField('subject', values.subject),
      message: validateField('message', values.message),
    };
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });
    return !Object.values(nextErrors).some(Boolean);
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, values[field]),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAll()) {
      setIsReadyToSend(true);
    }
  };

  const formattedBody = [
    `Name / الاسم: ${values.name.trim()}`,
    `Email / البريد الإلكتروني: ${values.email.trim()}`,
    `Phone / رقم الجوال: ${values.phone.trim()}`,
    `Subject / الموضوع: ${values.subject.trim()}`,
    '',
    `Message / الرسالة:`,
    values.message.trim(),
  ].join('\n');

  const mailtoHref = `mailto:care@awn.sa?subject=${encodeURIComponent(
    `AWN Appointment - ${values.subject.trim()}`
  )}&body=${encodeURIComponent(formattedBody)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const f = content.appointmentSection.fields;

  return (
    <section
      id="appointment"
      className="bg-[#F8FAFA] py-16 lg:py-24 border-b border-[#E9E5DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Balanced Section Heading */}
          <div className="text-center mb-10 lg:mb-12">
            <p className="text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {content.appointmentSection.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A] leading-tight mb-4">
              {content.appointmentSection.title}
            </h2>
            <p className="text-base text-[#24545A]/80 leading-relaxed max-w-2xl mx-auto">
              {content.appointmentSection.subtitle}
            </p>
          </div>

          {/* Calm, Light Appointment Form Surface */}
          <div>
            <div className="bg-white border border-[#E9E5DC] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-center">
              {!isReadyToSend ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="appointment-name"
                        className="block text-sm font-semibold text-[#24545A] mb-2"
                      >
                        {f.nameLabel}
                      </label>
                      <input
                        id="appointment-name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder={f.namePlaceholder}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        className={`w-full px-4 py-3 text-sm text-[#24545A] bg-[#F8FAFA] border rounded-lg transition-colors focus:outline-none focus:bg-white focus:ring-2 ${
                          errors.name
                            ? 'border-red-600 focus:ring-red-600/20'
                            : 'border-[#E9E5DC] focus:border-[#087F87] focus:ring-[#087F87]/20'
                        }`}
                      />
                      {errors.name && (
                        <p
                          id="error-name"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="appointment-email"
                        className="block text-sm font-semibold text-[#24545A] mb-2"
                      >
                        {f.emailLabel}
                      </label>
                      <input
                        id="appointment-email"
                        name="email"
                        type="email"
                        dir="ltr"
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder={f.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        className={`w-full px-4 py-3 text-sm text-[#24545A] bg-[#F8FAFA] border rounded-lg transition-colors focus:outline-none focus:bg-white focus:ring-2 ${
                          errors.email
                            ? 'border-red-600 focus:ring-red-600/20'
                            : 'border-[#E9E5DC] focus:border-[#087F87] focus:ring-[#087F87]/20'
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="error-email"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <div>
                      <label
                        htmlFor="appointment-phone"
                        className="block text-sm font-semibold text-[#24545A] mb-2"
                      >
                        {f.phoneLabel}
                      </label>
                      <input
                        id="appointment-phone"
                        name="phone"
                        type="tel"
                        dir="ltr"
                        value={values.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder={f.phonePlaceholder}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                        className={`w-full px-4 py-3 text-sm text-[#24545A] bg-[#F8FAFA] border rounded-lg transition-colors focus:outline-none focus:bg-white focus:ring-2 ${
                          errors.phone
                            ? 'border-red-600 focus:ring-red-600/20'
                            : 'border-[#E9E5DC] focus:border-[#087F87] focus:ring-[#087F87]/20'
                        }`}
                      />
                      {errors.phone && (
                        <p
                          id="error-phone"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="appointment-subject"
                        className="block text-sm font-semibold text-[#24545A] mb-2"
                      >
                        {f.subjectLabel}
                      </label>
                      <select
                        id="appointment-subject"
                        name="subject"
                        value={values.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        onBlur={() => handleBlur('subject')}
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={errors.subject ? 'error-subject' : undefined}
                        className={`w-full px-4 py-3 text-sm text-[#24545A] bg-[#F8FAFA] border rounded-lg transition-colors focus:outline-none focus:bg-white focus:ring-2 ${
                          errors.subject
                            ? 'border-red-600 focus:ring-red-600/20'
                            : 'border-[#E9E5DC] focus:border-[#087F87] focus:ring-[#087F87]/20'
                        }`}
                      >
                        <option value="">{f.subjectPlaceholder}</option>
                        {f.subjectOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p
                          id="error-subject"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="appointment-message"
                      className="block text-sm font-semibold text-[#24545A] mb-2"
                    >
                      {f.messageLabel}
                    </label>
                    <textarea
                      id="appointment-message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      placeholder={f.messagePlaceholder}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      className={`w-full px-4 py-3 text-sm text-[#24545A] bg-[#F8FAFA] border rounded-lg transition-colors focus:outline-none focus:bg-white focus:ring-2 ${
                        errors.message
                          ? 'border-red-600 focus:ring-red-600/20'
                          : 'border-[#E9E5DC] focus:border-[#087F87] focus:ring-[#087F87]/20'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="error-message"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>{content.appointmentSection.submitButton}</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Honest Client-Side Validated Handoff State */
                <div className="space-y-6" role="region" aria-live="polite">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#24545A]">
                        {content.appointmentSection.readyState.heading}
                      </h3>
                      <p className="text-sm text-[#24545A]/80 mt-1 leading-relaxed">
                        {content.appointmentSection.readyState.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F8FAFA] border border-[#E9E5DC] rounded-lg p-4 text-xs sm:text-sm font-mono text-[#24545A] whitespace-pre-wrap leading-relaxed">
                    {formattedBody}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>{content.appointmentSection.readyState.sendEmailButton}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#24545A] bg-[#E8F2F1] hover:bg-[#E9E5DC] rounded-lg transition-colors cursor-pointer"
                    >
                      <Copy className="w-4 h-4 text-[#087F87]" aria-hidden="true" />
                      <span>
                        {copied
                          ? content.appointmentSection.readyState.copiedLabel
                          : content.appointmentSection.readyState.copyButton}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsReadyToSend(false)}
                      className="px-4 py-3 text-sm font-medium text-[#24545A]/80 hover:text-[#24545A] transition-colors cursor-pointer"
                    >
                      {content.appointmentSection.readyState.editButton}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
