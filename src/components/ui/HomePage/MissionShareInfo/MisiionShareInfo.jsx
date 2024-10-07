import { Paper, Title, Text, Box, Group, Button, Flex, ActionIcon } from '@mantine/core';
import { IconExternalLink, IconTargetArrow } from '@tabler/icons-react';
import vedio from '../../../../assets/video/mission.mp4'
import { useNavigate } from 'react-router-dom';
export const MisiionShareInfo = () => {

    const navigate = useNavigate();
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
                            Empowering Students, Shaping the Future. At ShareInfo, we're passionate about bridging the gap between academia
                            and industry. We're on a mission to empower students, especially those from tier 2 and tier 3 campuses, with the
                            skills and opportunities they need to succeed in today's competitive job market.
                            <br /> <br />
                            Our platform connects aspiring professionals with top companies and industry mentors, providing access to a
                            wealth of resources, including unlimited projects and expert guidance. By immersing students in real-world
                            challenges and fostering a collaborative learning environment, we equip them with the practical skills and
                            confidence they need to thrive in their careers.
                            <br /> <br />
                            Our vision for 2028 is ambitious: we aim to increase on-campus hiring by 40-50%. By achieving this goal, we'll
                            not only help more students land their dream jobs but also contribute to the growth and innovation of the tech
                            industry
                            <br /> <br />
                        </Text>
                        <Button
                            size='md'
                            radius={'md'}
                            color='#414ECA'
                            onClick={() => navigate('vision28')}
                            rightSection={<IconExternalLink style={{ width: '70%', height: '70%' }} />}>
                            Explore More About us
                        </Button>
                    </Box>
                </Paper>

                <Paper bg={'#2B2B2B'} p={10} style={{ borderRadius: '30px', zIndex: 99 }} shadow='lg'>
                    <video style={{ borderRadius: '23px' }} loop autoPlay muted>
                        <source src={vedio} type='video/mp4' />
                    </video>
                </Paper>
            </Flex>
        </>
    );
};
