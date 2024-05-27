
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import PageContent from '@/components/Payment/PageContent/PageContent';
import { SchemaTypes } from '@/components/Payment/Payments.props';
import { fetchOneProject } from '@/api/fetchOneProject';
import { PageMain } from '@/components/Payment/PageMain/PageMain';

const page = async (
  { params }: { params: { project: string; lang: Locale } },
  schema: SchemaTypes
) => {
  const { project, lang } = params;

  const { common } = await getDictionary(lang);
  const { payments } = common;
  const projectData = await fetchOneProject(lang, project);
  const { projects } = projectData;

  return (
    <div className="container">
      <PageMain projectDataInfo={projects?.attributes} lang={lang} />
      <PageContent
        payments={payments}
        schema={schema}
        lang={lang}
        dictionary={common}
      />
    </div>
  );
};

export default page;
