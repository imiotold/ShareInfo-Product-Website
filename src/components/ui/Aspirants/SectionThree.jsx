import { Card, Title, Flex, Text, Button, Group, Image, Paper } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

const cardData = [
    {
        imageUrl:
            'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Practice with Real Tasks',
        description:
            'Navigate your career journey with confidence. Our expert coaches will guide you through self-discovery, goal setting, and strategic planning, helping you achieve your professional aspirations.',
        button: 'ShareInfo Challenges'
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Learn from Scratch',
        description:
            'Immerse yourself in real-world scenarios and apply your knowledge to solve practical problems. Our carefully crafted projects will challenge you to think critically.',
        button: 'ShareInfo Courses'
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1531537571171-a707bf2683da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Plan Career with Experts',
        description:
            'Practice with real-world projects designed to simulate real-world scenarios. Develop practical skills, get feedback from peers, and learn by doing realtime projects',
        button: 'ShareInfo Connections'
    }
];

export const SectionThree = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(`${link}`);
    };

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
                {cardData.map((item) => (
                    <Card
                        key={item.title}
                        radius={'lg'}
                        style={{
                            background: 'rgba(217, 217, 217, 0.48)'
                        }}>
                        <Group justify='center'>
                            <Paper my={20} radius={'lg'} bg={'#7857FB'} w={'100'} h={'100'}>
                                <Image fit='cover' radius={'lg'} src={item.imageUrl} h={'100%'} />
                            </Paper>
                        </Group>

                        <Text size='xl' ta={'center'} fw={'bold'} c={'white'}>
                            {item.title}
                        </Text>
                        <Text size='sm' ta={'center'} c={'white'}>
                            {item.description}
                        </Text>
                        <Group mt={20} justify='center'>
                            <Button onClick={() => handleClick('/learning')} color='#9570F8' radius='md'>
                                {item.button}
                            </Button>
                        </Group>
                    </Card>
                ))}
            </Flex>
            <Group mt={30} justify='center'>
                <Button onClick={() => handleClick('/learning')} color='#9570F8' radius='md'>
                    Explore our Complete Range of Tutorials and Guides
                </Button>
            </Group>
        </Card>
    );
};
