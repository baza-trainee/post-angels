import { fetchOneProject } from '@/api/fetchOneProject';
import PageContent from '@/components/Payment/PageContent/PageContent';
import { SchemaTypes } from '@/components/Payment/Payments.props';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const page = async (
  { params }: { params: { project: string; lang: Locale } },
  schema: SchemaTypes
) => {
  const { project, lang } = params;

  const { common } = await getDictionary(lang);
  const { payments, logo } = common;
  const projectData = await fetchOneProject(lang, project);
  const { projects } = projectData;

  return (
    <div className="container">
      <PageContent
        payments={payments}
        schema={schema}
        lang={lang}
        dictionary={common}
        projectDataInfo={projects?.attributes}
        logo={logo}
      />
    </div>
  );
};

export default page;
