import { Flex, Text, em, Box, Title, Paper, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const Community = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

    return (
        <div>
            <Flex
                gap={{ base: 20, sm: 90 }}
                justify={isMobile ? 'center' : 'space-between'}
                align={'center'}
                direction={isMobile ? 'column' : 'row'}>
                <Box>
                    <Title
                        className='text-custom_gradient_orange'
                        style={{ fontFamily: 'Nunito' }}
                        order={isMobile ? 1 : 1}
                        ta={{ base: 'center', md: 'left' }}>
                        Join the Community
                    </Title>
                    <Text mt={5} ta={{ base: 'center', md: 'left' }}>
                        Choose your Interest Domain and Start Now!
                    </Text>
                </Box>

                <Group>
                    {['For Techies', 'For Designers', 'For Managers'].map((item) => (
                        <Paper key={item} bg={'#090C0D'} className='CapableCard' radius={'md'}>
                            <Flex p={30} direction={'row'} align={{ base: 'center', sm: 'start' }}>
                                <Title ta={{ base: 'center', sm: 'left' }} order={4} c={'white'} style={{ fontFamily: 'Nunito' }}>
                                    {item}
                                </Title>
                            </Flex>
                        </Paper>
                    ))}
                </Group>
            </Flex>
        </div>
    );
};
