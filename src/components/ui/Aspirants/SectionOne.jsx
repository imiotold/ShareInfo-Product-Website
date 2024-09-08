import { Flex, Title, Text, Card, Image, SimpleGrid } from '@mantine/core';
export const SectionOne = () => {
    const cardData = [
        {
            image: 'https://img.freepik.com/free-photo/colorful-wallpaper-background-multicolored-generative-ai_91128-2257.jpg?w=1060&t=st=1722788285~exp=1722788885~hmac=a5fa4b3d6785a8ba8cd0f54507dc922cca8efd3b6257f4ab6bfce89fe0f06779',
            title: 'Practice Ultimate',
            description: 'State-of-the-art performance across a range of industry benchmarks.'
        },
        {
            image: 'https://img.freepik.com/free-photo/colorful-wallpaper-background-multicolored-generative-ai_91128-2257.jpg?w=1060&t=st=1722788285~exp=1722788885~hmac=a5fa4b3d6785a8ba8cd0f54507dc922cca8efd3b6257f4ab6bfce89fe0f06779',
            title: 'Practice Ultimate',
            description: 'State-of-the-art performance across a range of industry benchmarks.'
        },
        {
            image: 'https://img.freepik.com/free-photo/colorful-wallpaper-background-multicolored-generative-ai_91128-2257.jpg?w=1060&t=st=1722788285~exp=1722788885~hmac=a5fa4b3d6785a8ba8cd0f54507dc922cca8efd3b6257f4ab6bfce89fe0f06779',
            title: 'Practice Ultimate',
            description: 'State-of-the-art performance across a range of industry benchmarks.'
        }
    ];

    return (
        <Flex justify={'center'} align={'center'} direction={'column'}>
            <Title c={'white'} style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                Kick Start Now !
            </Title>
            <Text ta={'center'}>
                Kickstart Your Career with ShareInfo, We assure it will <br /> be Your Perfect Placement Companion
            </Text>

            <SimpleGrid
                mt={40}
                cols={{ base: 1, sm: 3, lg: 3 }}
                spacing={{ base: 'lg', sm: 'lg' }}
                verticalSpacing={{ base: 'lg', sm: 'lg' }}>
                {cardData.map((item, index) => (
                    <Card flex={1} bg={'#090C0D'} key={index} shadow='sm' padding='lg' radius='lg'>
                        <Card.Section>
                            <Image src={item.image} h={180} />
                        </Card.Section>

                        <Text mt='md' mb='xs' ta={'center'} c={'white'} fw={500}>
                            {item.title}
                        </Text>

                        <Text ta={'center'} size='sm' c='dimmed'>
                            {item.description}
                        </Text>
                    </Card>
                ))}
            </SimpleGrid>
        </Flex>
    );
};
