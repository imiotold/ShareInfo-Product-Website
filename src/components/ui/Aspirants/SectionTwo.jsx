import { Text, Title, Flex, Card, Group, Button, Box } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

const cardData = [
    {
        title: 'Students',
        description:
            'Land Your Dream Job: Live Competition and Simulated Placements, Live Competition: Creates a sense of urgency and highlights the chance to stand out among peers.',
        link: 'linkhere'
    },
    {
        title: 'Freshers',
        description:
            'Land Your Dream Job: Live Competition and Simulated Placements, Live Competition: Creates a sense of urgency and highlights the chance to stand out among peers.',
        link: 'linkhere'
    },
    {
        title: 'Professionals',
        description:
            'Land Your Dream Job: Live Competition and Simulated Placements, Live Competition: Creates a sense of urgency and highlights the chance to stand out among peers.',
        link: 'linkhere'
    },
    {
        title: 'Career Up-Scale',
        description:
            'Land Your Dream Job: Live Competition and Simulated Placements, Live Competition: Creates a sense of urgency and highlights the chance to stand out among peers.',
        link: 'linkhere'
    }
];
export const SectionTwo = () => {
    return (
        <>
            <Title c={'white'} style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                We Values All Kind <br />
                of Job Hunters!
            </Title>
            <Text ta={'center'}>With Our Intelligent System </Text>

            <Flex gap={20} mt={40} direction={'column'} justify={'center'} align={'center'} wrap={'wrap'}>
                {cardData.map((item, index) => (
                    <Card key={index} bg={'#090C0D'} shadow='sm' padding='lg' radius='lg'>
                        <Group align='center' justify='space-between'>
                            <Box w={'80%'}>
                                <Text size='lg' c={'white'} fw={500}>
                                    {item.title}
                                </Text>
                                <Text size='md' c='dimmed'>
                                    {item.description}
                                </Text>
                            </Box>
                            <Button rightSection={<IconExternalLink size={14} />} radius={'md'} color='black'>
                                Get Started
                            </Button>
                        </Group>
                    </Card>
                ))}
            </Flex>
        </>
    );
};
