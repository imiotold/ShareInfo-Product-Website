import { useState } from 'react';
import { Flex, Box, Title, Text, Button, TextInput, SimpleGrid, Paper, ActionIcon } from '@mantine/core';
import { IconMail, IconBrain, IconStarsFilled, IconTargetArrow, IconSparkles } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { em } from '@mantine/core';
import toast, { Toaster } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const SectionFive = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    const [email, setEmail] = useState('');

    const mutation = useMutation({
        mutationFn: async (email) => {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwQyUquaTR4Etv5fN203v9O8s7aIW8-OSheVauj2P1RQjt1zfsgIHzG52q1GwaZhA4K/exec',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                        Email: email
                    })
                }
            );
            return response.json();
        }
    });

    const handleSubscribe = () => {
        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }
        mutation.mutate(email); 
        mutation.isPending && toast.pending('Subscribing...');
        mutation.isSuccess && mutation.data.result === 'error' ?
            toast.error(mutation.data.msg || 'Something went wrong, please try again later.')
        :   toast.success('You have successfully subscribed!');
        mutation.isError && toast.success(mutation.data.msg || 'Something went wrong, please try again later.');
    };

    return (
        <>
            <Toaster position='bottom-right' />
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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Button size='lg' radius={'md'} color='#F94612' onClick={handleSubscribe} loading={mutation.isLoading}>
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
