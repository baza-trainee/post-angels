import { AboutInNumbersProps } from './AboutInNumbers.props';
import { Title } from '@/components/typography/Title';
import { AboutInNumberCard } from '@/components/AboutInNumber/AboutInNumberCard';
import { AboutNumberProps } from './AboutInNumbers.props';

const getApiData = async () => {
  const data = [
    { name: 'family', measure: '727 380' },
    { name: 'partners', measure: '20 500' },
    { name: 'activities', measure: '17 350+' },
    { name: 'volunteers', measure: '460' },
  ];
  return data;
};

export const AboutInNumbers = async ({ data }: { data: AboutInNumbersProps }) => {
  const AboutInNumberApiData = await getApiData();

  const gerCardApiData = (AboutInNumberApiData: AboutNumberProps[], name: string) => {
    const matchingData = AboutInNumberApiData.filter(item => item.name === name);
    return matchingData[0];
  };

  const beforeClass = `md:before:block md:before:w-[1px] md:before:h-full md:before:bg-grey-60 md:before:absolute md:before:top-0 md:before:left-[50%]`;
  const afterClass = `md:after:block md:after:w-full xl:after:w-[1px] md:after:h-[1px] xl:after:h-full md:after:bg-grey-60 md:after:absolute md:after:left-0 md:after:top-[50%] xl:after:top-0`;
  return (
    <section className="pt-20">
      <div className="container">
        <div className=" border-b border-grey-60 pb-20 xl:flex xl:justify-between">
          <Title
            tag="h2"
            variantSize="h2"
            className="whitespace-pre-wrap  md:mb-[40px] xl:mb-[50px] xl:inline-block xl:basis-[205px] notXl:mb-[30px] "
          >
            {data.title1}
            <span>{data.title2}</span>
          </Title>
          <ul
            className={`relative flex flex-col gap-y-[25px] md:flex-row md:flex-wrap md:gap-x-[30px] md:gap-y-[50px] xl:mr-[17px] xl:basis-[788px] 2xl:mr-0 2xl:basis-[912px] 2xl:gap-x-0 3xl:basis-[1311px] ${beforeClass} ${afterClass}`}
          >
            {data.about.map((el, ind) => {
              return (
                <AboutInNumberCard
                  key={el.name}
                  data={el}
                  numberData={gerCardApiData(AboutInNumberApiData, el.name)}
                  ind={ind}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
