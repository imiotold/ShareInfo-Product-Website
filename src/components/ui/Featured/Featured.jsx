import { Flex, Title, Text, Image, Group, Box, Paper, Stack, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
export const Featured = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <>
            <Flex justify={'center'} align={'center'} direction={'column'}>
                <Title c={'white'} style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                    Why We Recommend ShareInfo for You!!
                </Title>
                <Text ta={'center'}>
                    Kickstart Your Career with ShareInfo, We assure it will <br /> be Your Perfect Placement Companion
                </Text>

                <SimpleGrid mt={30} cols={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 10, sm: 10 }} verticalSpacing={{ base: 10, sm: 10 }}>
                    <>
                        {feactData.map((item, index) => (
                            <Flex key={index} w={'100%'} h={'100%'} direction={'column'}>
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
                                                ShareInfo Feeds
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
                </SimpleGrid>
            </Flex>
        </>
    );
};

const feactData = [
    {
        date: 'May 2024',
        news: 'AIN News',
        imageUrl:
            'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: <div>Revolutionizing Recruitment: ShareInfo&#39;s Innovative Approach</div>,
        description: (
            <div>
                ShareInfo is more than just a platform; it&#39;s a paradigm shift in the way recruitment is done. Our innovative approach
                combines cutting-edge technology with a deep understanding of human behavior to create a seamless and efficient experience
                for both candidates and recruiters.
            </div>
        )
    },
    {
        date: 'July 2024',
        news: 'AIN News',
        imageUrl:
            'https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8fDA%3D',
        title: 'ShareInfo: Bridging the Gap Between Talent and Opportunity',
        description:
            'As a modern talent solution, ShareInfo connects businesses with the most qualified candidates, bridging the gap between talent and opportunity. Our AI-powered matching algorithms analyze candidate profiles and job descriptions to identify the best matches, saving recruiters time and effort.'
    },
    {
        date: 'Aug 2024',
        news: 'AIN News',
        imageUrl:
            'https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'ShareInfo: The Future of Talent Acquisition',
        description:
            'Our innovative platform is designed to streamline the hiring process, connect businesses with top talent, and foster meaningful connections between candidates and recruiters. With ShareInfo, you can experience the future of recruitment, where efficiency, effectiveness, and equity are paramount. '
    }
];
