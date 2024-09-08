import { Button, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';
import heroAspirants from '../../../assets/ProductLogo/Learning.png';

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
                        Empowering the next generation of tech professionals with curated resources, expert guidance, and a community of
                        passionate learners.
                    </Text>
                    <Group>
                        <Button color='#009F9D' radius={'md'} variant='light'>
                            Explore Resources
                        </Button>

                        <Button color='#009F9D' radius={'md'}>
                            Join the Community
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
