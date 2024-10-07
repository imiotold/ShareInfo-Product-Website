import { Button, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const Heropage = () => {
    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(`${link}`);
    };

    return (
        <Flex mih={'calc(100dvh - 80px)'} w={'100%'} justify={'center'} align={'center'}>
            <Flex wrap={'wrap-reverse'} justify={{ base: 'center', md: 'space-between' }} align={'center'} gap={20}>
                <Stack w={{ base: '90%', md: '40%' }}>
                    <Title
                        c='white'
                        style={{
                            fontFamily: 'Nunito',
                            fontWeight: 700,
                            fontSize: '2rem !important',
                            lineHeight: 1.2
                        }}
                        className='responsive-title'>
                        ShareInfo <br />
                        <span style={{ color: '#951AD7' }}>For Aspirants</span>
                    </Title>

                    <Text c={'dimmed'} size='lg'>
                        Empowering the next generation of tech professionals with curated resources, expert guidance, and a community of
                        passionate learners.
                    </Text>
                    <Group>
                        <Button color='#951AD7' onClick={() => handleClick('/learning')} radius={'md'} variant='light'>
                            Explore Resources
                        </Button>

                        <Button color='#951AD7' onClick={() => window.open('https://web.shareinfo.io', '_blank')} radius={'md'}>
                            Get Started
                        </Button>
                    </Group>
                </Stack>
                <Flex align={'center'} justify={'center'} w={{ base: '90%', md: '50%' }}>
                    <Image
                        src={'https://res.cloudinary.com/dow8tfote/image/upload/v1728315174/productlogos/hc7ekkkxxndw7yszv4wc.png'}
                        w={'auto'}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};
