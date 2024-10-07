import { Flex, Image, Text } from '@mantine/core';
import { Navbar } from '../ui/Navbar/Navbar';
import { useMediaQuery } from '@mantine/hooks';

export const Ai = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div>
            <Flex align={'center'} w={'100%'} direction={'column'} justify={'space-between'} mih={'100vh'}>
                <div style={{ position: 'sticky', top: 0, zIndex: 2147483647, width: '100%' }}>
                    <Navbar />
                </div>

                <Image
                    zIndex={10}
                    draggable={false}
                    w={{ base: '60%', sm: '25%' }}
                    src={'https://res.cloudinary.com/dow8tfote/image/upload/v1728316011/AI/n36dh6px2qeiry8ducjm.svg'}
                />

                {isMobile ?
                    <Image
                        zIndex={10}
                        draggable={false}
                        w={{ base: '50%', sm: '50%' }}
                        src={'https://res.cloudinary.com/dow8tfote/image/upload/v1728316103/AI/dpac4cppxogmiglyj9le.svg'}
                    />
                :   <Image
                        zIndex={10}
                        draggable={false}
                        w={{ base: '90%', sm: '50%' }}
                        src={'https://res.cloudinary.com/dow8tfote/image/upload/v1728316136/AI/qvsndet3qqryvnjko3kr.svg'}
                    />
                }

                <Text ta={'center'} size={isMobile && 'sm'} w={isMobile && '70%'} c={'dimmed'}>
                    we’re working on it we will let you know once it ready for action
                </Text>

                <Image
                    draggable={false}
                    style={{ pointerEvents: 'none' }}
                    src={'https://res.cloudinary.com/dow8tfote/image/upload/v1728316004/AI/fzjlcxkvfpxzuiflhjen.svg'}
                    w={'70%'}
                />
            </Flex>
        </div>
    );
};
