import { Flex, Title, Text, Card, Group, Image, SimpleGrid } from '@mantine/core';
export const SectionOne = () => {
    const cardData = [
        {
            image: 'https://img.freepik.com/free-photo/colorful-wallpaper-background-multicolored-generative-ai_91128-2257.jpg?w=1060&t=st=1722788285~exp=1722788885~hmac=a5fa4b3d6785a8ba8cd0f54507dc922cca8efd3b6257f4ab6bfce89fe0f06779',
            title: 'Pre-qualified Candidates',
            description: 'State-of-the-art performance across a range of industry benchmarks.'
        },
        {
            image: 'https://img.freepik.com/free-photo/colorful-wallpaper-background-multicolored-generative-ai_91128-2257.jpg?w=1060&t=st=1722788285~exp=1722788885~hmac=a5fa4b3d6785a8ba8cd0f54507dc922cca8efd3b6257f4ab6bfce89fe0f06779',
            title: 'Reduced Time-to-Hire',
            description: 'State-of-the-art performance across a range of industry benchmarks.'
        },
        {
            image: 'https://img.freepik.com/free-photo/colorful-wallpaper-background-multicolored-generative-ai_91128-2257.jpg?w=1060&t=st=1722788285~exp=1722788885~hmac=a5fa4b3d6785a8ba8cd0f54507dc922cca8efd3b6257f4ab6bfce89fe0f06779',
            title: 'Enhanced Employer Branding',
            description: 'State-of-the-art performance across a range of industry benchmarks.'
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
                {cardData.map((item, index) => (
                    <Card bg={'#090C0D'} key={index} shadow='sm' padding='lg' radius='lg'>
                        <Card.Section>
                            <Image src={item.image} h={120} />
                        </Card.Section>

                        <Group justify='space-between' mt='md' mb='xs'>
                            <Text c={'white'} fw={500}>
                                {item.title}
                            </Text>
                        </Group>

                        <Text size='sm' c='dimmed'>
                            {item.description}
                        </Text>
                    </Card>
                ))}
            </SimpleGrid>
        </Flex>
    );
};
