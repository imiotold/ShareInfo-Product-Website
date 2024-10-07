import { Text, Title, Flex, Card, Group, Button, Box } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

const cardData = [
    {
        title: 'Students',
        description: (
            <div>
                Fuel Your Tech Ambition: Your Path to Success Starts Here. Gain the skills, confidence, and connections you need to excel in
                tech with ShareInfo&#39;s comprehensive resources.
            </div>
        ),
        link: 'http://web.shareinfo.io/'
    },
    {
        title: 'Freshers',
        description: (
            <div>
                Future tech leaders! Join us and unlock your potential. At ShareInfo, we&#39;re committed to nurturing the next generation
                of tech talent.
            </div>
        ),
        link: 'http://web.shareinfo.io/'
    },
    {
        title: 'Professionals',
        description: (
            <div>
                Accelerate your journey to the top with ShareInfo. Our platform provides the resources, connections, and mentorship you need
                to excel in today&#39;s competitive tech landscape.
            </div>
        ),
        link: 'http://web.shareinfo.io/'
    },
    {
        title: 'Career Up-Scale',
        description:
            'Build a strong professional network: Connect with like-minded professionals and industry experts to expand your opportunities',
        link: 'http://web.shareinfo.io/'
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

            <Flex w={'100%'} gap={20} mt={40} direction={'column'} justify={'center'} align={'center'} wrap={'wrap'}>
                {cardData.map((item, index) => (
                    <Card w={'100%'} key={index} bg={'#090C0D'} shadow='sm' padding='lg' radius='lg'>
                        <Group align='center' justify='space-between'>
                            <Box w={'80%'}>
                                <Text size='lg' c={'white'} fw={500}>
                                    {item.title}
                                </Text>
                                <Text size='md' c='dimmed'>
                                    {item.description}
                                </Text>
                            </Box>
                            <Button
                                onClick={() => window.open('http://web.shareinfo.io/', '_blank')}
                                rightSection={<IconExternalLink size={14} />}
                                radius={'md'}
                                color='black'>
                                Get Started
                            </Button>
                        </Group>
                    </Card>
                ))}
            </Flex>
        </>
    );
};
