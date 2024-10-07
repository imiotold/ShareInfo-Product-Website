import { Flex, Text, Button, ActionIcon, SimpleGrid, em, Box, Title, Paper, TextInput } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrain, IconStarsFilled, IconTargetArrow, IconSparkles } from '@tabler/icons-react';

export const SectionFive = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

    return (
        <>
            <Flex
                gap={{ base: 20, sm: 90 }}
                justify={isMobile ? 'center' : 'space-between'}
                align={'center'}
                direction={isMobile ? 'column' : 'row'}>
                <Box>
                    <Title
                        className='text-custom_gradient_orange'
                        style={{ fontFamily: 'Nunito' }}
                        order={isMobile ? 1 : 1}
                        ta={{ base: 'center', md: 'left' }}>
                        Don’t Miss our Latest Updates!
                    </Title>
                    <Text mt={5} ta={{ base: 'center', md: 'left' }}>
                        Do You Like to be the Part of next Era of Placements?
                    </Text>
                </Box>

                <Flex
                    gap={10}
                    style={{ borderRadius: '15px' }}
                    justify={'space-between'}
                    flex={1}
                    p={10}
                    bg={'#090C0D'}
                    direction={'row'}
                    align={'center'}>
                    <TextInput
                        flex={1}
                        variant='unstyled'
                        leftSection={<IconMail style={{ width: '70%', height: '70%' }} />}
                        placeholder='Sign up for Updates'
                    />
                    <Button size='lg' radius={'md'} color='#F94612'>
                        Subscribe
                    </Button>
                </Flex>
            </Flex>

            <SimpleGrid
                className='CapableGrid'
                mt={50}
                cols={{ base: 1, sm: 2, lg: 4 }}
                spacing={{ base: 10, sm: 10 }}
                verticalSpacing={{ base: 10, sm: 10 }}>
                {features.map((feature) => (
                    <Paper
                        onClick={() => {
                            feature.link === '#' ? '' : window.open(feature.link, '_blank');
                        }}
                        bg={'#090C0D'}
                        key={feature.title}
                        className='CapableCard'
                        radius={'lg'}
                        w='100%'>
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

            {/* <Text mt={20} ta={'center'} c={'dimmed'} size='sm'>
                I accept Imiot’s Terms and Conditions <br /> and acknowledge that my information will be used in accordance with <br />
                <Anchor ta={'center'} c={'violet'} size='xs'>
                    Imiot’s Privacy Policy
                </Anchor>
            </Text> */}
        </>
    );
};

const features = [
    {
        title: 'Imiot LearnSpace',
        description: 'Enjoy a smooth and efficient process from start to finish.',
        icon: <IconStarsFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />,
        link: '/learning'
    },
    {
        title: 'Vision 2028',
        description: 'Leverage data to make informed decisions.',
        icon: <IconTargetArrow style={{ width: '70%', height: '70%' }} stroke={1.5} />,
        link: '/vision28'
    },
    {
        title: 'Find Talent',
        description: 'Use AI to find the perfect match for your needs.',
        icon: <IconSparkles style={{ width: '70%', height: '70%' }} stroke={1.5} />,
        link: 'https://recruiter.shareinfo.io/'
    },
    {
        title: 'ShareInfo AI',
        description: 'The Future of Job Hunting Find your dream job faster with tailored opportunities.',
        icon: <IconBrain style={{ width: '70%', height: '70%' }} stroke={1.5} />,
        link: '/shareinfoai'
    }
];
