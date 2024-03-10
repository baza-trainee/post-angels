import { IconLink } from '@/components/buttons/IconLink';
import { StaticDataSocialIcon, ProjectSocialProps } from '../ProjectPage.props';
import dynamic from 'next/dynamic';

export const SocialIcon = ({
  icon,
  social,
}: {
  icon: StaticDataSocialIcon;
  social: ProjectSocialProps;
}) => {
  const Icon = dynamic(() => import(`../../../../public/icons/project/${icon.src}`), {
    ssr: false,
  });

  return (
    <li>
      <IconLink
        label={icon.label}
        className={`h-10 w-10 transition-all duration-300 ${
          icon.name === 'instagram'
            ? 'fill-grey-100 hover:fill-accent-primary focus:fill-accent-primary'
            : 'stroke-grey-100 hover:stroke-accent-primary focus:stroke-accent-primary'
        }`}
        href={social.link || ''}
        blank
      >
        <Icon />
      </IconLink>
    </li>
  );
};
