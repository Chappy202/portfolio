'use client';

import { Form } from '@heroui/form';
import { Input, Textarea } from '@heroui/input';
import { Button } from '@heroui/button';
import { Alert } from '@heroui/alert';
import { useState, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { RadioGroup, Radio } from '@heroui/radio';

import { cn } from '@/lib/utils';

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function ContactForm({ className, onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isCaptchaLoading, setIsCaptchaLoading] = useState(true);
  const captchaRef = useRef<HCaptcha>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setError(null);
    setShowSuccess(false);

    if (!captchaToken) {
      setError('Please complete the captcha');

      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Add email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(data.email as string)) {
        setError('Please enter a valid email address');
        setIsSubmitting(false);

        return;
      }

      // Add honeypot check
      if (data._gotcha) {
        console.log('Bot detected');

        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          captchaToken,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.error || 'Failed to send message');
      }

      // Reset form and show success
      form.reset();
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
      setShowSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);

      onSuccess?.();
    } catch (error) {
      console.error('Failed to send message:', error);
      setError(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerify = (token: string) => {
    setCaptchaToken(token);
  };

  return (
    <Form className={cn('w-full', className)} validationBehavior="native" onSubmit={handleSubmit}>
      {showSuccess && (
        <Alert
          className="mb-6"
          color="success"
          description="Your message has been sent successfully. We'll get back to you soon!"
          title="Message Sent"
          variant="faded"
          onClose={() => setShowSuccess(false)}
        />
      )}

      {/* Honeypot field */}
      <input
        className="absolute -left-[9999px] -top-[9999px]"
        name="_gotcha"
        tabIndex={-1}
        type="text"
      />

      <div className="flex w-full flex-col gap-6">
        <RadioGroup
          isRequired
          classNames={{
            label: 'text-neutral-700 dark:text-neutral-300',
          }}
          color="default"
          defaultValue="project"
          label="Reason for Contact"
          name="contactReason"
          orientation="horizontal"
        >
          <Radio
            classNames={{
              base: 'inline-flex rounded-xl m-0 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border-neutral-200 dark:border-neutral-800 data-[selected=true]:border-primary',
              label: 'text-neutral-700 dark:text-neutral-300',
            }}
            value="project"
          >
            Project Inquiry
          </Radio>
          <Radio
            classNames={{
              base: 'inline-flex rounded-xl m-0 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border-neutral-200 dark:border-neutral-800 data-[selected=true]:border-primary',
              label: 'text-neutral-700 dark:text-neutral-300',
            }}
            value="question"
          >
            General Question
          </Radio>
        </RadioGroup>

        <Input
          isRequired
          classNames={{
            label: 'text-neutral-700 dark:text-neutral-300',
            input: 'bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800',
          }}
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Your name"
          radius="md"
          type="text"
          variant="bordered"
        />

        <Input
          isRequired
          classNames={{
            label: 'text-neutral-700 dark:text-neutral-300',
            input: 'bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800',
          }}
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="your.email@example.com"
          radius="md"
          type="email"
          variant="bordered"
        />

        <Textarea
          isRequired
          classNames={{
            label: 'text-neutral-700 dark:text-neutral-300',
            input: 'bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800',
          }}
          label="Message"
          labelPlacement="outside"
          name="message"
          placeholder="Your message..."
          radius="md"
          variant="bordered"
        />

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <div className="w-full">
          {isCaptchaLoading && (
            <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              Loading captcha...
            </div>
          )}
          {/* <HCaptcha
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
            theme="dark"
            onExpire={() => setCaptchaToken(null)}
            onLoad={() => setIsCaptchaLoading(false)}
            onVerify={handleVerify}
          /> */}
        </div>

        <Button
          isDisabled={!captchaToken || isSubmitting}
          isLoading={isSubmitting}
          radius="md"
          size="md"
          type="submit"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </Form>
  );
}
