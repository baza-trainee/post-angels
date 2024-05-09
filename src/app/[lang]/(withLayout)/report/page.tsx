import { fetchReport } from '@/api/fetchReport';

import { ReportGallery } from '@/components/report/ReportGallery';
import { Title } from '@/components/typography/Title';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);
  const report_documents = await fetchReport(lang);
  const { report, modal } = common;

  return (
    <section className="pb-[50px] pt-[100px] xl:pt-[230px]">
      <div className="container relative">
        <Title tag="h1" variantSize="h2">
          {report.title}
        </Title>
        <ReportGallery report_documents={report_documents} modal={modal} />
      </div>
    </section>
  );
};

export default page;
