import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

import { ProjectInfo } from '@/sections/ProjectPage/ProjectInfo';

// const getProjectData = async (project: string, lang: Locale) => {
//   // GEt API//
//   const projectData = {
//     uk: {
//       id: project,
//       image: {
//         src: `/images/project/project-${project}.jpg`,
//         alt: 'project3',
//       },
//       title: 'Збір на травматологічні матеріали',
//       collected: 1444,
//       all: 68000,
//       startDate: '2023-02-22',
//       finishedDate: '',
//       status: 'new',
//       organizer: {
//         name: 'Цегельник Вікторія Василівна',
//         img: {
//           src: '/images/project/project-org-foto.png',
//           alt: 'Світлина організатора збору',
//         },
//       },
//       socials: [
//         {
//           name: 'facebook',
//           link: 'https://www.facebook.com/PostAngeles.Lviv',
//         },
//         {
//           name: 'instagram',
//           link: 'https://www.instagram.com/post_angeles_lviv/',
//         },
//       ],
//     },
//     en: {
//       id: project,
//       image: {
//         src: `/images/project/project-${project}.jpg`,
//         alt: 'project3',
//       },
//       title: 'Collection for traumatology materials',
//       collected: 1444,
//       all: 68000,
//       startDate: '2023-02-22',
//       finishedDate: '',
//       status: 'new',
//       organizer: {
//         name: 'Tsehelnyk Viktoriia Vasylivna',
//         img: {
//           src: '/images/project/project-org-foto.png',
//           alt: 'The photo of the collection organizer',
//         },
//       },
//       socials: [
//         {
//           name: 'facebook',
//           link: 'https://www.facebook.com/PostAngeles.Lviv',
//         },
//         {
//           name: 'instagram',
//           link: 'https://www.instagram.com/post_angeles_lviv/',
//         },
//       ],
//     },
//   };
//   return projectData[lang];
// };
const getProjectInfo = async (project: string, lang: Locale) => {
  const projectData = {
    uk: {
      title: 'Збір на травматологічні матеріали',
      info: `Цей збір призначений для тих, хто щодня ризикує своїм здоров'ям та безпекою, надаючи допомогу тим, хто потребує травматологічної допомоги. Ми спрямовані на підтримку лікарень, екстрених медичних служб та інших установ, які надають травматологічну допомогу.
Ми збираємо кошти для придбання та постачання травматологічних матеріалів, таких як перев'язочні матеріали, антисептики, гіпсові бандажі, хірургічні інструменти та інші необхідні засоби. Наша мета — забезпечити медичні установи повноцінним арсеналом інструментів для швидкої та ефективної допомоги тим, хто потребує.
Збір на травматологічні матеріали допоможе зменшити час реакції на травматичні випадки, забезпечивши медичні установи необхідними засобами. Кожен внесок в цей збір — це крок до покращення медичної допомоги та рятівного лікування для тих, хто опинився в складних ситуаціях. Приєднуйтеся до нашого волонтерського зусилля, допомагайте нам забезпечувати наші лікарні необхідними ресурсами для надання травматологічної допомоги. Ваш внесок може зробити велику різницю в житті тих, хто потребує допомоги.`,
      conclusion: `
Дякуємо за вашу підтримку та готовність допомагати тим, хто найбільше цього потребує!`,
      supportData: [
        {
          id: '1',
          name: 'Віктор',
          sum: 10000,
          date: 1706611326867,
        },
        {
          id: '2',
          name: 'Віктор',
          sum: 20000,
          date: 1706611381951,
        },
        {
          id: '3',
          name: 'Віктор',
          sum: 30000,
          date: 1706611281951,
        },
        {
          id: '4',
          name: 'Віктор',
          sum: 40000,
          date: 1706611382951,
        },
        {
          id: '5',
          name: 'Віктор',
          sum: 50000,
          date: 1706511381951,
        },
        {
          id: '6',
          name: 'Віктор',
          sum: 60000,
          date: 1706611381051,
        },
        {
          id: '7',
          name: 'Віктор',
          sum: 70000,
          date: 1706611381941,
        },
        {
          id: '8',
          name: 'Віктор',
          sum: 80000,
          date: 1706601381951,
        },
      ],
    },
    en: {
      title: 'Collection for traumatology materials',
      info: `This fundraiser is intended for those who risk their health and safety every day by providing assistance to those in need of trauma care. We aim to support hospitals, emergency medical services, and other institutions providing trauma care.

We are raising funds for the purchase and supply of trauma materials such as dressings, antiseptics, plaster bandages, surgical instruments, and other necessary supplies. Our goal is to equip medical facilities with a comprehensive arsenal of tools for quick and effective assistance to those in need.

The collection for trauma materials will help reduce response time to traumatic incidents, ensuring that medical institutions have the necessary resources. Each contribution to this fundraiser is a step towards improving medical care and life-saving treatment for those facing challenging situations.
Join our volunteer efforts and help us provide our hospitals with the necessary resources for trauma care. Your contribution can make a significant difference in the lives of those in need of assistance.`,
      conclusion: `
Thank you for your support and willingness to help those who need it the most`,
      supportData: [
        {
          id: '1',
          name: 'Bill',
          sum: 10000,
          date: 1706611326867,
        },
        {
          id: '2',
          name: 'Bill',
          sum: 20000,
          date: 1706611381951,
        },
        {
          id: '3',
          name: 'Bill',
          sum: 30000,
          date: 1706611281951,
        },
        {
          id: '4',
          name: 'Bill',
          sum: 40000,
          date: 1706611382951,
        },
        {
          id: '5',
          name: 'Bill',
          sum: 50000,
          date: 1706511381951,
        },
        {
          id: '6',
          name: 'Bill',
          sum: 60000,
          date: 1706611381051,
        },
        {
          id: '7',
          name: 'Bill',
          sum: 70000,
          date: 1706611381941,
        },
        {
          id: '8',
          name: 'Bill',
          sum: 80000,
          date: 1706601381951,
        },
      ],
    },
  };

  return projectData[lang];
};

export default async function Project({ params }: { params: { project: string; lang: Locale } }) {
  const { project, lang } = params;
  const projectDataInfo = await getProjectInfo(project, lang);
  const { project_details } = await getDictionary(lang);

  return <ProjectInfo projectDataInfo={projectDataInfo} project_details={project_details} />;
}
