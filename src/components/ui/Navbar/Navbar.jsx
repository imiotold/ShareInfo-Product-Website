import { useEffect, useState } from 'react';
import { Button, Burger, Flex, Box, em, Group, Image, Text, Drawer, Paper, ActionIcon, Divider } from '@mantine/core';
import { IconExternalLink, IconX } from '@tabler/icons-react';
import Logo from '../../../assets/ShareinfoNavLogo.svg';
import classes from '../../../components/ui/style.module.css';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

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
    const [drawerOpened, setDrawerOpened] = useState(false);
    const navigate = useNavigate();

    const setActive = (navLinkName) => {
        localStorage.setItem('active', navLinkName);
    };

    const [active, setActiveState] = useState('');

    useEffect(() => {
        const activeLink = localStorage.getItem('active');
        if (activeLink) {
            setActiveState(activeLink);
        }
    }, []);

    return (
        <>
            <Flex
                style={{zIndex:20}}
                className='navbar_component w-nav'
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
                                localStorage.clear();
                            }}
                            style={{ cursor: 'pointer' }}
                            mr={30}
                            h={isMobile ? 15 : 25}>
                            <Image h={'100%'} w={'auto'} src={Logo} />
                        </Box>
                    </Group>
                    {!isMobile &&
                        navLinkData.map((item, index) => (
                            <Text
                                key={index}
                                size='sm'
                                onClick={() => {
                                    navigate(`/${item.link}`);
                                    setActive(item.link);
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

            <Drawer style={{zIndex:999999}} opened={drawerOpened} onClose={() => setDrawerOpened(false)} size='sm' withCloseButton={false}>
                <Paper>
                    <Group p={20} justify='space-between'>
                        <Image
                            onClick={() => {
                                navigate('/');
                                localStorage.clear();
                            }}
                            w={'130'}
                            src={Logo}
                        />
                        <ActionIcon onClick={() => setDrawerOpened(false)} radius={'xl'} variant='default' size='md'>
                            <IconX />
                        </ActionIcon>
                    </Group>

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
                                setActive(item.link);
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
