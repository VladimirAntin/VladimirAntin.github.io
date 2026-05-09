'use client';
import {memo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {cn} from '@/utils/CN';
import {sendMessage} from '@/server/ContactMeApi';

type ContactFormValues = {
  email: string;
  name: string;
  message: string;
};

const formRules = {
  email: {
    required: {value: true, message: 'Email is required'},
    pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address'},
  },
  name: {
    required: {value: true, message: 'Name is required'},
    minLength: {value: 2, message: 'Name is too short'},
  },
  message: {
    required: {value: true, message: 'Message is required'},
    minLength: {value: 10, message: 'Message must be at least 10 characters'},
  },
};

type FieldProps = {id: string; label: string; error?: string; children: React.ReactNode};

const Field = ({id, label, error, children}: FieldProps) => (
  <div className={'flex flex-col gap-1.5'}>
    <label
      htmlFor={id}
      className={'text-[11px] font-semibold tracking-widest text-white/40 uppercase'}>
      {label}
    </label>
    {children}
    {error ? (
      <p className={'flex items-center gap-1 text-xs text-red-400'}>
        <svg
          width={12}
          height={12}
          viewBox={'0 0 24 24'}
          fill={'currentColor'}>
          <path
            d={
              'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
            }
          />
        </svg>
        {error}
      </p>
    ) : null}
  </div>
);

const inputClass = (hasError: boolean) =>
  cn(
    'w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white outline-none transition duration-150',
    'placeholder:text-white/20',
    'focus:bg-white/8 focus:ring-1',
    hasError
      ? 'border-red-500/50 focus:border-red-400 focus:ring-red-400/20'
      : 'border-white/10 focus:border-white/30 focus:ring-white/10',
  );

type Status = 'idle' | 'sending' | 'sent' | 'error';

const ContactMeForm = () => {
  const [status, setStatus] = useState<Status>('idle');
  const {control, handleSubmit, reset} = useForm<ContactFormValues>({
    defaultValues: {email: '', name: '', message: ''},
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('sending');
    try {
      await sendMessage(data);
      setStatus('sent');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div
        className={
          'flex w-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 py-14 backdrop-blur-sm xl:w-2/3'
        }>
        <div
          className={
            'flex size-16 items-center justify-center rounded-full bg-green-500/15 ring-1 ring-green-500/30'
          }>
          <svg
            viewBox={'0 0 24 24'}
            fill={'none'}
            stroke={'currentColor'}
            strokeWidth={2.5}
            width={32}
            height={32}
            className={'text-green-400'}>
            <path
              strokeLinecap={'round'}
              strokeLinejoin={'round'}
              d={'M5 13l4 4L19 7'}
            />
          </svg>
        </div>
        <div className={'text-center'}>
          <p className={'text-xl font-semibold text-white'}>{'Message sent!'}</p>
          <p className={'mt-1 text-sm text-white/40'}>
            {"I'll get back to you as soon as possible."}
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className={
            'mt-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition hover:border-white/20 hover:text-white'
          }>
          {'Send another message'}
        </button>
      </div>
    );
  }

  return (
    <div
      className={
        'w-full rounded-2xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-sm xl:w-2/3'
      }>
      {/* Card heading */}
      <div className={'mb-6 border-b border-white/8 pb-5'}>
        <p className={'text-lg font-semibold text-white'}>{'Send a message'}</p>
        <p className={'mt-0.5 text-sm text-white/40'}>{'I typically respond within 24 hours.'}</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={'flex flex-col gap-5'}>
        {/* Name + Email row on wide screens */}
        <div className={'grid grid-cols-1 gap-5 sm:grid-cols-2'}>
          <Controller
            name={'name'}
            control={control}
            rules={formRules.name}
            render={({field, fieldState}) => (
              <Field
                id={'name'}
                label={'Name'}
                error={fieldState.error?.message}>
                <input
                  {...field}
                  id={'name'}
                  autoComplete={'name'}
                  placeholder={'Your full name'}
                  className={inputClass(!!fieldState.error)}
                />
              </Field>
            )}
          />
          <Controller
            name={'email'}
            control={control}
            rules={formRules.email}
            render={({field, fieldState}) => (
              <Field
                id={'email'}
                label={'Email'}
                error={fieldState.error?.message}>
                <input
                  {...field}
                  id={'email'}
                  type={'email'}
                  autoComplete={'email'}
                  placeholder={'your@email.com'}
                  className={inputClass(!!fieldState.error)}
                />
              </Field>
            )}
          />
        </div>

        <Controller
          name={'message'}
          control={control}
          rules={formRules.message}
          render={({field, fieldState}) => (
            <Field
              id={'message'}
              label={'Message'}
              error={fieldState.error?.message}>
              <textarea
                {...field}
                id={'message'}
                rows={5}
                placeholder={'What can I help you with?'}
                className={cn(inputClass(!!fieldState.error), 'resize-none')}
              />
            </Field>
          )}
        />

        {status === 'error' ? (
          <p
            className={
              'rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-center text-sm text-red-400'
            }>
            {'Something went wrong. Please try again.'}
          </p>
        ) : null}

        <button
          type={'submit'}
          disabled={status === 'sending'}
          className={cn(
            'mt-1 flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5',
            'bg-white text-sm font-semibold text-gray-900 shadow-sm',
            'transition duration-150 hover:bg-gray-50 active:scale-[0.98]',
            'disabled:cursor-not-allowed disabled:opacity-40',
          )}>
          {status === 'sending' ? (
            <>
              <svg
                className={'size-4 animate-spin'}
                viewBox={'0 0 24 24'}
                fill={'none'}>
                <circle
                  className={'opacity-25'}
                  cx={12}
                  cy={12}
                  r={10}
                  stroke={'currentColor'}
                  strokeWidth={4}
                />
                <path
                  className={'opacity-75'}
                  fill={'currentColor'}
                  d={'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'}
                />
              </svg>
              {'Sending…'}
            </>
          ) : (
            <>
              {'Send message'}
              <svg
                viewBox={'0 0 24 24'}
                fill={'none'}
                stroke={'currentColor'}
                strokeWidth={2}
                width={15}
                height={15}>
                <path
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  d={'M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z'}
                />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default memo(ContactMeForm);
