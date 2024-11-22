import {memo} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactMeForm from '@/components/contact-me/ContactMeForm.jsx';

const contacts = [
  {link: 'tel:+381616279151', content: '+381 61 627 91 51'},
  {link: 'mailto:antin502@gmail.com', content: 'antin502@gmail.com'},
];
const ContactMe = () => {
  return (
    <div className={'flex flex-col items-center w-full xl:w-3/5 gap-10'}>
      <Image
        src={'/images/profile.jpg'}
        className={'rounded-2xl bg-white p-1'}
        alt={'profile'}
        width={300}
        height={300}
      />
      <div className={'flex flex-col gap-4 bg-white w-full xl:w-1/2 p-5 rounded-2xl'}>
        <p className={'text-gray-500'}>{`I'm happy to answer any questions you have or provide you with an estimate. Just send me a message in the form below with any questions you may have.`}</p>
        <div className={'flex justify-between px-2'}>
          {contacts.map(({link, content}, idx) => (
            <Link
              key={'link-' + idx}
              href={link}
              className={'text-gray-500 hover:underline'}
            >
              {content}
            </Link>
          ))}
        </div>
      </div>
      <ContactMeForm />
    </div>
  );
};
export const metadata = {
  title: 'Vladimir Antin | Contact me',
};

export default memo(ContactMe);
