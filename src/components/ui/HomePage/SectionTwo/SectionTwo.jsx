import { Flex, Text, Title, SimpleGrid, Paper, Image, Box, ActionIcon } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import A from '../../../../assets/ProductLogo/ShareInfoForAspirants.svg';
import R from '../../../../assets/ProductLogo/ShareInfoForRecruiters.svg';
import C from '../../../../assets/ProductLogo/ShareInfoForCampus.svg';
import M from '../../../../assets/ProductLogo/ShareInfoForMentors.svg';
import { useNavigate } from 'react-router-dom';

const ProductCardData = [
    {
        title: 'For Aspirants',
        description: 'To Create the Top 1% Tech Enthusiasts',
        image: A,
        link: 'aspirants'
    },
    {
        title: 'For Recruiters',
        description: 'Find Top Skilled Aspirants to the Team',
        image: R,
        link: 'employers'
    },
    {
        title: 'For Campus',
        description: 'Vision to Create 1% Skill inside Campus',
        image: C,
        link: 'campus'
    },
    {
        title: 'For Mentors',
        description: 'Guiding the passioned people to become 1%',
        image: M,
        link: '#'
    }
];

export const SectionTwo = () => {

    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(`${link}`);
    }


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
                mt={40}
                cols={{ base: 1, xs: 2, md: 4 }}
                spacing={{ base: 'md', sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}>
                {ProductCardData.map((item, index) => (
                    <Paper onClick={() => handleClick(item.link)} key={index} className='ProductCard' bg={'#090C0D'} p={30} radius={'lg'} w='100%' style={{ cursor: 'pointer' }} >
                        <Box w={80}>
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
                            <ActionIcon variant='filled' color='gray' radius='xl' aria-label='Settings'>
                                <IconChevronRight style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                        </Flex>
                    </Paper>
                ))}
            </SimpleGrid>
        </>
    );
};
