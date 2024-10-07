import { Paper, Title, Text, Box, Group, Button, Flex, ActionIcon } from '@mantine/core';
import { IconExternalLink, IconWriting } from '@tabler/icons-react';

export const ForLearn = () => {
    return (
        <>
            <div>
                <Flex direction={'column'} align={'center'} justify={'center'}>
                    <Paper w={'90%'} bg={'#090C0D'} p={10} style={{ borderRadius: '30px 30px 0px 0px', zIndex: 90 }} mt={20}>
                        <Box p={30}>
                            <Group mb={20} justify='space-between' align='center' wrap='wrap-reverse'>
                                <Title className='text-custom_gradient_orange' style={{ fontFamily: 'Nunito' }} order={1}>
                                    For Learn
                                </Title>
                                <ActionIcon variant='light' color={'orange'} size='xl' radius='md' aria-label='Settings'>
                                    <IconWriting />
                                </ActionIcon>
                            </Group>

                            <Text ta={'justify'}>
                                Level Up Your Tech Game. Tired of the same old tech tutorials? Ready to become a real-deal tech wizard? Join
                                our community of passionate learners and dive into our cutting-edge courses, designed to take your skills to
                                the next level.
                            </Text>
                        </Box>
                    </Paper>

                    <Paper bg={'#2B2B2B'} p={10} style={{ borderRadius: '30px', zIndex: 99 }} shadow='lg'>
                        <video style={{ borderRadius: '23px' }} loop autoPlay muted>
                            <source
                                src={'https://res.cloudinary.com/dow8tfote/video/upload/f_auto:video,q_auto/pomy9qbyyls9dit8kslv'}
                                type='video/mp4'
                            />
                        </video>
                    </Paper>

                    <Paper w={'90%'} bg={'#090C0D'} p={10} style={{ borderRadius: '0px 0px 30px 30px', zIndex: 90 }}>
                        <Group p={30} justify='space-between' align='center' gap={15} wrap='wrap'>
                            <Text ta={'justify'}>
                                No more boring lectures. We're all about hands-on projects, real-world challenges, and a supportive
                                community that's always ready to help you out. Whether you're a coding newbie or a seasoned pro looking to
                                level up, we've got something for everyone. So, what are you waiting for? Let's turn your tech dreams into
                                reality together.
                            </Text>
                            <Button
                                size='md'
                                radius={'md'}
                                color='#F94612'
                                onClick={() => window.open('https://web.shareinfo.io/redirect', '_blank', 'noopener,noreferrer')}
                                rightSection={<IconExternalLink style={{ width: '70%', height: '70%' }} />}>
                                Explore our Resource Range
                            </Button>
                        </Group>
                    </Paper>
                </Flex>
            </div>
        </>
    );
};
