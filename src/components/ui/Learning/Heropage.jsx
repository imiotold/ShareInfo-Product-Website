import { Button, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';

export const Heropage = () => {
    return (
        <Flex mih={'calc(100dvh - 80px)'} w={'100%'} justify={'center'} align={'center'}>
            <Flex wrap={'wrap-reverse'} justify={{ base: 'center', md: 'space-between' }} align={'center'} gap={20}>
                <Stack w={{ base: '90%', md: '40%' }}>
                    <Title
                        c={'white'}
                        style={{
                            fontFamily: 'Nunito',
                            fontWeight: 700,
                            fontSize: '2rem !important',
                            lineHeight: 1.2
                        }}
                        className='responsive-title'>
                        ShareInfo <br /> <span className='text-[#009F9D]'> For Learning</span>
                    </Title>

                    <Text c={'dimmed'} size='lg'>
                        By leveraging ShareInfo's resources, you can effectively prepare for campus placements, increase your chances of
                        landing your dream job, and embark on a successful career journey.
                    </Text>
                    <Group>
                        <Button
                            onClick={() => window.open('https://web.shareinfo.io/redirect', '_blank')}
                            color='#009F9D'
                            radius={'md'}
                            variant='light'>
                            Explore Resources
                        </Button>

                        <Button onClick={() => window.open('https://web.shareinfo.io/redirect', '_blank')} color='#009F9D' radius={'md'}>
                            Join the Community
                        </Button>
                    </Group>
                </Stack>
                <Flex align={'center'} justify={'center'} w={{ base: '90%', md: '50%' }}>
                    <Image
                        src={'https://res.cloudinary.com/dow8tfote/image/upload/v1728315075/productlogos/isv6o4ft917ej51u9kvh.png'}
                        w={'auto'}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};
