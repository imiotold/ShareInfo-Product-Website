import { Flex, Image } from '@mantine/core';

export const SectionTwo = () => {
    return (
        <>
            <Flex mt={50} align={'center'} justify={'center'}>
                <Image
                    w={{ base: '90%', md: '80%' }}
                    src={'https://res.cloudinary.com/dow8tfote/image/upload/v1728317048/ro10b03tyefwa16zu4nl.svg'}
                    className='no-context-menu no-select'
                />
            </Flex>
        </>
    );
};
