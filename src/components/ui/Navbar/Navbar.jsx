import { useEffect, useState } from 'react';
import { Button, Burger, Flex, Box, em, Group, Image, Text, Drawer, Paper } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import classes from '../../../components/ui/style.module.css';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinkData = [
    {
        link: 'aspirants',
        title: 'Aspirants',
        description: 'Showcase your talent with pre-screening and certifications.'
    },
    {
        link: 'campus',
        title: 'Campus',
        description: 'Equip students, simplify process, attract employers, Boost placements.'
    },
    {
        link: 'employers',
        title: 'Recruiters',
        description: 'faster. Pre-qualified candidates, data-driven matching, and smooth communication; all in one Suit.'
    },
    {
        link: 'learning',
        title: 'Learning',
        description: 'faster. Pre-qualified candidates, data-driven matching, and smooth communication; all in one Suit.'
    }
];

export const Navbar = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(600)})`);
    const navigate = useNavigate();
    const location = useLocation();
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [active, setActiveState] = useState('');

    useEffect(() => {
        const currentPath = location.pathname.split('/')[1];
        setActiveState(currentPath);
    }, [location.pathname]);

    return (
        <>
            <Flex
                className='navbar_component w-nav'
                style={{ zIndex: 2147483646 }}
                align={'center'}
                justify={'space-between'}
                h={isMobile ? 60 : 80}
                px={isMobile ? 10 : '7%'}>
                <Flex align={'center'} gap={isMobile ? 0 : 30}>
                    <Group align='center' justify='center'>
                        {isMobile && <Burger opened={drawerOpened} onClick={() => setDrawerOpened((o) => !o)} size='sm' color='white' />}
                        <Box
                            onClick={() => {
                                navigate('/');
                            }}
                            style={{ cursor: 'pointer' }}
                            mr={30}
                            h={isMobile ? 15 : 25}>
                            <Image
                                h={'100%'}
                                w={'auto'}
                                src={'https://res.cloudinary.com/dow8tfote/image/upload/v1728315780/o0gfohi5lskipli6wk2g.svg'}
                            />
                        </Box>
                    </Group>
                    {!isMobile &&
                        navLinkData.map((item) => (
                            <Text
                                key={item.title}
                                size='sm'
                                onClick={() => {
                                    navigate(`/${item.link}`);
                                }}
                                className={classes.hoverclass}
                                c={active === item.link ? 'orange' : ''}>
                                {item.title}
                            </Text>
                        ))}
                </Flex>

                <Button
                    size={isMobile ? 'xs' : 'sm'}
                    radius={'md'}
                    color='#F94612'
                    onClick={() => window.open('https://web.shareinfo.io/redirect', '_blank', 'noopener,noreferrer')}
                    rightSection={<IconExternalLink style={{ width: '70%', height: '70%' }} />}>
                    Get Started
                </Button>
            </Flex>

            <Drawer
                style={{ zIndex: 2147483647 }}
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                size='sm'
                withCloseButton={false}>
                <Paper>
                    <Group p={20} justify='space-between'></Group>

                    <Flex p={20} direction={'column'}>
                        <Text size='lg' fw={600} variant='gradient' gradient={{ from: 'blue', to: 'white', deg: 90 }}>
                            ShareInfo suites
                        </Text>
                        <Text size='sm'>
                            ShareInfo Suites offer a one-stop shop for placements and competitive learning. It&apos;s a win-win for
                            placement success.
                        </Text>
                    </Flex>

                    {navLinkData.map((item, index) => (
                        <Flex
                            key={index}
                            p={20}
                            onClick={() => {
                                navigate(`/${item.link}`);
                            }}
                            style={{ cursor: 'pointer', borderRadius: '20px' }}
                            radius={'md'}
                            bg={active === item.link ? 'black' : ''}
                            direction={'column'}>
                            <Text size='lg' fw={600} c={active === item.link ? 'orange' : 'blue'}>
                                {item.title}
                            </Text>
                            <Text size='sm'>{item.description}</Text>
                        </Flex>
                    ))}
                </Paper>
            </Drawer>
        </>
    );
};
