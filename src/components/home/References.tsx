'use client';
import {memo} from 'react';
import {motion} from 'framer-motion';
import {contact} from '@/data/seo';

// ── Icons ──────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg
    viewBox={'0 0 24 24'}
    fill={'currentColor'}
    width={20}
    height={20}>
    <path
      d={
        'M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.984 1.03-2.683-.104-.253-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.393.1 2.646.64.699 1.028 1.591 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.854 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z'
      }
    />
  </svg>
);
const GitlabIcon = () => (
  <svg
    viewBox={'0 0 24 24'}
    fill={'currentColor'}
    width={20}
    height={20}>
    <path
      d={
        'M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z'
      }
    />
  </svg>
);
const NpmIcon = () => (
  <svg
    viewBox={'0 0 24 24'}
    fill={'currentColor'}
    width={20}
    height={20}>
    <path
      d={
        'M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.331h-2.669v0zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z'
      }
    />
  </svg>
);
const LinkedInIcon = () => (
  <svg
    viewBox={'0 0 24 24'}
    fill={'currentColor'}
    width={20}
    height={20}>
    <path
      d={
        'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
      }
    />
  </svg>
);
const InstagramIcon = () => (
  <svg
    viewBox={'0 0 24 24'}
    fill={'currentColor'}
    width={20}
    height={20}>
    <path
      d={
        'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
      }
    />
  </svg>
);
const WhatsAppIcon = () => (
  <svg
    viewBox={'0 0 24 24'}
    fill={'currentColor'}
    width={20}
    height={20}>
    <path
      d={
        'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
      }
    />
  </svg>
);
const TelegramIcon = () => (
  <svg
    viewBox={'0 0 24 24'}
    fill={'currentColor'}
    width={20}
    height={20}>
    <path
      d={
        'M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'
      }
    />
  </svg>
);
const ViberIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox={'0 0 512 512'}>
    <path
      fill={'currentColor'}
      d={
        'M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5s-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8c8.7-9.4 20.7-23.2 29.8-33.7c82.2 6.9 145.3-8.9 152.5-11.2c16.6-5.4 110.5-17.4 125.7-142c15.8-128.6-7.6-209.8-49.8-246.5M457.9 287c-12.9 104-89 110.6-103 115.1c-6 1.9-61.5 15.7-131.2 11.2c0 0-52 62.7-68.2 79c-5.3 5.3-11.1 4.8-11-5.7c0-6.9.4-85.7.4-85.7q-.15 0 0 0C43.1 372.7 49.1 266.6 50.2 211.1s11.6-101 42.6-131.6c55.7-50.5 170.4-43 170.4-43c96.9.4 143.3 29.6 154.1 39.4c35.7 30.6 53.9 103.8 40.6 211.1m-139-80.8c.4 8.6-12.5 9.2-12.9.6c-1.1-22-11.4-32.7-32.6-33.9c-8.6-.5-7.8-13.4.7-12.9c27.9 1.5 43.4 17.5 44.8 46.2m20.3 11.3c1-42.4-25.5-75.6-75.8-79.3c-8.5-.6-7.6-13.5.9-12.9c58 4.2 88.9 44.1 87.8 92.5c-.1 8.6-13.1 8.2-12.9-.3m47 13.4c.1 8.6-12.9 8.7-12.9.1c-.6-81.5-54.9-125.9-120.8-126.4c-8.5-.1-8.5-12.9 0-12.9c73.7.5 133 51.4 133.7 139.2M374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5c-16.2-12.8-31-27.9-42.4-42.4c-10.3-12.9-20.7-28.2-30.8-46.6c-21.3-38.5-26-55.7-26-55.7c-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9c0 0 12.4 14.8 17.7 22.1c5 6.8 11.7 17.7 15.2 23.8c6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7c14.7 8.3 33.4 21.2 45.8 32.9c7 5.7 8.6 14.4 3.8 23.6'
      }></path>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────
const phone = (contact.phone ?? '').replace('+', '');

