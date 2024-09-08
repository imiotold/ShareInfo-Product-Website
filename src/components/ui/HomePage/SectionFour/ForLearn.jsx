import { Paper, Title, Text, Box, Group, Button, Flex, ActionIcon } from '@mantine/core';
import { IconExternalLink, IconWriting } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export const ForLearn = () => {
    const navigate = useNavigate();

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
                                Build a future-proof workforce. Connect with top talent, globally. ShareInfo simplifies your recruitment
                                journey, with AI powered matching, data-driven insights, and a focus on diversity. Whether you&apos;re a
                                seasoned developer seeking to expand your skillset or a beginner embarking on your coding journey,
                                coshareinfo has the resources to help you achieve your goals.
                            </Text>
                        </Box>
                    </Paper>

                    <Paper bg={'#2B2B2B'} p={10} style={{ borderRadius: '30px', zIndex: 99 }} shadow='lg'>
                        <video style={{ borderRadius: '23px' }} autoPlay muted>
                            <source
                                src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                                type='video/mp4'
                            />
                        </video>
                    </Paper>

                    <Paper w={'90%'} bg={'#090C0D'} p={10} style={{ borderRadius: '0px 0px 30px 30px', zIndex: 90 }}>
                        <Group p={30} justify='space-between' align='center' gap={15} wrap='wrap'>
                            <Text>
                                Build a future-proof workforce. Connect with top talent, globally. ShareInfo simplifies your recruitment
                                journey, with AI-powered matching, data-driven insights, and a focus on diversity. Whether you&apos;re a
                                seasoned developer seeking to expand your skillset or a beginner embarking on your coding journey,
                                coshareinfo has the resources to help you achieve your goals.
                            </Text>
                            <Button
                                size='md'
                                radius={'md'}
                                color='#F94612'
                                onClick={() => navigate('/vision28')}
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
