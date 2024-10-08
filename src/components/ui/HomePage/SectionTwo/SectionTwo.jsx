import { Flex, Text, Title, SimpleGrid, Paper, Image, Box, ActionIcon } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const ProductCardData = [
    {
        title: 'For Aspirants',
        description: 'To Create the Top 1% Tech Enthusiasts',
        image: 'https://res.cloudinary.com/dow8tfote/image/upload/f_auto,q_auto/v1/productlogos/pgsphsslux8haykwsw4l',
        link: 'aspirants'
    },
    {
        title: 'For Recruiters',
        description: 'Find Top Skilled Aspirants to the Team',
        image: 'https://res.cloudinary.com/dow8tfote/image/upload/f_auto,q_auto/v1/productlogos/zh4hrjpk2ae44d3fhoeh',
        link: 'employers'
    },
    {
        title: 'For Campus',
        description: 'Vision to Create 1% Skill inside Campus',
        image: 'https://res.cloudinary.com/dow8tfote/image/upload/f_auto,q_auto/v1/productlogos/uepxs7n64dsvkqseqpl4',
        link: 'campus'
    },
    {
        title: 'For Mentors',
        description: 'Guiding the passioned people to become 1%',
        image: 'https://res.cloudinary.com/dow8tfote/image/upload/f_auto,q_auto/v1/productlogos/haohfuppxhu7ycptmz1y',
        link: 'learning'
    }
];

export const SectionTwo = () => {
    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(`${link}`);
    };

    return (
        <>
            <Flex justify={'center'} align={'center'} direction={'column'}>
                <Title w={'100%'} className='text-custom_gradient_blue' style={{ fontFamily: 'Nunito' }} order={1} ta={{ base: 'center' }}>
                    Our Most Capable Suit Line-up !
                </Title>
                <Text w={'100%'} ta={{ base: 'center' }}>
                    Our most capable Line-up go beyond functionality – they <br />
                    become partners in your pursuit of excellence.
                </Text>
            </Flex>

            <SimpleGrid
                mt={70}
                cols={{ base: 1, xs: 2, md: 4 }}
                spacing={{ base: 'md', sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}>
                {ProductCardData.map((item) => (
                    <Paper
                        onClick={() => handleClick(item.link)}
                        key={item.title}
                        className='ProductCard'
                        bg={'#090C0D'}
                        p={30}
                        radius={'lg'}
                        w='100%'
                        style={{ cursor: 'pointer' }}>
                        <Box mt={'-50'} w={80}>
                            <Image src={item.image} w={'100%'} />
                        </Box>
                        <Title mt={10} c={'white'} style={{ fontFamily: 'Nunito' }} order={2}>
                            ShareInfo
                        </Title>
                        <Text mt={0} c={'white'} size='sm'>
                            {item.title}
                        </Text>

                        <Flex justify={'space-between'} align={'center'} mt={20} gap={10}>
                            <Text size='sm' flex={3}>
                                {item.description}
                            </Text>
                            {/* <ActionIcon variant='filled' color='gray' radius='xl' aria-label='Settings'>
                                <IconChevronRight style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon> */}
                        </Flex>
                    </Paper>
                ))}
            </SimpleGrid>
        </>
    );
};
