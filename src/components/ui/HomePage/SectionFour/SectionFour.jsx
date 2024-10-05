import { Title, rem, Text, Group, em, Badge, List, ThemeIcon, Card } from '@mantine/core';
import { IconTargetArrow, IconNetwork, IconBulldozer, IconTarget } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export const SectionFour = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

    const visionData = [
        {
            year: '2025',

            color: 'yellow',
            listdata: [
                'Global Talent Pool',
                'Unwavering Support',
                'Affordable & Scalable',
                'Diversity & Inclusion Commitment',
                'Streamlined Process',
                'Data-driven Insights',
                'AI-powered Matching',
                'Continuous Improvement',
                'Personalized Candidate Experience',
                'Performance Prediction',
                'Employer Branding Optimization',
                'Collaborative Hiring'
            ]
        },
        {
            year: '2028',
            color: 'orange',
            listdata: [
                'Global Talent Pool',
                'Unwavering Support',
                'Affordable & Scalable',
                'Diversity & Inclusion Commitment',
                'Streamlined Process',
                'Data-driven Insights',
                'AI-powered Matching',
                'Continuous Improvement',
                'Personalized Candidate Experience',
                'Performance Prediction',
                'Employer Branding Optimization',
                'Collaborative Hiring'
            ]
        },
        {
            year: '2030',
            color: 'blue',
            listdata: [
                'Global Talent Pool',
                'Unwavering Support',
                'Affordable & Scalable',
                'Diversity & Inclusion Commitment',
                'Streamlined Process',
                'Data-driven Insights',
                'AI-powered Matching',
                'Continuous Improvement',
                'Personalized Candidate Experience',
                'Performance Prediction',
                'Employer Branding Optimization',
                'Collaborative Hiring'
            ]
        }
    ];

    return (
        <>
            <Title className='text-custom_gradient_blue' style={{ fontFamily: 'Nunito' }} order={isMobile ? 1 : 1} ta={{ base: 'center' }}>
                What’s our Vision for the Future
            </Title>
            <Group mt={10} justify='center' align='center' gap={10} wrap='wrap'>
                <Badge leftSection={<IconBulldozer style={{ width: rem(12), height: rem(12) }} />} size='lg' variant='light'>
                    Build a future-proof workforce
                </Badge>
                <Badge leftSection={<IconNetwork style={{ width: rem(12), height: rem(12) }} />} size='lg' variant='light' color='indigo'>
                    Connect with top talent, globally
                </Badge>
            </Group>

            <Text mt={10} size='md' ta={{ base: 'center' }}>
                ShareInfo simplifies your recruitment journey, with AI-powered matching, data-driven insights, and a focus on diversity.
            </Text>

            {/* <SimpleGrid
                mt={40}
                cols={{ base: 1, sm: 3, lg: 3 }}
                spacing={{ base: 'lg', sm: 'lg' }}
                verticalSpacing={{ base: 'lg', sm: 'lg' }}>
                {visionData.map((item, index) => (
                    <Paper key={index} bg={'#090C0D'} p={30} radius={'lg'} w='100%'>
                        <Group justify='start'>
                            <Badge
                                mb={20}
                                color={item.color}
                                leftSection={<IconTargetArrow style={{ width: rem(16), height: rem(16) }} />}
                                size='xl'
                                variant='light'>
                                Vision {item.year}
                            </Badge>
                        </Group>

                        <List
                            mt={10}
                            spacing='md'
                            size='sm'
                            center
                            icon={
                                <ThemeIcon color={item.color} variant='light' size={24} radius='xl'>
                                    <IconTarget style={{ width: rem(16), height: rem(16) }} />
                                </ThemeIcon>
                            }>
                            {item.listdata.map((item, index) => (
                                <List.Item key={index}>{item}</List.Item>
                            ))}
                        </List>
                    </Paper>
                ))}
            </SimpleGrid> */}

            <Card p={'xl'} radius={'lg'} mt={'lg'} style={{ backgroundColor: 'rgb(9, 12, 13)' }}>
                <Badge
                    mb={20}
                    color='violet'
                    leftSection={<IconTargetArrow style={{ width: rem(16), height: rem(16) }} />}
                    size='xl'
                    variant='light'>
                    Vision 2025
                </Badge>
                By 2025, we will be the undisputed leader in campus placement management, connecting over 100 campuses with 500+ recruiters.
                Our platform will provide comprehensive support to students through a network of 100+ dedicated mentors.
                <br /> <br />
                {/* <Badge
                    mb={10}
                    color='violet'
                    leftSection={<IconTargetArrow style={{ width: rem(16), height: rem(16) }} />}
                    size='xl'
                    variant='light'>
                    Key Goals
                </Badge> */}
                <List
                    mt={0}
                    spacing='md'
                    size='md'
                    center
                    icon={
                        <ThemeIcon color={'violet'} variant='light' size={24} radius='xl'>
                            <IconTarget style={{ width: rem(16), height: rem(16) }} />
                        </ThemeIcon>
                    }>
                    {d.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                    ))}
                </List>
            </Card>
        </>
    );
};

const d = [
    'Expand our network: Connect with even more campuses and recruiters across India and beyond. ',
    'Enhance our platform: Leverage technology to streamline the job application and matching process.',
    'Strengthen our mentorship program: Provide personalized career guidance and support to students. ',
    'Foster a positive impact: Promote diversity, equity, and inclusion in the workplace.'
];
