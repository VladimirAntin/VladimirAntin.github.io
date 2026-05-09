'use client';
import {memo} from 'react';
import {type Variants, motion} from 'framer-motion';

const techStack = [
  {
    category: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'Micronaut',
      'Quarkus',
      'PHP · Symfony',
      'Go · Fiber',
      'Javascript · Node.js',
      'NestJS',
      'Python',
      'FastAPI',
      'Flask',
    ],
  },
  {
    category: 'Frontend',
    items: ['TypeScript', 'Angular', 'React', 'Next.js', 'Nuxt.js'],
  },
  {
    category: 'Mobile',
    items: ['TypeScript', 'React Native', 'Expo'],
  },
  {
    category: 'Ai',
    items: ['ChatGPT', 'Claude Code', 'Gemini', 'Github Copilot'],
  },
];

const container: Variants = {
  hidden: {},
  show: {transition: {staggerChildren: 0.09, delayChildren: 0.05}},
};

const fadeUp: Variants = {
  hidden: {opacity: 0, y: 22},
  show: {opacity: 1, y: 0, transition: {duration: 0.4, ease: 'easeOut' as const}},
};

const Information = () => {
  return (
    <motion.div
      initial={'hidden'}
      animate={'show'}
      variants={container}
      className={'flex flex-col gap-8 py-8 pl-4 xl:pl-0'}>
      <motion.div variants={fadeUp}>
        <p className={'text-sm font-semibold tracking-widest text-gray-400 uppercase'}>
          {'Full Stack Developer'}
        </p>
        <h1
          id={'home-hero-title'}
          className={'mt-1 text-5xl leading-tight font-extrabold text-white xl:text-6xl'}>
          {'Vladimir'}
          <br />
          {'Antin'}
        </h1>
        <p className={'mt-3 text-base text-gray-400'}>{'📍 Novi Sad, Serbia'}</p>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className={'max-w-md text-lg leading-relaxed text-gray-300'}>
        {
          'Building scalable web & mobile solutions with Java, Spring Boot, and TypeScript. 7+ years across the full stack.'
        }
      </motion.p>

      <div className={'flex flex-col gap-5'}>
        {techStack.map(({category, items}) => (
          <motion.div
            key={category}
            variants={fadeUp}>
            <p className={'mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase'}>
              {category}
            </p>
            <div className={'flex flex-wrap gap-2'}>
              {items.map(tech => (
                <span
                  key={tech}
                  className={
                    'rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-gray-300 backdrop-blur-sm'
                  }>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(Information);
