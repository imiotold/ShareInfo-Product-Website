import { Flex, Title, Text, Paper } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const SectionThree = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <Flex mih={'100vh'} py={50} justify={'center'} align={'center'} direction={'column'}>
                <Title c={'white'} style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                    They are in Action
                </Title>
                <Text mb={40} ta={'center'}>
                    State-of-the-art performance across a range of industry benchmarks.{' '}
                </Text>

                <Flex
                    direction={isMobile ? 'column' : 'row'}
                    gap={{ base: '40', sm: '50' }}
                    justify={'center'}
                    align={'center'}
                    wrap={'wrap'}>
                    <Flex w={{ base: '90%', sm: '30%' }} direction={'column'}>
                        <Paper style={{ borderRadius: '28px' }} p={5} bg={'rgb(9, 12, 13)'}>
                            <video
                                style={{
                                    borderRadius: '23px',
                                    width: '100%',
                                    height: 'auto',
                                    aspectRatio: '9 / 16',
                                    objectFit: 'cover'
                                }}
                                loop
                                autoPlay
                                muted>
                                <source
                                    src={'https://res.cloudinary.com/dow8tfote/video/upload/f_auto:video,q_auto/puhm7rvv1pwku3al4ymg'}
                                    type='video/mp4'
                                />
                            </video>
                        </Paper>
                        <Title mt={20} c={'white'} style={{ fontFamily: 'Nunito' }} order={4}>
                            Build Your Aspiration Stronger
                        </Title>
                        <Text mt={10} size='xs'>
                            Core Function: Manages campus placements, including student profiles, company requirements, and the matching
                            process.
                        </Text>
                    </Flex>
                    <Flex mt={{ base: 0, sm: 80 }} w={{ base: '90%', sm: '30%' }} direction={'column'}>
                        <Paper style={{ borderRadius: '28px' }} p={5} bg={'rgb(9, 12, 13)'}>
                            <video
                                style={{
                                    borderRadius: '23px',
                                    width: '100%',
                                    height: 'auto',
                                    aspectRatio: '9 / 16',
                                    objectFit: 'cover'
                                }}
                                loop
                                autoPlay
                                muted>
                                <source
                                    src={'https://res.cloudinary.com/dow8tfote/video/upload/f_auto:video,q_auto/lngyfm8aaix6ncsezpbv'}
                                    type='video/mp4'
                                />
                            </video>
                        </Paper>
                        <Title mt={20} c={'white'} style={{ fontFamily: 'Nunito' }} order={4}>
                            Crack Your Dream Company with us
                        </Title>
                        <Text mt={10} size='xs'>
                            Core Function: Manages campus placements, including student profiles, company requirements, and the matching
                            process.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};
