import { Card, Title, Flex, Text, Button, Group, Image, Paper } from '@mantine/core';
import brainImage from '../../../assets/brain.svg';
import { useMediaQuery } from '@mantine/hooks';

const cardData = [
    {
        imageUrl: brainImage,
        title: 'Practice with Real Tasks',
        description: 'Provides context for the competition, replicating a real-world scenario to help you hone your skills effectively.',
        button: 'ShareInfo Challenges'
    },
    {
        imageUrl: brainImage,
        title: 'Learn from Scratch',
        description: 'Provides context for the competition, replicating a real-world scenario to help you hone your skills effectively.',
        button: 'ShareInfo Courses'
    },
    {
        imageUrl: brainImage,
        title: 'Plan Career with Experts',
        description: 'Provides context for the competition, replicating a real-world scenario to help you hone your skills effectively.',
        button: 'ShareInfo Connections'
    }
];

export const SectionThree = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Card
            radius='xl'
            style={{
                background: 'linear-gradient(249deg, #DDC8FF 0%, #C99DF5 36.52%, #7857FB 68.61%, #6005B6 100%)'
            }}
            p={40}>
            <Title my={10} ta={'center'} c={'white'} order={1}>
                Quick Start guides for tech Aspirants
            </Title>

            <Flex direction={isMobile ? 'column' : 'row'} mt={20} gap={20}>
                {cardData.map((item, index) => (
                    <Card
                        key={index}
                        radius={'lg'}
                        style={{
                            background: 'rgba(217, 217, 217, 0.48)'
                        }}>
                        <Group justify='center'>
                            <Paper my={20} radius={'lg'} bg={'#7857FB'} w={'100'} h={'100'}>
                                <Image src={item.imageUrl} w={'100%'} />
                            </Paper>
                        </Group>

                        <Text size='xl' ta={'center'} fw={'bold'} c={'white'}>
                            {item.title}
                        </Text>
                        <Text size='sm' ta={'center'} c={'white'}>
                            {item.description}
                        </Text>
                        <Group mt={20} justify='center'>
                            <Button color='#9570F8' radius='md'>
                                {item.button}
                            </Button>
                        </Group>
                    </Card>
                ))}
            </Flex>
            <Group mt={30} justify='center'>
                <Button color='#9570F8' radius='md'>
                    Explore our Complete Range of Tutorials and Guides
                </Button>
            </Group>
        </Card>
    );
};
