import { Flex, Title, Text, Card, Group, Image, SimpleGrid } from '@mantine/core';
export const SectionOne = () => {
    const cardData = [
        {
            image: 'https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Pre-qualified Candidates',
            description:
                'Access a pool of pre-qualified candidates. Our platform streamlines the hiring process, saving you time and effort.'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1679936309175-a05d90c7241e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Reduced Time-to-Hire',
            description:
                'Accelerate your hiring process. Our platform streamlines the recruitment process, helping you find top talent faster.'
        },
        {
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Enhanced Employer Branding',
            description: 'Boost your employer brand. Our platform helps you showcase your company culture and values to attract top talent.'
        }
    ];

    return (
        <Flex justify={'center'} align={'center'} direction={'column'}>
            <Title c={'white'} style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                We Capable for
            </Title>
            <Text ta={'center'}>State-of-the-art performance across a range of industry benchmarks.</Text>

            <SimpleGrid
                mt={20}
                cols={{ base: 1, sm: 3, lg: 3 }}
                spacing={{ base: 'lg', sm: 'lg' }}
                verticalSpacing={{ base: 'lg', sm: 'lg' }}>
                {cardData.map((item) => (
                    <Card bg={'#090C0D'} key={item.title} shadow='sm' padding='lg' radius='lg'>
                        <Card.Section>
                            <Image src={item.image} h={150} />
                        </Card.Section>

                        <Group justify='space-between' mt='md' mb='xs'>
                            <Text c={'white'} size='lg' fw={700}>
                                {item.title}
                            </Text>
                        </Group>

                        <Text size='md' c='dimmed'>
                            {item.description}
                        </Text>
                    </Card>
                ))}
            </SimpleGrid>
        </Flex>
    );
};
