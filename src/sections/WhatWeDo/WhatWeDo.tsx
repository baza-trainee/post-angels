import { Locale } from '@/i18n.config';

import { Title } from '@/components/typography/Title';
import { WhatWeDoCard } from '@/components/WhatWeDo/WhatWeDoCard';
import { WhatWeDoProps } from './WhatWeDo.props';

export const WhatWeDo = ({ lang, data }: { lang: Locale; data: WhatWeDoProps }) => {
  return (
    <section className="pb-[30px] md:pb-[50px]">
      <div className="container">
        <div className="">
          <Title
            tag="h2"
            variantSize="h2"
            className="mb-[30px] whitespace-pre-wrap md:mb-[40px]  xl:mb-[50px] "
          >
            {data.title1}
            <span>{data.title2}</span>
          </Title>
          <ul className="flex flex-col gap-y-[60px] md:gap-y-[100px]">
            {data.workWith.map(el => {
              return <WhatWeDoCard data={el} key={el.title} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
