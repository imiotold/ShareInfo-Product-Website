import { Divider, Image, Text, Box, Flex } from '@mantine/core';

export const ModalContent = (props) => {
    return (
        <>
            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '50%' }} direction={'column'}>
                    <Box>
                        <Box>
                            <Text size='sm'>{props.item.dimmedtext}</Text>
                            <Text c={'white'} size='xl' fw={700}>
                                {props.item.text}
                            </Text>
                        </Box>

                        <Image mt={20} radius={'lg'} fit='cover' mb={20} h={300} w={'100%'} src={props.item.image} />

                        <Divider my={20} />
                        {props.item.content}
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};
