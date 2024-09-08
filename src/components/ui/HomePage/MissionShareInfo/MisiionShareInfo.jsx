import { Paper, Title, Text, Box, Group, Button, Flex, ActionIcon } from '@mantine/core';
import { IconExternalLink, IconTargetArrow } from '@tabler/icons-react';
export const MisiionShareInfo = () => {
    return (
        <>
            <Flex direction={'column'} align={'center'} justify={'center'}>
                <Paper w={'90%'} bg={'#090C0D'} p={10} style={{ borderRadius: '30px 30px 0px 0px', zIndex: 90 }} mt={20}>
                    <Box p={30}>
                        <Group mb={20} justify='space-between' align='center' wrap='wrap-reverse'>
                            <Title className='text-custom_gradient_blue' style={{ fontFamily: 'Nunito' }} order={1}>
                                Mission ShareInfo
                            </Title>
                            <ActionIcon variant='light' color={'#9573de'} size='xl' radius='md' aria-label='Settings'>
                                <IconTargetArrow />
                            </ActionIcon>
                        </Group>

                        <Text ta={'justify'}>
                            ShareInfo is committed to diversity and inclusion. We&apos;re proud to partner with a company that shares our
                            values. Listen what they are saying about us !
                            <br />
                            <br />
                            ShareInfo is an AI-powered recruitment platform that connects companies with top talent across the globe. By
                            streamlining the recruitment process and providing valuable insights, ShareInfo helps businesses make informed
                            hiring decisions and build diverse, inclusive workplaces. It is the perfect solution for companies of all sizes
                            looking to simplify their hiring and empower their future. Join thousands of companies already experiencing the
                            ShareInfo difference and see what our customers are saying: &quot;ShareInfo streamlined our hiring process like
                            magic! We found our perfect candidate in just two weeks.&quot; - Sarah Michaels, HR Manager, Bloom Flowers.
                            Start your free trial today and experience the ShareInfo difference for yourself!
                            <br />
                            <br />
                        </Text>
                        <Button
                            size='md'
                            radius={'md'}
                            color='#414ECA'
                            rightSection={<IconExternalLink style={{ width: '70%', height: '70%' }} />}>
                            Explore More About us
                        </Button>
                    </Box>
                </Paper>

                <Paper bg={'#2B2B2B'} p={10} style={{ borderRadius: '30px', zIndex: 99 }} shadow='lg'>
                    <video style={{ borderRadius: '23px' }} autoPlay muted>
                        <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' type='video/mp4' />
                    </video>
                </Paper>
            </Flex>
        </>
    );
};
