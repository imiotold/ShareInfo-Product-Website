import { Flex, Text, Button, ActionIcon, SimpleGrid, Title, Paper, Group } from '@mantine/core';
import { IconStarsFilled, IconTrendingUp, IconTools, IconBriefcase, IconHelpCircle } from '@tabler/icons-react';

export const Connections = () => {
    return (
        <div>
            <Title className='text-custom_gradient_orange' style={{ fontFamily: 'Nunito' }} order={1} ta={{ base: 'center' }}>
                Connections
            </Title>
            <Flex justify={'center'} align={'center'}>
                <Text mt={5} ta={{ base: 'center' }} w={{ base: '90%', md: '45%' }}>
                    Master tech skills, land your dream job. Access curated resources, practice coding, and connect with top mentors. Our
                    personalized learning paths and expert guidance will help you succeed.
                </Text>
            </Flex>

            <SimpleGrid
                className='CapableGrid'
                mt={50}
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing={{ base: 10, sm: 10 }}
                verticalSpacing={{ base: 10, sm: 10 }}>
                {features.map((feature, index) => (
                    <Paper bg={'#090C0D'} key={index} className='CapableCard' radius={'lg'} w='100%'>
                        <Flex p={30} direction={'column'} align={{ base: 'center', sm: 'start' }}>
                            <ActionIcon variant='light' color={'orange'} size='xl' radius='md' aria-label='Settings'>
                                {feature.icon}
                            </ActionIcon>

                            <Title ta={{ base: 'center', sm: 'left' }} mt={20} order={4} c={'white'} style={{ fontFamily: 'Nunito' }}>
                                {feature.title}
                            </Title>
                            <Text ta={{ base: 'center', sm: 'left' }} size='sm' c={'dimmed'} mt={10}>
                                {feature.description}
                            </Text>
                        </Flex>
                    </Paper>
                ))}
            </SimpleGrid>

            <Group mt={20} justify='center'>
                <Button onClick={() => window.open('http://web.shareinfo.io/', '_blank')} color='#F94612' radius='md'>
                    Top Mentors in ShareInfo Connections
                </Button>
            </Group>
        </div>
    );
};

const features = [
    {
        title: 'Personalized Mentorship',
        description: 'Mentors can provide tailored guidance based on individual goals and learning styles.',
        icon: <IconStarsFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Industry Insights',
        description: 'Mentors can offer valuable insights into the cutting-edge developments in the tech industry.',
        icon: <IconTrendingUp style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Skill Development',
        description: 'Mentors can provide feedback and support to help aspirants develop essential tech skills.',
        icon: <IconTools style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Career Advice',
        description: 'Mentors can offer advice on job searching, networking, and career advancement.',
        icon: <IconBriefcase style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Technical Support',
        description: 'Mentors can help with troubleshooting technical issues and answering questions.',
        icon: <IconHelpCircle style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Realtime Assistance',
        description: <div>Overcome technical challenges with ease. Get personalized support from a dedicated mentor.</div>,
        icon: <IconTrendingUp style={{ width: '70%', height: '70%' }} stroke={1.5} />
    }
];
