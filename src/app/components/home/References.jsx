'use client';
import {Fragment, memo} from 'react';
import Tag from '@/app/components/Tag.jsx';

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
    <>
      <p className={'text-white text-3xl text-wrap'}>{motivation.text}</p>
      <p className={'text-gray-500 text-2xl mb-10'}>{motivation.author}</p>
      <div>
        <Tag
          tagName={'links'}
          className={'text-2xl'}
        >
          {links.map(({name, link}) => (
            <Fragment key={name}>
              <Tag
                tagName={'link'}
                containerClass={'flex pl-5'}
              >
                <a
                  className="cursor-pointer text-white font-bold hover:underline"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {name}
                </a>
              </Tag>
            </Fragment>
          ))}
        </Tag>
      </div>
    </>
  );
};

export default memo(References);
