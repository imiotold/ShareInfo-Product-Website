import { Flex, Text, Button, ActionIcon, SimpleGrid, Title, Paper, Group } from '@mantine/core';
import { IconBrain, IconStarsFilled, IconTargetArrow, IconSparkles } from '@tabler/icons-react';

export const SectionOne = () => {
    return (
        <div>
            <Title className='text-custom_gradient_orange' style={{ fontFamily: 'Nunito' }} order={1} ta={{ base: 'center' }}>
                Learning
            </Title>
            <Flex justify={'center'} align={'center'}>
                <Text mt={5} ta={{ base: 'center' }} w={{ base: '90%', md: '45%' }}>
                    Level up your tech career with ShareInfo. Our curated resources and expert guidance will help you land your dream job.
                </Text>
            </Flex>

            <SimpleGrid
                className='CapableGrid'
                mt={50}
                cols={{ base: 1, sm: 2, lg: 4 }}
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
                    Explore Top Learning Resources to Crack the Top Tech Career
                </Button>
            </Group>
        </div>
    );
};

const features = [
    {
        title: 'Practice Ultimate',
        description: 'Top performance across various industry benchmarks.',
        icon: <IconStarsFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Explore Innovations',
        description: 'Cutting-edge technology for enhanced user experiences.',
        icon: <IconTargetArrow style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Boost Creativity',
        description: 'Inspiring solutions for design challenges.',
        icon: <IconSparkles style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Drive Efficiency',
        description: 'Effortless tools to streamline your workflow.',
        icon: <IconBrain style={{ width: '70%', height: '70%' }} stroke={1.5} />
    }
];
