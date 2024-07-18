import { Dribbble, FacebookTag, X, Instagram } from 'iconoir-react';
import { ReactNode } from 'react';

interface socialLinksProps {
     icon: ReactNode;
     link: string;
     title: string;
}

export const socialLinks: socialLinksProps[] = [
     {
          icon: <Dribbble />,
          link: '#',
          title: 'follow on dribble',
     },
     {
          icon: <FacebookTag />,
          link: '#',
          title: 'follow on facebook',
     },
     {
          icon: <X />,
          link: '#',
          title: 'follow on x',
     },
     {
          icon: <Instagram />,
          link: '#',
          title: 'follow on instagram',
     },
];
