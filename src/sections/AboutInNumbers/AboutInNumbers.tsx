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
          <ul className="flex flex-col gap-y-[25px] md:flex-row md:flex-wrap md:gap-x-[30px] xl:basis-[789px] 2xl:basis-[894px] 3xl:basis-[1240px] ">
            {data.about.map(el => {
              return (
                <AboutInNumberCard
                  key={el.name}
                  data={el}
                  numberData={gerCardApiData(AboutInNumberApiData, el.name)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
