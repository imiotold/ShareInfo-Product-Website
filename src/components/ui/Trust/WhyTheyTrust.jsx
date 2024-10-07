import { Flex, Text, Title, SimpleGrid, Paper, Box, Avatar, Stack } from '@mantine/core';

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
                    <Flex h={'100%'} key={index} direction={'column'} justify={'center'} align={'center'}>
                        {/* <video style={{ borderRadius: '18px 18px 0px 0px' }} autoPlay muted>
                            <source src={item.vedioUrl} type='video/mp4' />
                        </video> */}
                        <Paper h={'100%'} bg={'#090C0D'} p={25} style={{ borderRadius: '018px 018px 18px 18px' }}>
                            <Stack gap={20}>
                                <Avatar radius={'md'} size={'lg'} src={item.avatarImagUrl} alt="it's me" />
                                <Box>
                                    <Text size='md' fw={700} c={'white'}>
                                        {item.name}
                                    </Text>
                                    <Text c={'dimmed'}>{item.designation}</Text>
                                </Box>
                            </Stack>

                            <Text mt={15}>{item.descrptioin}</Text>
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
        avatarImagUrl: 'https://res.cloudinary.com/dow8tfote/image/upload/v1728151044/mopbuywruoy8i4c1rvdj.jpg',
        name: 'Sreehari',
        designation: 'HR Vice President, Talrop',
        descrptioin:
            "ShareInfo's AI-powered matching is incredibly accurate. We've seen a significant improvement in the quality of our hires."
    },
    {
        vedioUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        avatarImagUrl: 'https://res.cloudinary.com/dow8tfote/image/upload/v1728151044/ucoqslsyzjkxih3o5yls.jpg',
        name: 'Dr. Umesh P',
        designation: 'Placement Officer, CE-Thalassery',
        descrptioin:
            "ShareInfo's AI has been a game-changer for our campus recruitment efforts. It's helped us identify top talent we might have otherwise overlooked."
    },
    {
        vedioUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        avatarImagUrl: '',
        name: 'Adithyan',
        designation: 'CEO Prospire Learning',
        descrptioin:
            "ShareInfo's analytics have provided invaluable insights into our hiring trends. We're now able to make data-driven decisions to improve our recruitment strategies."
    },
    {
        vedioUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        avatarImagUrl: 'https://res.cloudinary.com/dow8tfote/image/upload/v1728151044/d81wsvenfew96pc1qwfd.jpg',
        name: 'Akshay',
        designation: 'Managing Partner, Prospire Learning',
        descrptioin:
            "The AI-powered matching algorithm is impressive. It's saved us countless hours of manual screening and has led to a much faster time-to-hire."
    },
    {
        vedioUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        avatarImagUrl: 'https://res.cloudinary.com/dow8tfote/image/upload/v1728151045/lmujgehdj0rd5vonstbo.jpg',
        name: 'Vaishak Raveendran',
        designation: 'Asst. Professor, CE-TLY',
        descrptioin:
            "Our students are thrilled with the personalized job recommendations from ShareInfo. It's helped them discover opportunities they never knew existed."
    },

    {
        vedioUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        avatarImagUrl:
            'https://media.licdn.com/dms/image/v2/D5603AQHEufdiJecm1A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719205310908?e=2147483647&v=beta&t=GRP4bO6xLsGU84nzvr-fzQxlE2pqmUsHsELcu4v9zoE',
        name: 'Harsh Girish',
        designation: 'Talent Acquisition Head Imiot',
        descrptioin:
            "We've seen a significant increase in candidate engagement and satisfaction since implementing ShareInfo. It's a user-friendly platform that makes the job search process much easier."
    }
];
