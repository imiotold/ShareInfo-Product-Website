import { Flex, Text, Button, ActionIcon, SimpleGrid, Title, Paper, Group } from '@mantine/core';
import { IconStarsFilled, IconTargetArrow, IconSparkles } from '@tabler/icons-react';

export const Challenges = () => {
    return (
        <div>
            <Title className='text-custom_gradient_orange' style={{ fontFamily: 'Nunito' }} order={1} ta={{ base: 'center' }}>
                Challenges
            </Title>
            <Flex justify={'center'} align={'center'}>
                <Text mt={5} ta={{ base: 'center' }} w={{ base: '90%', md: '45%' }}>
                    Conquer coding challenges and land your dream tech job with ShareInfo. Our expert guidance and practice problems will
                    equip you for success.
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
                <Button color='#F94612' radius='md'>
                    Explore Top Challenges of the Season
                </Button>
            </Group>
        </div>
    );
};

const features = [
    {
        title: 'Job Hunt Mode',
        description: 'Crushing it in all sorts of industry benchmarks!',
        icon: <IconStarsFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Practice Unlimited Mode',
        description: 'Achieve top performance across various industry benchmarks.',
        icon: <IconTargetArrow style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'Competition Mode',
        description: 'Consistently achieving top scores on industry certifications.',
        icon: <IconSparkles style={{ width: '70%', height: '70%' }} stroke={1.5} />
    }
];
