'use client';
import {memo} from 'react';
import {motion} from 'framer-motion';

// Inline SVG icons — no extra import cost
const GithubIcon = () => (
  <svg viewBox={'0 0 24 24'} fill={'currentColor'} width={20} height={20}>
    <path d={'M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.984 1.03-2.683-.104-.253-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.393.1 2.646.64.699 1.028 1.591 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.854 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z'} />
  </svg>
);

const GitlabIcon = () => (
  <svg viewBox={'0 0 24 24'} fill={'currentColor'} width={20} height={20}>
    <path d={'M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z'} />
  </svg>
);

const NpmIcon = () => (
  <svg viewBox={'0 0 24 24'} fill={'currentColor'} width={20} height={20}>
    <path d={'M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.331h-2.669v0zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z'} />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox={'0 0 24 24'} fill={'currentColor'} width={20} height={20}>
    <path d={'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'} />
  </svg>
);

const profileLinks = [
  {name: 'GitHub', handle: 'vladimirantin', url: 'https://github.com/vladimirantin', Icon: GithubIcon, color: 'hover:bg-gray-900 hover:text-white hover:border-gray-900'},
  {name: 'GitLab', handle: 'antin502', url: 'https://gitlab.com/antin502', Icon: GitlabIcon, color: 'hover:bg-orange-500 hover:text-white hover:border-orange-500'},
  {name: 'npm', handle: 'antin502', url: 'https://npmjs.com/~antin502', Icon: NpmIcon, color: 'hover:bg-red-600 hover:text-white hover:border-red-600'},
  {name: 'LinkedIn', handle: 'vladimir-antin', url: 'https://www.linkedin.com/in/vladimir-antin', Icon: LinkedInIcon, color: 'hover:bg-blue-600 hover:text-white hover:border-blue-600'},
];

const containerVariants = {
  hidden: {},
  show: {transition: {staggerChildren: 0.07, delayChildren: 0.15}},
};

const cardVariants = {
  hidden: {opacity: 0, y: 16},
  show: {opacity: 1, y: 0, transition: {duration: 0.35, ease: 'easeOut' as const}},
};

const References = () => {
  return (
    <section
      aria-labelledby={'profiles-heading'}
      className={'py-8'}>
      <h2
        id={'profiles-heading'}
        className={'sr-only'}>
        {'Professional profiles'}
      </h2>

      <blockquote className={'mb-2 max-w-sm text-xl leading-relaxed text-gray-400 italic'}>
        {'"Any app that can be written in JavaScript, will eventually be written in JavaScript."'}
      </blockquote>
      <p className={'mb-8 text-sm text-gray-600'}>{'— Jeff Atwood'}</p>

      <motion.div
        initial={'hidden'}
        animate={'show'}
        variants={containerVariants}
        className={'grid grid-cols-1 gap-3 sm:grid-cols-2'}>
        {profileLinks.map(({name, handle, url, Icon, color}) => (
          <motion.a
            key={name}
            href={url}
            target={'_blank'}
            rel={'me noreferrer noopener'}
            variants={cardVariants}
            className={[
              'flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3',
              'text-gray-300 backdrop-blur-sm transition-all duration-200',
              color,
            ].join(' ')}>
            <Icon />
            <div className={'min-w-0'}>
              <p className={'text-sm font-semibold leading-none'}>{name}</p>
              <p className={'mt-0.5 truncate text-xs opacity-60'}>{`@${handle}`}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default memo(References);
