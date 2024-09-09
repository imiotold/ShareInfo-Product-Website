import { Flex, Title, Text, Card, Image, SimpleGrid } from '@mantine/core';
export const SectionOne = () => {
    const cardData = [
        {
            image: 'https://plus.unsplash.com/premium_photo-1706191097326-cd317671d1fb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Plan Career with Experts',
            description: 'Navigate your career journey with confidence. Our expert coaches will guide you through self-discovery, goal setting, and strategic planning, helping you achieve your professional aspirations.'
        },
        {
            image: 'https://images.unsplash.com/photo-1611348586755-53860f7ae57a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Learn from Scratch',
            description: <div>Immerse yourself in real-world scenarios and apply your knowledge to solve practical problems. Our carefully crafted projects will challenge you to think critically.</div>
        },
        {
            image: 'https://images.unsplash.com/photo-1611532736570-dd6b097ecbb3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Practice with Real Tasks',
            description: 'Practice with real-world projects designed to simulate real-world scenarios. Develop practical skills, get feedback from peers, and learn by doing realtime projects'
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
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing={{ base: 'lg', sm: 'lg' }}
                verticalSpacing={{ base: 'lg', sm: 'lg' }}>
                {cardData.map((item, index) => (
                    <Card flex={1} bg={'#090C0D'} key={index} shadow='sm' padding='lg' radius='lg'>
                        <Card.Section>
                            <Image src={item.image} h={180} />
                        </Card.Section>

                        <Text mt='md' mb='xs' size='xl'  c={'white'} fw={700}>
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
