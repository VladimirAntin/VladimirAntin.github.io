'use client';
import {Fragment, memo, useState} from 'react';
import Tag from '@/app/components/Tag.jsx';
import Typing from '@/app/components/Typing.jsx';
const TypeState = {
  CITY: 1,
  COUNTRY: 2,
  JAVA: 3,
  PHP: 4,
  PYTHON: 5,
  GO: 6,
  TYPESCRIPT: 7,
  JAVASCRIPT: 8,
  SE0: 9,
  NATIVE: 10,
};

const location = [
  {tag: 'City', value: 'Novi Sad', id: TypeState.CITY},
  {tag: 'Country', value: 'Serbia', id: TypeState.COUNTRY},
];

const backend = [
  {tag: 'Java', value: 'Spring boot, Micronaut', id: TypeState.JAVA},
  {tag: 'PHP', value: 'Symfony', id: TypeState.PHP},
  {tag: 'Python', value: 'Flask', id: TypeState.PYTHON},
  {tag: 'GO lang', value: 'Fiber', id: TypeState.GO},
];
const frontend = [
  {tag: 'typescript', value: 'Angular, VueJS, ReactJS', id: TypeState.TYPESCRIPT},
  {tag: 'javascript', value: 'VueJS, ReactJS, VanillaJS, jQuery', id: TypeState.JAVASCRIPT},
  {tag: 'SEO', value: 'NextJS, NuxtJS', id: TypeState.SE0},
  {tag: 'Native', value: 'React Native', id: TypeState.NATIVE},
];

const Information = () => {
  const [type, setType] = useState();

  return (
    <Tag tagName={'Information'}>
      <Tag
        tagName={'Position'}
        className={'pl-5'}
      >
        <p className={'text-white pl-5 py-5 text-3xl'}>
          <Typing
            text={'Software Engineer Lead'}
            onDone={() => setType(TypeState.CITY)}
          />
        </p>
      </Tag>

      <Tag
        tagName={'Location'}
        className={'pl-5'}
      >
        <div className={'pl-5'}>
          {location.map(({tag, value, id}) => (
            <Fragment key={tag}>
              <Tag
                tagName={tag}
                containerClass={'flex items-center'}
              >
                <p className={'text-white px-1 text-3xl'}>
                  {type >= id ? (
                    <Typing
                      text={value}
                      onDone={() => setType(id + 1)}
                    />
                  ) : null}
                </p>
              </Tag>
            </Fragment>
          ))}
        </div>
      </Tag>
      <Tag
        tagName={'Full-Stack-Developer'}
        className={'pl-5'}
      >
        <Tag
          tagName={'Backend'}
          className={'pl-5'}
        >
          {backend.map(({tag, value, id}) => (
            <Fragment key={tag}>
              <Tag
                tagName={tag}
                className={'pl-5 py-1'}
              >
                <p className={'text-white pl-5 text-3xl'}>
                  {type >= id ? (
                    <Typing
                      text={value}
                      onDone={() => setType(id + 1)}
                    />
                  ) : null}
                </p>
              </Tag>
            </Fragment>
          ))}
        </Tag>
        <Tag
          tagName={'Frontend'}
          className={'pl-5'}
        >
          {frontend.map(({tag, value, id}) => (
            <Fragment key={tag}>
              <Tag
                tagName={tag}
                className={'pl-5 py-1'}
              >
                <p className={'text-white pl-5 text-3xl'}>
                  {type >= id ? (
                    <Typing
                      text={value}
                      onDone={() => setType(id + 1)}
                    />
                  ) : null}
                </p>
              </Tag>
            </Fragment>
          ))}
        </Tag>
      </Tag>
    </Tag>
  );
};

export default memo(Information);
