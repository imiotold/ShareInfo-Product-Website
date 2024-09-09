import { Flex, Stack, Text, Group, Badge, Box, Image, Divider, Anchor, ActionIcon } from '@mantine/core';
// import ImiotLogo from '../../../assets/ImiotLogo.png';
import ShareInfoLogo from '../../../assets/ShareinfoNavLogo.svg';
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from '@tabler/icons-react';
// import FluidWall from '../../../assets/fluu.png';

export const Footer = () => {
    return (
        <>
            <Flex mt={50} bg={'#090C0D'} id='footer' direction={'column'} align={'center'}>
                <Flex
                    pt={60}
                    gap={20}
                    direction={{ base: 'column', md: 'row' }}
                    wrap={'wrap'}
                    justify={'space-between'}
                    w={{ base: '90%', md: '70%' }}>
                    <Box h={30}>
                        <Image src={ShareInfoLogo} h={'100%'} w={'auto'} />
                    </Box>

                    <Stack>
                        <Text c={'white'} fw={700} size='sm'>
                            About
                        </Text>
                        <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            Our journey
                        </Anchor>
                        <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            ShareInfo for Learn
                        </Anchor>
                        <Anchor
                            onClick={() => window.open('https://careers.imiot.co.in/', '_blank')}
                            fw={700}
                            variant='gradient'
                            gradient={{ from: 'grape', to: 'orange', deg: 90 }}
                            size='sm'
                            c={'#C9C9C9'}
                            href='#'
                            target='_blank'>
                            Careers
                        </Anchor>

                        <Group>
                            <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                                Merchantise
                            </Anchor>

                            <Badge size='xs' variant='light' color='violet'>
                                Coming Soon!
                            </Badge>
                        </Group>
                    </Stack>
                    <Stack>
                        <Text c={'white'} fw={700} size='sm'>
                            Product
                        </Text>
                        <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            Integrations
                        </Anchor>
                        <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            Pricing
                        </Anchor>
                        <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            Community
                        </Anchor>

                        <Group>
                            <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                                Changelog
                            </Anchor>

                            <Badge size='xs' variant='light' color='violet'>
                                What&apos;s New!
                            </Badge>
                        </Group>
                    </Stack>
                    <Stack>
                        <Text c={'white'} fw={700} size='sm'>
                            Our Terms
                        </Text>
                        <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            Privacy Policy
                        </Anchor>
                        <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            Terms & Conditions
                        </Anchor>
                        <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            Refund & Payment Policy
                        </Anchor>
                        <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            Raise an issue
                        </Anchor>
                    </Stack>
                </Flex>

                <Divider mt={40} w={{ base: '90%', md: '70%' }} />

                <Group align='center' py={20} gap={10} w={{ base: '90%', md: '70%' }} wrap='wrap' justify='space-between'>
                    <Group gap={30} justify='start'>
                        <Box h={50}>
                            <Image src={'https://imiot.co.in/assets/images/footer/logo.png'} h={'100%'} w={'auto'} />
                        </Box>
                        <Anchor onClick={() => window.open('https://www.imiot.co.in/', '_blank')} size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            About Imiot
                        </Anchor>
                        <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            Imiot Products Line-Up
                        </Anchor>
                        <Anchor size='sm' c={'#C9C9C9'} href='#' target='_blank' underline='never'>
                            Contact
                        </Anchor>
                    </Group>

                    <Group gap={10}>
                        <ActionIcon onClick={() => window.open('https://www.instagram.com/shareinfo.io', '_blank')} size={'lg'} variant='transparent' color='gray' aria-label='Settings'>
                            <IconBrandInstagram style={{ width: '70%', height: '70%' }} stroke={1.5} />
                        </ActionIcon>
                        {/* <ActionIcon onClick={() => window.open('https://youtu.be/NZE0Pfs4c9A', '_blank')} size={'lg'} variant='transparent' color='gray' aria-label='Settings'>
                            <IconBrandX style={{ width: '70%', height: '70%' }} stroke={1.5} />
                        </ActionIcon> */}
                        <ActionIcon onClick={() => window.open('https://www.linkedin.com/company/imiot?originalSubdomain=in', '_blank')} size={'lg'} variant='transparent' color='gray' aria-label='Settings'>
                            <IconBrandLinkedin style={{ width: '70%', height: '70%' }} stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon onClick={() => window.open('https://youtu.be/NZE0Pfs4c9A', '_blank')} size={'lg'} variant='transparent' color='gray' aria-label='Settings'>
                            <IconBrandYoutube style={{ width: '70%', height: '70%' }} stroke={1.5} />
                        </ActionIcon>
                    </Group>
                </Group>
            </Flex>
        </>
    );
};
