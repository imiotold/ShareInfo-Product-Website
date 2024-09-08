import { Button, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';
import heroAspirants from '../../../assets/ProductLogo/HeroRecruiter.png';

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
                        ShareInfo <br /> <span className='text-[#FF6A00]'> For Recruiters</span>
                    </Title>

                    <Text c={'dimmed'} size='lg'>
                        Empowering the next generation of tech professionals with curated resources, expert guidance, and a community of
                        passionate learners.
                    </Text>
                    <Group>
                        <Button color='#FF6A00' radius={'md'} variant='light'>
                            Explore Resources
                        </Button>

                        <Button onClick={() => window.open('https://recruiter.shareinfo.io', '_blank')} color='#FF6A00' radius={'md'}>
                            Get Started
                        </Button>
                    </Group>
                </Stack>
                <Flex align={'center'} justify={'center'} w={{ base: '90%', md: '50%' }}>
                    <Image src={heroAspirants} w={'auto'} />
                </Flex>
            </Flex>
        </Flex>
    );
};
