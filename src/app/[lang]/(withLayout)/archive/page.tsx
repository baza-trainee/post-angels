import { fetchProjects } from '@/api/fetchProjects';
import { ArchiveProjectsSlider } from '@/components/Projects/ArchiveProjectsSlider';
import { Title } from '@/components/typography/Title';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);
  const { projects, archive } = common;

  const archiveData = await fetchProjects(lang, ['archive']);
  return (
    <section className="pt-[100px] xl:pt-[230px]">
      <div className="container relative">
        <Title tag="h1" variantSize="h2">
          {archive.title}
          <br />
          <span>{archive.title1}</span>
        </Title>
        {archiveData.length !== 0 && (
          <ArchiveProjectsSlider
            className="mt-10 xl:mt-0"
            projectsData={archiveData}
            projects={projects}
            isFinished
            lang={lang}
          />
        )}
      </div>
    </section>
  );
};

export default page;
