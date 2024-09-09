import { Flex, Text, Title, Image, rem, Button, Paper, Stack, Badge, Box } from '@mantine/core';
import { IconBow, IconRosetteDiscountCheck, IconActivity } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export const CaseStudies = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <Flex align={'center'} direction={'column'}>
                <Title c={'white'} style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                    Case Studies and Analysis Reports
                </Title>
                <Text w={{ base: '90%', md: '40%' }} ta={'center'}>
                    We Try to Make our Products to it’s peak capable model to achieve the best User Experience and Utility{' '}
                </Text>
            </Flex>
            <Flex mt={20} gap={10} justify={isMobile ? 'center' : 'space-between'} align={'center'} direction={isMobile ? 'column' : 'row'}>
                {caseStudyData.map((item, index) => (
                    <>
                        <Flex w={'100%'} direction={'column'}>
                            <Box w={'100%'} h={150}>
                                <Image fit='cover' style={{ borderRadius: '15px 15px 0px 0px' }} h={'100%'} src={item.imageUrl} />
                            </Box>

                            <Paper
                                key={index}
                                w={'100%'}
                                h={'100%'}
                                bg={'#090C0D'}
                                p={25}
                                style={{ borderRadius: '0px 0px 15px 15px' }}
                                shadow='lg'>
                                <Stack align='start' flex={1} gap={3}>
                                    <Text c={'dimmed'} size='sm'>
                                        {item.date}
                                    </Text>
                                    <Text>{item.description}</Text>
                                </Stack>
                            </Paper>
                        </Flex>
                    </>
                ))}
            </Flex>

            <Flex mt={10} gap={10} justify={isMobile ? 'center' : 'space-between'} align={'center'} direction={isMobile ? 'column' : 'row'}>
                {paperWithButtonData.map((item, index) => (
                    <Paper key={index} w={'100%'} bg={'#090C0D'} p={25} style={{ borderRadius: '15px' }} shadow='lg'>
                        <Stack>
                            <Badge radius={'md'} leftSection={item.icon} size='lg' variant='light' color={item.color}>
                                {item.title}
                            </Badge>
                            <Text>{item.description}</Text>
                        </Stack>
                    </Paper>
                ))}
            </Flex>
            <Button
                mt={10}
                w={'100%'}
                size='lg'
                radius={'md'}
                color='#414ECA'
                onClick={() => window.open('https://careers.imiot.co.in/', '_blank', 'noopener,noreferrer')}
                rightSection={<IconBow style={{ width: '70%', height: '70%' }} />}>
                Start Your FREE Trial Now
            </Button>
        </>
    );
};

const paperWithButtonData = [
    {
        title: 'Validation',
        description: 'We bridge the gap between theory and practice, equipping students with practical skills for the job market.',
        icon: <IconRosetteDiscountCheck style={{ width: rem(16), height: rem(16) }} />,
        color: 'indigo'
    },
    {
        title: 'Actionable Insights',
        description:
            'A Collaborative Approach to Bridge the Gap Between Theoretical Knowledge and Practical Application',
        icon: <IconActivity style={{ width: rem(16), height: rem(16) }} />,
        color: 'blue'
    }
];

const caseStudyData = [
    {
        date: 'May 23',
        description: 'Real-World Learning for Industry Success',
        imageUrl:
            'https://images.unsplash.com/photo-1687463221023-02f259da7d77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        date: 'June 10',
        description: 'Industry-Academia Collaboration',
        imageUrl:
            'https://images.unsplash.com/photo-1687463221020-b8769b32c622?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];
