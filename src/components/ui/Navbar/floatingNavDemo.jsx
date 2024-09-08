import { FloatingNav } from './floating-navbar';
import { IconHome, IconMessage, IconInfoCircle, IconMoodHappy, IconTimeline, IconUsersGroup, IconSparkles } from '@tabler/icons-react';

export function FloatingNavDemo() {
    const navItems = [
        {
            name: 'ShareInfo',
            link: '#shareinfo',
            icon: <IconHome className='h-4 w-4 text-white' />
        },
        {
            name: 'Features',
            link: '#features',
            icon: <IconSparkles className='h-4 w-4 text-white' />
        },
        {
            name: 'Future Scope',
            link: '#futurescope',
            icon: <IconTimeline className='h-4 w-4 text-white' />
        },
        {
            name: 'Collaborations',
            link: '#collaborations',
            icon: <IconUsersGroup className='h-4 w-4 text-white' />
        },
        {
            name: 'Partners',
            link: '#collaborations',
            icon: <IconMoodHappy className='h-4 w-4 text-white' />
        },
        // {
        //     name: 'Experts Opinions',
        //     link: '/about',
        //     icon: <IconMicrophone2 className='h-4 w-4 text-white' />
        // },
        {
            name: 'About us',
            link: '#footer',
            icon: <IconInfoCircle className='h-4 w-4 text-white' />
        },
        {
            name: 'Contact',
            link: '#footer',
            icon: <IconMessage className='h-4 w-4 text-white' />
        }
    ];
    return (
        <div className='relative w-full'>
            <FloatingNav navItems={navItems} />
        </div>
    );
}
