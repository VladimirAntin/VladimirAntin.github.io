'use client';
import {Fragment, memo} from 'react';
import Tag from '@/components/Tag';

const motivation = {
  text: `"Any app that can be written in JavaScript,will eventually be written in JavaScript."`,
  author: '- Jeff Atwood',
};

const links = [
  {name: 'Github', link: 'https://github.com/vladimirantin'},
  {name: 'Gitlab', link: 'https://gitlab.com/antin502'},
  {name: 'npm', link: 'https://npmjs.com/~antin502'},
  {name: 'LinkedIn', link: 'https://www.linkedin.com/in/vladimir-antin'},
];

const References = () => {
  return (
    <section aria-labelledby={'profiles-heading'}>
      <blockquote
        className={'w-2/3 text-wrap text-3xl text-white'}
        cite={'https://blog.codinghorror.com/the-principle-of-least-power/'}>
        {motivation.text}
      </blockquote>
      <p className={'mb-10 text-2xl text-gray-500'}>{motivation.author}</p>
      <div>
        <h2
          id={'profiles-heading'}
          className={'sr-only'}>
          Professional profiles
        </h2>
        <Tag
          tagName={'links'}
          className={'text-2xl'}>
          {links.map(({name, link}) => (
            <Fragment key={name}>
              <Tag
                tagName={'link'}
                containerClass={'flex pl-5'}>
                <a
                  className="cursor-pointer font-bold text-white hover:underline"
                  href={link}
                  target="_blank"
                  rel="me noreferrer">
                  {name}
                </a>
              </Tag>
            </Fragment>
          ))}
        </Tag>
      </div>
    </section>
  );
};

export default memo(References);
