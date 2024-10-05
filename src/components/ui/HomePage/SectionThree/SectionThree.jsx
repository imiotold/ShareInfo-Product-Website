import { Flex, SimpleGrid, Text, Paper, Title, ActionIcon } from '@mantine/core';

import {
    IconBrain,
    IconDatabase,
    IconVersions,
    IconUniverse,
    IconChartArrowsVertical,
    IconHandClick,
    IconTriangles,
    IconCertificate
} from '@tabler/icons-react';

export const SectionThree = () => {
    const features = [
        {
            title: 'Global Talent Pool',
            description: 'Access a worldwide network of skilled professionals.',
            icon: <IconTriangles style={{ width: '70%', height: '70%' }} stroke={1.5} />
        },
        {
            title: 'Unwavering Support',
            description: 'Receive constant support whenever you need it.',
            icon: <IconHandClick style={{ width: '70%', height: '70%' }} stroke={1.5} />
        },
        {
            title: 'Affordable & Scalable',
            description: 'Our services are cost-effective and easily scalable.',
            icon: <IconChartArrowsVertical style={{ width: '70%', height: '70%' }} stroke={1.5} />
        },
        {
            title: 'Inclusion Promise',
            description: 'We are committed to fostering diversity and inclusion.',
            icon: <IconUniverse style={{ width: '70%', height: '70%' }} stroke={1.5} />
        },
        {
            title: 'Streamlined Process',
            description: 'Enjoy a smooth and efficient process from start to finish.',
            icon: <IconVersions style={{ width: '70%', height: '70%' }} stroke={1.5} />
        },
        {
            title: 'Data-driven Insights',
            description: 'Leverage data to make informed decisions.',
            icon: <IconDatabase style={{ width: '70%', height: '70%' }} stroke={1.5} />
        },
        {
            title: 'AI-powered Matching',
            description: 'Use AI to find the perfect match for your needs.',
            icon: <IconBrain style={{ width: '70%', height: '70%' }} stroke={1.5} />
        },
        {
            title: 'Quality Assurance',
            description: 'Rigorous quality checks and processes.',
            icon: <IconCertificate style={{ width: '70%', height: '70%' }} stroke={1.5} />
        }
    ];

    return (
        <>
            <Title order={1} ta={'center'} style={{ fontFamily: 'Nunito' }} c={'white'}>
                We Capable for
            </Title>
            <SimpleGrid
                className='CapableGrid'
                mt={50}
                cols={{ base: 1, sm: 2, lg: 4 }}
                spacing={{ base: 10, sm: 10 }}
                verticalSpacing={{ base: 10, sm: 10 }}>
                {features.map((feature, index) => (
                    <Paper bg={'#090C0D'} key={index} className='CapableCard' radius={'lg'} w='100%'>
                        <Flex p={30} direction={'column'} align={{ base: 'center', sm: 'start' }}>
                            <ActionIcon variant='light' color={'#7857FB'} size='xl' radius='md' aria-label='Settings'>
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
        </>
    );
};
