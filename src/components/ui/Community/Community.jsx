import { Flex, Text, em, Box, Title, Paper, SimpleGrid, ActionIcon, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconCode, IconBrush, IconTie } from '@tabler/icons-react';

export const Community = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

    return (
        <div>
            <Flex
                gap={{ base: 20, sm: 90 }}
                justify={isMobile ? 'center' : 'center'}
                align={'center'}
                direction={isMobile ? 'column' : 'row'}>
                <Box>
                    <Title
                        className='text-custom_gradient_orange'
                        style={{ fontFamily: 'Nunito' }}
                        order={isMobile ? 1 : 1}
                        ta={{ base: 'left' }}>
                        Join the Community
                    </Title>
                    <Text mt={5} ta={{ base: 'center', md: 'left' }}>
                        Choose your Interest Domain and Start Now!
                    </Text>
                </Box>
            </Flex>

            <SimpleGrid
                className='CapableGrid'
                mt={50}
                cols={{ base: 3, sm: 3, lg: 3 }}
                spacing={{ base: 10, sm: 10 }}
                verticalSpacing={{ base: 10, sm: 10 }}>
                {features.map((feature, index) => (
                    <Paper bg={'#090C0D'} key={index} className='CapableCard' radius={'lg'} w='100%'>
                        <Flex p={30} direction={'column'} align={{ base: 'center', sm: 'start' }}>
                            <ActionIcon variant='light' color={'orange'} size='xl' radius='md' aria-label='Settings'>
                                {feature.icon}
                            </ActionIcon>

                            <Title ta={{ base: 'center', sm: 'left' }} mt={20} order={4} c={'white'} style={{ fontFamily: 'Nunito' }}>
                                {feature.title}
                            </Title>
                            <Text ta={{ base: 'center', sm: 'left' }} size='sm' c={'dimmed'} mt={10}>
                                {feature.description}
                            </Text>
                            <Button radius={'md'} fullWidth variant='default' mt={20} color='orange'>
                                Join Now
                            </Button>
                        </Flex>
                    </Paper>
                ))}
            </SimpleGrid>
        </div>
    );
};

const features = [
    {
        title: 'For Techies',
        description:
            'Job seekers focused on acquiring skills and knowledge to land their dream role. And knowledge to land their dream role.',
        icon: <IconCode style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'For Designers',
        description:
            'Job seekers focused on acquiring skills and knowledge to land their dream role. And knowledge to land their dream role.',
        icon: <IconBrush style={{ width: '70%', height: '70%' }} stroke={1.5} />
    },
    {
        title: 'For Managers',
        description:
            'Job seekers focused on acquiring skills and knowledge to land their dream role. And knowledge to land their dream role.',
        icon: <IconTie style={{ width: '70%', height: '70%' }} stroke={1.5} />
    }
];
