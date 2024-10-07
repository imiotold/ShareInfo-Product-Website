import { Flex, Image, Text } from '@mantine/core';
import { Navbar } from '../ui/Navbar/Navbar';
import { useMediaQuery } from '@mantine/hooks';

import grid from '../../assets/ai/grid.svg';
import comingsoon from '../../assets/ai/comingsoon.svg';
import ai from '../../assets/ai/shareinfoai.svg';
import aiprocessor from '../../assets/ai/Processor.svg';

export const Ai = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div>
            <Flex align={'center'} w={'100%'} direction={'column'} justify={'space-between'} mih={'100vh'}>
                <div style={{ position: 'sticky', top: 0, zIndex: 2147483647, width: '100%' }}>
                    <Navbar />
                </div>

                <Image zIndex={10} draggable={false} w={{ base: '60%', sm: '25%' }} src={ai} />

                {isMobile ?
                    <Image zIndex={10} draggable={false} w={{ base: '50%', sm: '50%' }} src={aiprocessor} />
                :   <Image zIndex={10} draggable={false} w={{ base: '90%', sm: '50%' }} src={grid} />}

                <Text ta={'center'} size={isMobile && 'sm'} w={isMobile && '70%'} c={'dimmed'}>
                    we’re working on it we will let you know once it ready for action
                </Text>

                <Image draggable={false} style={{ pointerEvents: 'none' }} src={comingsoon} w={'70%'} />
            </Flex>
        </div>
    );
};
