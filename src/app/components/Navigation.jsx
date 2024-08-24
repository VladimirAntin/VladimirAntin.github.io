import Link from 'next/link';
import {memo} from 'react';
import HomeIcon from '@/app/components/icons/HomeIcon.jsx';
import SkillsIcon from '@/app/components/icons/SkillsIcon.jsx';
import ProjectsIcon from '@/app/components/icons/ProjectsIcon.jsx';
import CVIcon from '@/app/components/icons/CVIcon.jsx';
import AskIcon from '@/app/components/icons/AskIcon.jsx';

const navItems = [
  {title: 'Home', href: '/', Icon: HomeIcon},
  {title: 'Skills', href: '/skills', Icon: SkillsIcon},
  {title: 'Projects', href: '/projects', Icon: ProjectsIcon},
  {title: 'CV', href: '/cv', Icon: CVIcon},
  {title: 'Contact me', href: '/contact-me', Icon: AskIcon},
];

const Navigation = () => {
  return (
    <div className={'flex justify-start w-[20vw] mt-[100px]'}>
      <nav className={'flex flex-col gap-10 pl-[50px]'}>
        {navItems.map(({href, title, Icon}, idx) => (
          <Link
            href={href}
            key={'nav-item-' + idx}
            className={'flex gap-1 text-white group h-[48px] justify-center items-center'}
          >
            <div className={'group-hover:hidden'}>
              <Icon
                width={48}
                height={48}
              />
            </div>
            <p className={'hidden group-hover:block'}>{title}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default memo(Navigation);
