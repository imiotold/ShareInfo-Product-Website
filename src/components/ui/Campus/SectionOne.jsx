import { Flex, Title, Text, Card, Image, SimpleGrid } from '@mantine/core';
export const SectionOne = () => {
    const cardData = [
        {
            image: 'https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Manage Student Data',
            description: 'Our platform offers a comprehensive suite of features designed to efficiently track and analyze student information, ensuring a smooth and successful placement experience.'
        },
        {
            image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Boost Skill Sets',
            description: 'Our Skill Enhancement Program equips students with the essential skills for campus. Through targeted skill development, mock interviews, and much more.'
        },
        {
            image: 'https://images.unsplash.com/photo-1679147704604-4540a253ec0c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Invite Companies',
            description: 'Connect with top companies for campus placements. Our platform simplifies the process, making it easy to invite companies to your campus.'
        }
    ];

    return (
        <Flex justify={'center'} align={'center'} direction={'column'}>
            <Title c={'white'} style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                We Capable for
            </Title>
            <Text ta={'center'}>
                Kickstart Your Career with ShareInfo, We assure it will <br /> be Your Perfect Placement Companion
            </Text>

            <SimpleGrid
                mt={20}
                cols={{ base: 1, sm: 3, lg: 3 }}
                spacing={{ base: 'lg', sm: 'lg' }}
                verticalSpacing={{ base: 'lg', sm: 'lg' }}>
                {cardData.map((item, index) => (
                    <Card flex={1} bg={'#090C0D'} key={index} shadow='sm' padding='lg' radius='lg'>
                        <Card.Section>
                            <Image src={item.image} h={180} />
                        </Card.Section>

                        <Text size='xl' mt='md' mb='xs' c={'white'} fw={700}>
                            {item.title}
                        </Text>

                        <Text  size='md' c='dimmed'>
                            {item.description}
                        </Text>
                    </Card>
                ))}
            </SimpleGrid>
        </Flex>
    );
};
