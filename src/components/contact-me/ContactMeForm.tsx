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
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Enter a valid email address',
    },
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

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

const Field = ({id, label, error, children}: FieldProps) => (
  <div className={'flex flex-col gap-1'}>
    <label
      htmlFor={id}
      className={'text-xs font-semibold uppercase tracking-widest text-gray-500'}>
      {label}
    </label>
    {children}
    {error && <p className={'text-xs text-red-500'}>{error}</p>}
  </div>
);

const inputClass = (hasError: boolean) =>
  cn(
    'w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none',
    'placeholder:text-gray-400 transition duration-150',
    'focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10',
    hasError ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10' : 'border-gray-200',
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

  return (
    <div className={'w-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm xl:w-1/2'}>
      {status === 'sent' ? (
        <div className={'flex flex-col items-center gap-4 py-8 text-center'}>
          <div className={'flex size-14 items-center justify-center rounded-full bg-green-500/15'}>
            <svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={2.5} width={28} height={28} className={'text-green-400'}>
              <path strokeLinecap={'round'} strokeLinejoin={'round'} d={'M5 13l4 4L19 7'} />
            </svg>
          </div>
          <p className={'text-lg font-semibold text-white'}>{'Message sent!'}</p>
          <p className={'text-sm text-gray-400'}>{"I'll get back to you as soon as possible."}</p>
          <button
            onClick={() => setStatus('idle')}
            className={'mt-2 text-sm font-medium text-gray-400 underline underline-offset-4 hover:text-white'}>
            {'Send another'}
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={'flex flex-col gap-5'}>
          <Controller
            name={'name'}
            control={control}
            rules={formRules.name}
            render={({field, fieldState}) => (
              <Field id={'name'} label={'Name'} error={fieldState.error?.message}>
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
              <Field id={'email'} label={'Email'} error={fieldState.error?.message}>
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
          <Controller
            name={'message'}
            control={control}
            rules={formRules.message}
            render={({field, fieldState}) => (
              <Field id={'message'} label={'Message'} error={fieldState.error?.message}>
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
          {status === 'error' && (
            <p className={'text-center text-sm text-red-400'}>
              {'Something went wrong. Please try again.'}
            </p>
          )}
          <button
            type={'submit'}
            disabled={status === 'sending'}
            className={cn(
              'mt-1 flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold',
              'bg-white text-gray-900 shadow-sm transition duration-150',
              'hover:bg-gray-100 active:scale-[0.98]',
              'disabled:cursor-not-allowed disabled:opacity-50',
            )}>
            {status === 'sending' ? (
              <>
                <svg className={'size-4 animate-spin'} viewBox={'0 0 24 24'} fill={'none'}>
                  <circle className={'opacity-25'} cx={12} cy={12} r={10} stroke={'currentColor'} strokeWidth={4} />
                  <path className={'opacity-75'} fill={'currentColor'} d={'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'} />
                </svg>
                {'Sending…'}
              </>
            ) : (
              <>
                {'Send message'}
                <svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={2} width={16} height={16}>
                  <path strokeLinecap={'round'} strokeLinejoin={'round'} d={'M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z'} />
                </svg>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default memo(ContactMeForm);
