'use client';

import { Form } from '@heroui/form';
import { Input, Textarea } from '@heroui/input';
import { Button } from '@heroui/button';
import { useState, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { RadioGroup, Radio } from "@heroui/radio";
import { cn } from '@/lib/utils';

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function ContactForm({ className, onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    if (!captchaToken) {
      setError('Please complete the captcha');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      
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
      
      // Reset form
      e.currentTarget.reset();
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
      
      // Show success message
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
    <Form 
      className={cn("w-full", className)}
      onSubmit={handleSubmit}
      validationBehavior="native"
    >
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
            label: "text-neutral-700 dark:text-neutral-300",
          }}
          label="Reason for Contact"
          name="contactReason"
          orientation="horizontal"
          color='default'
          defaultValue="project"
        >
          <Radio
            value="project"
            classNames={{
              base: "inline-flex rounded-xl m-0 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border-neutral-200 dark:border-neutral-800 data-[selected=true]:border-primary",
              label: "text-neutral-700 dark:text-neutral-300",
            }}
          >
            Project Inquiry
          </Radio>
          <Radio
            value="question"
            classNames={{
              base: "inline-flex rounded-xl m-0 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border-neutral-200 dark:border-neutral-800 data-[selected=true]:border-primary",
              label: "text-neutral-700 dark:text-neutral-300",
            }}
          >
            General Question
          </Radio>
        </RadioGroup>

        <Input
          isRequired
          classNames={{
            label: "text-neutral-700 dark:text-neutral-300",
            input: "bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800",
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
            label: "text-neutral-700 dark:text-neutral-300",
            input: "bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800",
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
            label: "text-neutral-700 dark:text-neutral-300",
            input: "bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800",
          }}
          label="Message"
          labelPlacement="outside"
          name="message"
          placeholder="Your message..."
          radius="md"
          variant="bordered"
        />

        {error && (
          <div className="text-red-500 text-sm">
            {error}
          </div>
        )}

        <div className="w-full">
          <HCaptcha
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
            onVerify={handleVerify}
            onExpire={() => setCaptchaToken(null)}
          />
        </div>

        <Button
          isLoading={isSubmitting}
          radius="md"
          size="md"
          type="submit"
          isDisabled={!captchaToken || isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </Form>
  );
} 