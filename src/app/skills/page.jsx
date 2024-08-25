import {memo} from 'react';
import LanguagesIcon from '@/app/components/icons/skills/LanguagesIcon';
import FrameworkIcon from '@/app/components/icons/skills/FrameworkIcon';
import DBIcon from '@/app/components/icons/skills/DBIcon';
import ProjectManagementIcon from '@/app/components/icons/skills/ProjectManagmentIcon';
import IdeIcon from '@/app/components/icons/skills/IdeIcon';
import OsIcon from '@/app/components/icons/skills/OsIcon';
import OtherIcon from '@/app/components/icons/skills/OtherIcon';
import LearnIcon from '@/app/components/icons/skills/LearnIcon';
import GitIcon from '@/app/components/icons/skills/GitIcon';

const skills = [
  {
    name: 'Programming languages',
    Icon: LanguagesIcon,
    pattern: ['Java', 'JavaScript', 'PHP', 'TypeScript', 'HTML', 'CSS (Scss, less)', 'JSON', 'Basics of SQL', 'Basics of NoSQL'],
  },
  {
    name: 'Frameworks and libraries',
    Icon: FrameworkIcon,
    pattern: ['Spring boot', 'Micronaut', 'Symfony', 'Angular', 'NestJS', 'NextJS', 'Nuxtjs', 'React', 'VueJS', 'React native', 'Expo'],
  },
  {name: 'Database', Icon: DBIcon, pattern: ['MongoDB', 'MySQL', 'PostgreSQL']},
  {
    name: 'Project Management',
    Icon: ProjectManagementIcon,
    pattern: ['bun', 'maven', 'npm', 'composer', 'yarn', 'pnpm', 'gradle'],
  },
  {
    name: 'IDE',
    Icon: IdeIcon,
    pattern: ['IntelliJ IDEA', 'WebStorm', 'PhpStorm', 'PyCharm', 'Visual Studio Code', 'Sublime Text'],
  },
  {name: 'Systems', Icon: OsIcon, pattern: ['Mac OSX', 'Linux', 'Windows']},
  {name: 'Version Control', Icon: GitIcon, pattern: ['Git', 'Bitbucket']},
  {
    name: 'Other',
    Icon: OtherIcon,
    pattern: ['WebSocket', 'REST', 'GraphQL', 'JWT', 'Firebase', 'Tailwind', 'Bootstrap', 'Material design', 'Fontawesome icons', 'Material icons'],
  },
  {
    name: 'I am currently learning',
    Icon: LearnIcon,
    pattern: ['oAuth', 'Microservices', 'Electron', 'Photoshop', 'Illustrator', 'Python (Flask)', 'Docker', 'Web3'],
  },
];

const Skills = () => {
  return (
    <div className={'flex flex-wrap gap-10 w-full'}>
      {skills.map(({name, Icon, pattern}, idx) => (
        <div
          key={'skills-' + idx}
          className={'flex flex-col bg-white rounded-xl w-1/4 animate-fade-in-left grayscale hover:grayscale-0'}
        >
          <div className={'flex flex-row gap-5 items-center p-2 mb-10'}>
            <Icon
              width={50}
              height={50}
            />
            <p className={'font-bold'}>{name}</p>
          </div>
          <div className={'flex flex-row flex-wrap gap-3 w-full p-2'}>
            {pattern.map((text, textIdx) => (
              <p
                key={'pattern-' + idx + '-skill-' + textIdx}
                className={'bg-gray-300 border border-gray-300 shadow shadow-gray-300 rounded-full px-2 py-1 text-black cursor-pointer hover:scale-125 duration-300 hover:font-bold'}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Skills);