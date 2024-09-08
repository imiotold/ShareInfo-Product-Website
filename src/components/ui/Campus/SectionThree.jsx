import { Flex, Title, Text, Paper } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const SectionThree = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <Flex mih={'100vh'} py={50} justify={'center'} align={'center'} direction={'column'}>
                <Text>TESTIMONIALS</Text>
                <Title c={'white'} style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                    They are in Action
                </Title>
                <Text ta={'center'}>State-of-the-art performance across a range of industry benchmarks. </Text>

                <Flex direction={isMobile ? 'column' : 'row'} gap={50} justify={'center'} align={'center'} wrap={'wrap'}>
                    <Flex mt={20} w={{ base: '80%', sm: '30%' }} direction={'column'}>
                        <Paper radius={'lg'} bg={'gray'} h={'70vh'}></Paper>
                        <Title mt={20} c={'white'} style={{ fontFamily: 'Nunito' }} order={4}>
                            Unlocking insights in scientific literature
                        </Title>
                        <Text mt={10} size='xs'>
                            Core Function: Manages campus placements, including student profiles, company requirements, and the matching
                            process.
                        </Text>
                    </Flex>
                    <Flex w={{ base: '80%', sm: '30%' }} direction={'column'}>
                        <Paper radius={'lg'} mt={{ sm: 150 }} bg={'gray'} h={'70vh'}></Paper>
                        <Title mt={20} c={'white'} style={{ fontFamily: 'Nunito' }} order={4}>
                            Unlocking insights in scientific literature
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
