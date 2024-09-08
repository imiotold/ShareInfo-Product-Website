import { Flex, Title, Text, Image, Group, Box, Paper, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
export const Featured = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <>
            <Flex justify={'center'} align={'center'} direction={'column'}>
                <Title c={'white'} style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                    We Were Featured at
                </Title>
                <Text ta={'center'}>
                    Kickstart Your Career with ShareInfo, We assure it will <br /> be Your Perfect Placement Companion
                </Text>

                <Flex
                    mt={20}
                    gap={'md'}
                    justify={isMobile ? 'center' : 'space-between'}
                    align={'center'}
                    direction={isMobile ? 'column' : 'row'}>
                    <>
                        {feactData.map((item, index) => (
                            <Flex key={index} w={'100%'} direction={'column'}>
                                <Box key={index} w={'100%'} h={150}>
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
                                    <Stack align='start' gap={3}>
                                        <Group w={'100%'} justify='space-between'>
                                            <Text c={'dimmed'} size='xs'>
                                                {item.date}
                                            </Text>
                                            <Text c={'dimmed'} size='xs'>
                                                {item.news}
                                            </Text>
                                        </Group>

                                        <Text mt={10}>{item.title}</Text>
                                        <Text mt={5} size='sm' c='dimmed'>
                                            {item.description}
                                        </Text>
                                    </Stack>
                                </Paper>
                            </Flex>
                        ))}
                    </>
                </Flex>
            </Flex>
        </>
    );
};

const feactData = [
    {
        date: 'May 2024',
        news: 'AIN News',
        imageUrl:
            'https://images.unsplash.com/photo-1570179538662-faa5e38e9d8f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'ShareInfo breaks new ground: a modern suit for Placements and recruitment',
        description:
            'The world of placements and recruitment is undergoing a transformation. Gone are the days of rigid, one-size-fits-all approaches. ShareInfo steps forward...'
    },
    {
        date: 'May 2024',
        news: 'AIN News',
        imageUrl:
            'https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8fDA%3D',
        title: 'ShareInfo breaks new ground: a modern suit for Placements and recruitment',
        description:
            'The world of placements and recruitment is undergoing a transformation. Gone are the days of rigid, one-size-fits-all approaches. ShareInfo steps forward...'
    },
    {
        date: 'May 2024',
        news: 'AIN News',
        imageUrl:
            'https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'ShareInfo breaks new ground: a modern suit for Placements and recruitment',
        description:
            'The world of placements and recruitment is undergoing a transformation. Gone are the days of rigid, one-size-fits-all approaches. ShareInfo steps forward...'
    }
];
