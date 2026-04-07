'use client';
import {Controller, useForm} from 'react-hook-form';
import {cn} from '@/utils/CN.js';
import SendIcon from '@/icons/SendIcon.jsx';
import {Fragment, memo} from 'react';
import {closeSnackbar, enqueueSnackbar, SnackbarProvider} from 'notistack';
import {sendMessage} from '@/server/ContactMeApi.js';

const formRules = {
  email: {
    required: {value: true, message: 'email is required'},
    minLength: {value: 3, message: 'email is required'},
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email',
    },
  },
  name: {
    required: {value: true, message: 'Name is required'},
    minLength: {value: 3, message: 'Name is required'},
  },
  message: {
    required: {value: true, message: 'Name is required'},
    minLength: {value: 10, message: 'Message is required'},
  },
};

const ContactMeForm = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const {control, handleSubmit} = form;

  const onSubmit = data => {
    sendMessage(data).then(() => {
      enqueueSnackbar('Thanks! Message has been sent.', {
        variant: 'default',
        autoHideDuration: 4000,
        anchorOrigin: {horizontal: 'center', vertical: 'top'},
        action: key => (
          <Fragment>
            <button
              onClick={() => closeSnackbar(key)}
              className={'text-purple-600'}>
              Ok
            </button>
          </Fragment>
        ),
      });
    });
  };

  return (
    <div className={'flex w-full flex-col gap-4 rounded-2xl bg-white p-5 xl:w-1/2'}>
      <SnackbarProvider />
      <Controller
        name={'name'}
        control={control}
        rules={formRules.name}
        render={({field, fieldState}) => (
          <div>
            <div className={'flex flex-row gap-2 rounded-2xl bg-gray-300'}>
              <label
                htmlFor="name"
                className={'px-2 py-1 font-medium text-black'}>
                Name
              </label>
              <input
                {...field}
                autoComplete={'off'}
                placeholder={'type your first and last name'}
                className={cn('flex-1 rounded-r-2xl border border-gray-300 p-1 outline-0', {
                  'font-bold text-red-600': fieldState.error,
                })}
              />
            </div>
            <p className={'pl-4 italic text-red-600'}>{fieldState?.error?.message ?? null}</p>
          </div>
        )}
      />
      <Controller
        name={'email'}
        control={control}
        rules={formRules.email}
        render={({field, fieldState}) => (
          <div>
            <div className={'flex flex-row gap-2 rounded-2xl bg-gray-300'}>
              <label
                htmlFor="email"
                className={'px-2 py-1 font-medium text-black'}>
                Email
              </label>
              <input
                {...field}
                autoComplete={'off'}
                placeholder={'type your email'}
                className={cn('flex-1 rounded-r-2xl border border-gray-300 p-1 outline-0', {
                  'font-bold text-red-600': fieldState.error,
                })}
              />
            </div>
            <p className={'pl-4 italic text-red-600'}>{fieldState?.error?.message ?? null}</p>
          </div>
        )}
      />
      <Controller
        name={'message'}
        control={control}
        rules={formRules.message}
        render={({field, fieldState}) => (
          <div>
            <div className={'flex flex-col gap-2 rounded-2xl bg-gray-300'}>
              <label
                htmlFor="message"
                className={'px-2 py-1 font-medium text-black'}>
                Message
              </label>
              <textarea
                {...field}
                autoComplete={'off'}
                placeholder={'type your message'}
                rows={5}
                className={cn(
                  'flex-1 resize-none rounded-b-2xl border border-gray-300 p-1 outline-0',
                  {'font-bold text-red-600': fieldState.error},
                )}
              />
            </div>
            <p className={'pl-4 italic text-red-600'}>{fieldState?.error?.message ?? null}</p>
          </div>
        )}
      />
      <button
        className={
          'group flex justify-center gap-2 rounded-2xl bg-gray-300 p-2 text-black hover:bg-black hover:text-white'
        }
        onClick={handleSubmit(onSubmit)}>
        Send
        <SendIcon className={'stroke-black group-hover:stroke-white'} />
      </button>
    </div>
  );
};

export default memo(ContactMeForm);
