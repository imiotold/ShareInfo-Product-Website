import { Flex, Text, Title, SimpleGrid, Group, Paper, Box, Avatar } from '@mantine/core';

export const WhyTheyTrust = () => {
    return (
        <>
            <Flex align={'center'} direction={'column'}>
                <Title c={'white'} style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                    Why they TRUST ?
                </Title>
                <Text w={{ base: '90%', md: '60%' }} ta={'center'}>
                    ShareInfo is committed to diversity and inclusion. We&apos;re proud to partner with a company that shares our values.
                    Have a look What’s they think and Say about our Platform!
                </Text>
            </Flex>

            <SimpleGrid mt={40} cols={{ base: 1, md: 3 }} spacing={{ base: 'md', sm: 'md' }} verticalSpacing={{ base: 'md', sm: 'md' }}>
                {vediioData.map((item, index) => (
                    <Flex key={index} direction={'column'} justify={'center'} align={'center'}>
                        <video style={{ borderRadius: '18px 18px 0px 0px' }} autoPlay muted>
                            <source src={item.vedioUrl} type='video/mp4' />
                        </video>
                        <Paper bg={'#090C0D'} p={20} style={{ borderRadius: '0px 0px 18px 18px' }}>
                            <Group gap={20}>
                                <Avatar size={'lg'} src={item.avatarImagUrl} alt="it's me" />
                                <Box>
                                    <Text size='md' fw={700} c={'white'}>
                                        {item.name}
                                    </Text>
                                    <Text c={'dimmed'}>{item.designation}</Text>
                                </Box>
                            </Group>

                            <Text mt={10} c={'dimmed'}>
                                {item.descrptioin}
                            </Text>
                        </Paper>
                    </Flex>
                ))}
            </SimpleGrid>
        </>
    );
};

const vediioData = [
    {
        vedioUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        avatarImagUrl:
            'https://media.licdn.com/dms/image/D5603AQEcW1YeeROT8Q/profile-displayphoto-shrink_200_200/0/1718523927785?e=2147483647&v=beta&t=SYoOiUqotQU2GQ0qpUq487GOFy2Y0YtuVJdlnVHFQiI',
        name: 'Akshay Ashokan Pothan',
        designation: 'Founder & CEO · Imiot',
        descrptioin:
            "ShareInfo's AI-powered matching is incredibly accurate. We've seen a significant improvement in the quality of our hires."
    },
    {
        vedioUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        avatarImagUrl:
            'https://media.licdn.com/dms/image/D5603AQEcW1YeeROT8Q/profile-displayphoto-shrink_200_200/0/1718523927785?e=2147483647&v=beta&t=SYoOiUqotQU2GQ0qpUq487GOFy2Y0YtuVJdlnVHFQiI',
        name: 'Akshay Ashokan Pothan',
        designation: 'Founder & CEO · Imiot',
        descrptioin:
            "ShareInfo's AI-powered matching is incredibly accurate. We've seen a significant improvement in the quality of our hires."
    },
    {
        vedioUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        avatarImagUrl:
            'https://media.licdn.com/dms/image/D5603AQEcW1YeeROT8Q/profile-displayphoto-shrink_200_200/0/1718523927785?e=2147483647&v=beta&t=SYoOiUqotQU2GQ0qpUq487GOFy2Y0YtuVJdlnVHFQiI',
        name: 'Akshay Ashokan Pothan',
        designation: 'Founder & CEO · Imiot',
        descrptioin:
            "ShareInfo's AI-powered matching is incredibly accurate. We've seen a significant improvement in the quality of our hires."
    },
    {
        vedioUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        avatarImagUrl:
            'https://media.licdn.com/dms/image/D5603AQEcW1YeeROT8Q/profile-displayphoto-shrink_200_200/0/1718523927785?e=2147483647&v=beta&t=SYoOiUqotQU2GQ0qpUq487GOFy2Y0YtuVJdlnVHFQiI',
        name: 'Akshay Ashokan Pothan',
        designation: 'Founder & CEO · Imiot',
        descrptioin:
            "ShareInfo's AI-powered matching is incredibly accurate. We've seen a significant improvement in the quality of our hires."
    },
    {
        vedioUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        avatarImagUrl:
            'https://media.licdn.com/dms/image/D5603AQEcW1YeeROT8Q/profile-displayphoto-shrink_200_200/0/1718523927785?e=2147483647&v=beta&t=SYoOiUqotQU2GQ0qpUq487GOFy2Y0YtuVJdlnVHFQiI',
        name: 'Akshay Ashokan Pothan',
        designation: 'Founder & CEO · Imiot',
        descrptioin:
            "ShareInfo's AI-powered matching is incredibly accurate. We've seen a significant improvement in the quality of our hires."
    },
    {
        vedioUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        avatarImagUrl:
            'https://media.licdn.com/dms/image/D5603AQEcW1YeeROT8Q/profile-displayphoto-shrink_200_200/0/1718523927785?e=2147483647&v=beta&t=SYoOiUqotQU2GQ0qpUq487GOFy2Y0YtuVJdlnVHFQiI',
        name: 'Akshay Ashokan Pothan',
        designation: 'Founder & CEO · Imiot',
        descrptioin:
            "ShareInfo's AI-powered matching is incredibly accurate. We've seen a significant improvement in the quality of our hires."
    }
];
