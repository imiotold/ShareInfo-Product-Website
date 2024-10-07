import { Flex, Text, Button, ActionIcon, SimpleGrid, Title, Paper, Group } from '@mantine/core';
import { IconStarsFilled, IconTargetArrow, IconSparkles } from '@tabler/icons-react';

export const Internship = () => {
    return (
        <div>
            <Title className='text-custom_gradient_orange' style={{ fontFamily: 'Nunito' }} order={1} ta={{ base: 'center' }}>
                Find a Job/Internship
            </Title>
            <Flex justify={'center'} align={'center'}>
                <Text mt={5} ta={{ base: 'center' }} w={{ base: '90%', md: '45%' }}>
                    Find your perfect tech job on ShareInfo&apos;s curated job board. Discover exciting opportunities tailored to fresh
                    graduates.
                </Text>
            </Flex>

            <SimpleGrid
                className='CapableGrid'
                mt={50}
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing={{ base: 10, sm: 10 }}
                verticalSpacing={{ base: 10, sm: 10 }}>
                {features.map((feature) => (
                    <Paper bg={'#090C0D'} key={feature.title} className='CapableCard' radius={'lg'} w='100%'>
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
                    Find Top Paid Internships from ShareInfo Jobs
                </Button>
            </Group>
        </div>
    );
};

const features = [
    {
        title: 'Targeted Job Listings',
        description: 'Find relevant job openings based on your skills, interests, and location.',
        icon: <IconStarsFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Expert Guidance',
        description: 'Get tips on crafting a winning resume and preparing for interviews.',
        icon: <IconTargetArrow style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Networking Opportunities',
        description: 'Connect with industry professionals and potential employers.',
        icon: <IconSparkles style={{ width: '70%', height: '70%' }} stroke={1.5} />
    }
];
