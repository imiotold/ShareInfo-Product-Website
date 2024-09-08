import graphImage from '../../../assets/GraphCampus.svg';
import { Flex, Image } from '@mantine/core';

export const SectionTwo = () => {
    return (
        <>
            <Flex mt={50} align={'center'} justify={'center'}>
                <Image w={{ base: '90%', md: '80%' }} src={graphImage} className='no-context-menu no-select' />
            </Flex>
        </>
    );
};