const devLinks = [
  {
    name: 'GitHub',
    handle: 'vladimirantin',
    url: 'https://github.com/vladimirantin',
    Icon: GithubIcon,
    color: 'hover:bg-gray-900 hover:border-gray-900',
  },
  {
    name: 'GitLab',
    handle: 'antin502',
    url: 'https://gitlab.com/antin502',
    Icon: GitlabIcon,
    color: 'hover:bg-orange-500 hover:border-orange-500',
  },
  {
    name: 'npm',
    handle: 'antin502',
    url: 'https://npmjs.com/~antin502',
    Icon: NpmIcon,
    color: 'hover:bg-red-600 hover:border-red-600',
  },
  {
    name: 'LinkedIn',
    handle: 'vladimir-antin',
    url: 'https://www.linkedin.com/in/vladimir-antin',
    Icon: LinkedInIcon,
    color: 'hover:bg-blue-600 hover:border-blue-600',
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    handle: 'vladimir.antin',
    url: 'https://www.instagram.com/vladimir.antin',
    Icon: InstagramIcon,
    color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-pink-500',
  },
  {
    name: 'WhatsApp',
    handle: phone,
    url: `https://wa.me/${phone}`,
    Icon: WhatsAppIcon,
    color: 'hover:bg-green-500 hover:border-green-500',
  },
  {
    name: 'Telegram',
    handle: 'vladimirantin',
    url: 'https://t.me/vladimirantin',
    Icon: TelegramIcon,
    color: 'hover:bg-sky-500 hover:border-sky-500',
  },
  {
    name: 'Viber',
    handle: phone,
    url: `viber://chat?number=%2B${phone}`,
    Icon: ViberIcon,
    color: 'hover:bg-violet-600 hover:border-violet-600',
  },
];

// ── Variants ─────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: {transition: {staggerChildren: 0.06, delayChildren: 0.1}},
};
const cardVariants = {
  hidden: {opacity: 0, y: 14},
  show: {opacity: 1, y: 0, transition: {duration: 0.3, ease: 'easeOut' as const}},
};

type LinkItem = (typeof devLinks)[number];

const LinkCard = ({name, handle, url, Icon, color}: LinkItem) => (
  <motion.a
    href={url}
    target={'_blank'}
    rel={'me noreferrer noopener'}
    variants={cardVariants}
    className={[
      'flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3',
      'text-gray-200 backdrop-blur-sm transition-all duration-200',
      'hover:text-white',
      color,
    ].join(' ')}>
    <Icon />
    <div className={'min-w-0'}>
      <p className={'text-sm leading-none font-semibold'}>{name}</p>
      <p className={'mt-0.5 truncate text-xs opacity-50'}>
        {handle.startsWith('38') ? `+${handle}` : `@${handle}`}
      </p>
    </div>
  </motion.a>
);

// ── Component ─────────────────────────────────────────────────────────
const References = () => (
  <section
    aria-labelledby={'profiles-heading'}
    className={'py-8'}>
    <h2
      id={'profiles-heading'}
      className={'sr-only'}>
      {'Professional profiles'}
    </h2>

    <blockquote className={'mb-1 max-w-sm text-xl leading-relaxed text-gray-400 italic'}>
      {'"Any app that can be written in JavaScript, will eventually be written in JavaScript."'}
    </blockquote>
    <p className={'mb-8 text-sm text-gray-600'}>{'— Jeff Atwood'}</p>

    {/* Dev profiles */}
    <p className={'mb-2 text-xs font-bold tracking-widest text-gray-600 uppercase'}>{'Code'}</p>
    <motion.div
      initial={'hidden'}
      animate={'show'}
      variants={containerVariants}
      className={'mb-5 grid grid-cols-2 gap-2'}>
      {devLinks.map(link => (
        <LinkCard
          key={link.name}
          {...link}
        />
      ))}
    </motion.div>

    {/* Social / messaging */}
    <p className={'mb-2 text-xs font-bold tracking-widest text-gray-600 uppercase'}>
      {'Social & Messaging'}
    </p>
    <motion.div
      initial={'hidden'}
      animate={'show'}
      variants={containerVariants}
      className={'grid grid-cols-2 gap-2'}>
      {socialLinks.map(link => (
        <LinkCard
          key={link.name}
          {...link}
        />
      ))}
    </motion.div>
  </section>
);

export default memo(References);
