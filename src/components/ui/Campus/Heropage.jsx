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
                        ShareInfo <br /> <span className='text-[#631BE0]'> For Campus</span>
                    </Title>

                    <Text c={'dimmed'} size='lg'>
                        Connect with top companies for campus placements. ShareInfo simplifies the process, making it easy to invite
                        companies to your campus.
                    </Text>
                    <Group>
                        <Button
                            onClick={() => window.open('http://web.shareinfo.io/', '_blank')}
                            color='#631BE0'
                            radius={'md'}
                            variant='light'>
                            Explore Resources
                        </Button>

                        <Button onClick={() => window.open('https://campus.shareinfo.io', '_blank')} color='#631BE0' radius={'md'}>
                            Get Started
                        </Button>
                    </Group>
                </Stack>
                <Flex align={'center'} justify={'center'} w={{ base: '90%', md: '50%' }}>
                    <Image
                        src={'https://res.cloudinary.com/dow8tfote/image/upload/v1728315120/productlogos/dp43tljzfefsmqxzaty3.png'}
                        w={'auto'}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};
