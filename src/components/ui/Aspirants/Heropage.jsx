import { Box, Button, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';
import heroAspirants from '../../../assets/ProductLogo/HeroAspirants.png';

export const Heropage = () => {
    return (
        <Flex mih={'calc(100dvh - 80px)'} w={'100%'} justify={'center'} align={'center'}>
            <Flex wrap={'wrap-reverse'} justify={'space-between'} align={'center'} gap={20}>
                <Stack w={{ base: '90%', md: '40%' }}>
                    <Title c={'white'} style={{ fontFamily: 'Nunito', fontSize: '4rem', fontWeight: '700' }}>
                        ShareInfo <br /> <span className='text-[#951AD7]'> For Aspirants</span>
                    </Title>

                    <Text c={'dimmed'} size='lg'>
                        Empowering the next generation of tech professionals with curated resources, expert guidance, and a community of
                        passionate learners.
                    </Text>
                    <Group>
                        <Button color='#951AD7' radius={'md'} variant='light'>
                            Explore Resources
                        </Button>

                        <Button color='#951AD7' onClick={() => window.open('https://web.shareinfo.io', '_blank')} radius={'md'}>
                            Get Started
                        </Button>
                    </Group>
                </Stack>
                <Box w={{ base: '90%', md: '50%' }}>
                    <Image src={heroAspirants} w={'auto'} />
                </Box>
            </Flex>
        </Flex>
    );
};
