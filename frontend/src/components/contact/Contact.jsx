import { Link } from 'react-router-dom';

const Contact = () => {
const getHostName = () => {
  let url = window.location.origin;
  const parsed = new URL(url);
  const domainOnly = parsed.host; // or parsed.hostname
  return domainOnly;
}
  return (
    <section id='about-conact'>
      {/* Section Spacer */}
      <div className='bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,_1fr)_1.4fr]'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-[20px] md:order-1'
              data-jos_animation='fade-right'
            >
              <img
                src='assets/img/th-1/about-contact-img.jpg'
                alt='about-contact-img'
                width={526}
                height={550}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div
              className='jos order-1 md:order-2'
              data-jos_animation='fade-down'
            >
              {/* Section Content Block */}
              <div className='mb-6 md:max-w-max'>
                <h2 className='text-white'>
                  We always want to connect our clients
                </h2>
              </div>
              {/* Section Content Block */}
              <div className='text-left text-lg leading-[1.4] text-white lg:text-[21px]'>
                <p className='mb-7 last:mb-0'>
                  AI accessible and beneficial for organizations, and we look
                  forward to partnering with businesses to achieve their AI
                  goals.
                </p>
              </div>
              <ul className='mt-10 flex flex-col gap-6 font-dmSans text-[30px] tracking-[1.33] lg:mt-14 lg:gap-y-3 xl:mt-[70px]'>
                <li className='flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal'>
                  Website:
                  <Link
                    rel='noopener noreferrer'
                    to='/'
                    className='text-white hover:text-colorOrangyRed'
                  >
                    {getHostName()}
                  </Link>
                </li>
                <li className='flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal'>
                  Email:
                  <a
                    className='text-white hover:text-colorOrangyRed'
                  >
                    williepowell@nexustech.group
                  </a>
                </li>
                <li className='flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal'>
                  Phone:
                  <a
                    className='text-white hover:text-colorOrangyRed'
                  >
                    +1 (505) 556-7631
                  </a>
                </li>
              </ul>
            </div>
            {/* Content Right Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Contact;
