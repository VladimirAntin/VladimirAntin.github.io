'use client';
import {memo, useMemo, useState} from 'react';
import v1 from '@/app/data/spring-core.v1.1';
import v2 from '@/app/data/spring-core.v1.2';
import v3 from '@/app/data/spring-core.v1.3';
import v4 from '@/app/data/spring-core.v1.4';

import {dependency, path} from '@/app/data/spring-core.const';
import Tabs from '@/app/components/tabs/Tabs';
import {useSearchParams} from 'next/navigation';
import MavenIcon from '@/app/components/icons/projects/MavenIcon';
import GithubIcon from '@/app/components/icons/projects/GithubIcon';
import Link from 'next/link';

const versions = [
  {title: 'v1.1 (Core)', content: v1, dependency: dependency('1.1'), path: path('1.1'), tabId: 'v1.1'},
  {title: 'v1.2 (AuditLog)', content: v2, dependency: dependency('1.2'), path: path('1.2'), tabId: 'v1.2'},
  {title: 'v1.3 (Extended controller)', content: v3, dependency: dependency('1.3'), path: path('1.3'), tabId: 'v1.3'},
  {title: 'v1.4 (Base security)', content: v4, dependency: dependency('1.4'), path: path('1.4'), tabId: 'v1.4'},
];

const links = [
  {
    href: 'https://mvnrepository.com/artifact/com.github.vladimirantin/spring-core',
    Icon: MavenIcon,
    external: true,
  },
  {
    href: 'https://github.com/vladimirantin/spring-core',
    Icon: GithubIcon,
    external: true,
  },
];

const SpringCorePage = () => {
  const version = useSearchParams().get('version') ?? versions[versions.length - 1].tabId;
  const [example, setExample] = useState(0);
  const [yourCode, setYourCode] = useState(0);
  const [generator, setGenerator] = useState(0);
  const [docs, setDocs] = useState(0);

  const selectedVersion = useMemo(() => {
    setExample(0);
    return versions.find((v) => v.tabId === version);
  }, [version]);
  const selectedExample = useMemo(() => {
    setYourCode(0);
    setGenerator(0);
    setDocs(0);
    return selectedVersion.content.examples.find((_, id) => id === example);
  }, [example, selectedVersion]);
  const selectedYourCode = useMemo(() => selectedExample.yourCode?.find((_, id) => id === yourCode), [yourCode, selectedExample]);
  const selectedGenerator = useMemo(() => selectedExample.generator?.find((_, id) => id === generator), [generator, selectedExample]);
  const selectedDocs = useMemo(() => selectedExample.docs?.find((_, id) => id === docs), [docs, selectedExample]);

  return (
    <div className={'w-3/5 bg-white p-5 rounded-2xl'}>
      <div className={'flex justify-between items-center my-5'}>
        <div></div>
        <h1 className="text-center text-2xl font-bold m-2">./projects/spring-core</h1>
        <div className={'flex justify-end items-center'}>
          {links.map(({href, external, Icon}) => (
            <Link
              href={href}
              target={external ? '_blank' : undefined}
              className={'p-2 rounded-2xl grayscale hover:grayscale-0 hover:scale-125 duration-300'}
              key={'href-' + href}
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
      <Tabs
        tabs={versions}
        activeTab={version}
        url={(tabId) => `/projects/spring-core?version=${tabId}`}
      />

      <div className={'flex gap-5'}>
        <div className={'flex flex-col gap-2 w-2/5'}>
          <p>Dependency</p>
          <code className="p-4">
            <pre className="text-purple-500 cursor-pointer hover:text-blue-500 text-[10px]">{selectedVersion.dependency}</pre>
          </code>
          <p>Processor</p>
          <code className="">
            <pre className="text-purple-500 cursor-pointer hover:text-blue-500 text-[10px]">{selectedVersion.path}</pre>
          </code>
        </div>
        <div className={'w-3/5'}>
          <div>
            <Tabs
              tabs={selectedVersion.content.examples}
              activeTab={example}
              onChangeTab={setExample}
            />
          </div>
          <div key={'example-' + example}>
            {selectedExample?.yourCode?.length > 0 ? (
              <div className="m-3">
                <h4 className="m-2">Your Code</h4>

                <Tabs
                  tabs={selectedExample.yourCode}
                  activeTab={yourCode}
                  onChangeTab={setYourCode}
                />
                <div className={'max-w-full overflow-auto text-[10px] text-purple-500 hide-scrollbar'}>
                  <code>
                    <pre dangerouslySetInnerHTML={{__html: selectedYourCode?.text}} />
                  </code>
                </div>
              </div>
            ) : null}
            {selectedExample?.generator?.length > 0 ? (
              <div className="m-3">
                <h4 className="m-2">Generated Sources</h4>
                <Tabs
                  tabs={selectedExample.generator}
                  activeTab={generator}
                  onChangeTab={setGenerator}
                />
                <div className={'max-w-full overflow-auto text-[10px] text-purple-500 hide-scrollbar'}>
                  <code>
                    <pre dangerouslySetInnerHTML={{__html: selectedGenerator?.text}} />
                  </code>
                </div>
              </div>
            ) : null}
            {selectedExample?.docs?.length > 0 ? (
              <div className="m-3">
                <Tabs
                  tabs={selectedExample.docs}
                  activeTab={docs}
                  onChangeTab={setDocs}
                />
                <div className={'max-w-full overflow-auto text-[10px] text-purple-500 hide-scrollbar'}>
                  <code>
                    <pre dangerouslySetInnerHTML={{__html: selectedDocs?.text}} />
                  </code>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SpringCorePage);
