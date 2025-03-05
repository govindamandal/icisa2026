import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className="w-full">
      <div className="flex space-x-6 items-center justify-between">
        <a
          href="https://nitdelhi.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image
                alt="NITD"
                loading="lazy"
                width="160"
                height="60"
                decoding="async"
                className="object-contain"
                style={{ color: 'transparent', height: '120px' }}
                src="https://govindamandal.github.io/icisa2026/assets/NIT-Delhi_Logo.png"
            />
        </a>

        <div className="flex items-center">
          {[
            {
              href: 'https://www.elsevier.com/en-in',
              src: 'https://govindamandal.github.io/icisa2026/assets/elsevier-logo.svg',
              width: 148,
              height: 70,
              alt: 'ELSEVIER',
            },
            // {
            //   href: 'https://www.drdo.gov.in/drdo/',
            //   src: '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdrdo.3c731ff0.png&amp;w=256&amp;q=100',
            //   width: 84,
            //   height: 84,
            //   alt: 'DRDO',
            // },
            // {
            //   href: 'https://serb.gov.in/',
            //   src: '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fserb.55683130.png&amp;w=256&amp;q=100',
            //   width: 123,
            //   height: 76,
            //   alt: 'SERB',
            // },
            // {
            //   href: 'https://khalsaengineering.co.in/',
            //   src: '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkcet.e65347e0.png&amp;w=256&amp;q=100',
            //   width: 87,
            //   height: 84,
            //   alt: 'KCET',
            // },
          ].map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
              <Image
                alt={item.alt}
                loading="lazy"
                width={item.width}
                height={item.height}
                decoding="async"
                className="object-contain"
                style={{ color: 'transparent' }}
                src={item.src}
              />
            </a>
          ))}

          <div className="md:hidden">
            <div className="max-w-[32px] my-auto px-6 pt-2">
              <svg
                viewBox="0 0 116 78"
                fill="none"
                className="w-4 h-4 text-blue-800"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.00891 7.6001H108.631" stroke="black" strokeWidth="14.3746" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M8.00891 38.7451H108.631" stroke="black" strokeWidth="14.3746" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M8.00891 69.8896H108.631" stroke="black" strokeWidth="14.3746" strokeMiterlimit="10" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <nav className="hidden md:block bg-blue-800 text-white sticky top-0 z-50">
            <div className="bg-primaryDark absolute md:static py-1.5 px-6 left-0 w-full md:w-auto mx-auto">
                <ul className=" md:flex md:items-center md:justify-between">
                    <li className="my-6 md:my-0">
                        <a className="uppercase text-md font-medium hover:text-primary20" href="/">Home</a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a className="uppercase text-md font-medium hover:text-primary20" href="/about">About</a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a className="uppercase text-md font-medium hover:text-primary20" href="/registration">Registration</a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a className="uppercase text-md font-medium hover:text-primary20" href="/submissions">Submission</a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a className="uppercase text-md font-medium hover:text-primary20" href="/tracks">Tracks</a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a className="uppercase text-md font-medium hover:text-primary20" href="/speakers">Speakers</a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a className="uppercase text-md font-medium hover:text-primary20" href="/committees">Committees</a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a className="uppercase text-md font-medium hover:text-primary20" href="/sponsors">Supporter</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Header;