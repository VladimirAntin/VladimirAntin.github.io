import {memo} from 'react';
import Tag from '@/app/components/Tag.jsx';

const Home = () => {
  return (
    <div className={''}>
      <Tag tagName={'Information'}>
        <Tag
          tagName={'Position'}
          className={'pl-5'}
        >
          <p className={'text-white pl-5 py-5 text-4xl'}>Software Engineer Lead</p>
        </Tag>

        <Tag
          tagName={'Location'}
          className={'pl-5'}
        >
          <div className={'pl-5'}>
            <div className={'flex items-center'}>
              <Tag tagName={'City'}>
                <p className={'text-white px-1 text-4xl'}>Novi Sad</p>
              </Tag>
            </div>
            <div className={'flex items-center'}>
              <Tag tagName={'Country'}>
                <p className={'text-white px-1 text-4xl'}>Serbia</p>
              </Tag>
            </div>
          </div>
        </Tag>
        <Tag
          tagName={'Full-Stack-Developer'}
          className={'pl-5'}
        ></Tag>
      </Tag>
    </div>
  );
};

export default memo(Home);
