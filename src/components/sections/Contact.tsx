import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, FileText, AlertCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/config/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { contactSchema, type ContactFormValues } from '@/lib/validation';

type SubmitState = 'idle' | 'loading' | 'success' | 'error' | 'missing-key';

export function Contact() {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

    if (!accessKey) {
      setSubmitState('missing-key');
      return;
    }

    setSubmitState('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      const data = (await response.json()) as { success?: boolean };

      if (response.ok && data.success) {
        setSubmitState('success');
        reset();
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <Section
      id="contact"
      tag={t('contact.tag')}
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
      alternate
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12"
      >
        <Card className="p-6 sm:p-8 lg:col-span-7">
          <form
            onSubmit={(event) => {
              void handleSubmit(onSubmit)(event);
            }}
            noValidate
            aria-label={t('contact.formAriaLabel')}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="font-mono text-xs tracking-wider text-text-muted"
              >
                {t('contact.formName')}
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder={t('contact.formNamePh')}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                className="w-full rounded-md border border-border bg-bg-input px-4 py-3 text-sm text-text placeholder:text-text-faint transition-colors duration-150 focus:border-border-brand focus:outline-none"
                {...register('name')}
              />
              {errors.name?.message ? (
                <p id="contact-name-error" role="alert" className="font-mono text-xs text-brand">
                  {t(errors.name.message)}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="font-mono text-xs tracking-wider text-text-muted"
              >
                {t('contact.formEmail')}
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder={t('contact.formEmailPh')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className="w-full rounded-md border border-border bg-bg-input px-4 py-3 text-sm text-text placeholder:text-text-faint transition-colors duration-150 focus:border-border-brand focus:outline-none"
                {...register('email')}
              />
              {errors.email?.message ? (
                <p id="contact-email-error" role="alert" className="font-mono text-xs text-brand">
                  {t(errors.email.message)}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="font-mono text-xs tracking-wider text-text-muted"
              >
                {t('contact.formMsg')}
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder={t('contact.formMsgPh')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                className="w-full resize-y rounded-md border border-border bg-bg-input px-4 py-3 text-sm text-text placeholder:text-text-faint transition-colors duration-150 focus:border-border-brand focus:outline-none"
                {...register('message')}
              />
              {errors.message?.message ? (
                <p id="contact-message-error" role="alert" className="font-mono text-xs text-brand">
                  {t(errors.message.message)}
                </p>
              ) : null}
            </div>

            <Button type="submit" fullWidth disabled={submitState === 'loading'}>
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>
                {submitState === 'loading' ? t('contact.formSending') : t('contact.formSend')}
              </span>
            </Button>

            <div role="status" aria-live="polite" className="min-h-6 text-center font-mono text-xs">
              {submitState === 'success' ? (
                <p className="inline-flex items-center justify-center gap-1.5 text-emerald-500">
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t('contact.formSuccess')}</span>
                </p>
              ) : null}
              {submitState === 'error' ? (
                <p className="inline-flex items-center justify-center gap-1.5 text-brand">
                  <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t('contact.formError')}</span>
                </p>
              ) : null}
              {submitState === 'missing-key' ? (
                <p className="inline-flex items-center justify-center gap-1.5 text-brand">
                  <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t('contact.formMissingKey')}</span>
                </p>
              ) : null}
            </div>
          </form>
        </Card>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <Card className="p-6">
            <h3 className="font-mono text-xs font-bold tracking-widest text-text-muted uppercase">
              {t('contact.whatsappTitle')}
            </h3>
            <p className="mt-1.5 text-sm text-text-muted">{t('contact.whatsappHint')}</p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand bg-brand px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-brand-bright hover:bg-brand-bright hover:shadow-brand"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
              <span>{t('contact.whatsappCta')}</span>
            </a>
          </Card>

          <Card className="p-6">
            <h3 className="font-mono text-xs font-bold tracking-widest text-text-muted uppercase">
              {t('contact.socialTitle')}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-bg text-text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-border-brand hover:bg-brand-dim hover:text-text"
              >
                <FaGithub className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-bg text-text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-border-brand hover:bg-brand-dim hover:text-text"
              >
                <FaLinkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-bg text-text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-border-brand hover:bg-brand-dim hover:text-text"
              >
                <FaInstagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-mono text-xs font-bold tracking-widest text-text-muted uppercase">
              {t('contact.resumeTitle')}
            </h3>
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-bg px-5 py-3 text-sm font-medium text-text transition-all duration-200 hover:border-border-brand hover:text-brand"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span>{t('contact.curriculo')}</span>
            </a>
          </Card>
        </div>
      </motion.div>
    </Section>
  );
}
