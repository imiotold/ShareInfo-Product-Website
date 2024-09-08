import { Flex, Text, Button, em, Title, Box } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

export const MissionBanner = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    const navigate = useNavigate();

    return (
        <>
            <Flex justify={isMobile ? 'center' : 'space-between'} align={'center'} direction={isMobile ? 'column' : 'row'}>
                <Box>
                    <Title
                        className='text-custom_gradient_orange'
                        style={{ fontFamily: 'Nunito' }}
                        order={isMobile ? 1 : 1}
                        ta={{ base: 'center', md: 'left' }}>
                        We are on the Mission
                    </Title>
                    <Text ta={{ base: 'center', md: 'left' }}>
                        to integrate the Multiple Core Sectors <br />
                        together to achieve our Vision 2028
                    </Text>
                </Box>
                <Button
                    mt={20}
                    size='lg'
                    radius={'md'}
                    color='#F94612'
                    onClick={() => navigate('/vision28')}
                    rightSection={<IconExternalLink style={{ width: '70%', height: '70%' }} />}>
                    Explore Vision 2028
                </Button>
            </Flex>
        </>
    );
};
