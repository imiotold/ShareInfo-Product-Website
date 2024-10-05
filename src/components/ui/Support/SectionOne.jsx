import { Flex, Text, Button, Stack, SimpleGrid, Title, Paper, Group } from '@mantine/core';
import { IconMessageFilled, IconHelpSquareRoundedFilled, IconHours24 } from '@tabler/icons-react';

export const SectionOne = () => {
    return (
        <div>
            <Title mt={50} className='text-custom_gradient_orange' style={{ fontFamily: 'Nunito' }} order={1} ta={{ base: 'center' }}>
                How Can We Help?
            </Title>
            <Group justify='center'>
                <Text ta={{ base: 'center' }} w={{ base: '90%', md: '40%' }} c={'dimmed'}>
                    Get in touch with our sales and support teams for demos, onboarding support, or product questions.
                </Text>
            </Group>

            <SimpleGrid
                className='CapableGrid'
                mt={50}
                cols={{ base: 1, sm: 2 }}
                spacing={{ base: 10, sm: 10 }}
                verticalSpacing={{ base: 10, sm: 10 }}>
                {features.map((feature, index) => (
                    <Paper bg={'#090C0D'} key={index} radius={'lg'} w='100%'>
                        <Flex p={30} direction={'column'} align={{ base: 'center', sm: 'start' }}>
                            {feature.icon}
                            <Title ta={{ base: 'center', sm: 'left' }} mt={20} order={4} c={'white'} style={{ fontFamily: 'Nunito' }}>
                                {feature.title}
                            </Title>
                            <Text ta={{ base: 'center', sm: 'left' }} c={'dimmed'} mt={10}>
                                {feature.description}
                            </Text>
                            <Button
                                onClick={() => {
                                    window.open(`mailto:${feature.link}`, '_self');
                                }}
                                size='xs'
                                radius='md'
                                variant='default'
                                mt={20}>
                                {feature.btn}
                            </Button>
                        </Flex>
                    </Paper>
                ))}
            </SimpleGrid>

            <SimpleGrid
                className='CapableGrid'
                mt={10}
                cols={{ base: 1, sm: 2 }}
                spacing={{ base: 10, sm: 10 }}
                verticalSpacing={{ base: 10, sm: 10 }}>
                {features2.map((feature, index) => (
                    <Paper bg={'transparent'} key={index} radius={'lg'} w='100%'>
                        <Flex p={30} direction={'column'} align={{ base: 'center', sm: 'start' }}>
                            <Title ta={{ base: 'center', sm: 'left' }} mt={20} order={4} c={'white'} style={{ fontFamily: 'Nunito' }}>
                                {feature.title}
                            </Title>
                            <Text ta={{ base: 'center', sm: 'left' }} c={'dimmed'} mt={10}>
                                {feature.description}
                            </Text>
                            {feature.link && (
                                <Text
                                    mt={10}
                                    c={'dimmed'}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        if (feature.link.startsWith('mailto:')) {
                                            window.open(feature.link, '_self');
                                        } else {
                                            window.open(feature.link, '_blank');
                                        }
                                    }}>
                                    {feature.linklabel}
                                </Text>
                            )}
                        </Flex>
                    </Paper>
                ))}
            </SimpleGrid>

            <Stack align='center' justify='center' my={100}>
                <IconHours24 size={50} color='gray' stroke={2} />
                <Text c={'white'}>Our Support team is 24/7 Active</Text>
            </Stack>
        </div>
    );
};

// Updated features with correct mailto links and clickable link labels
const features = [
    {
        title: 'Sales',
        description: 'Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.',
        icon: <IconMessageFilled stroke={1.5} />,
        btn: 'Talk to Sales',
        link: 'sales@shareinfo.io'
    },
    {
        title: 'Help & Support',
        description: 'Ask product questions, report problems, or leave feedback.',
        icon: <IconHelpSquareRoundedFilled stroke={1.5} />,
        btn: 'Contact Support',
        link: 'support@shareinfo.io'
    }
];

const features2 = [
    {
        title: 'Join the Community',
        description: 'More than 10,000 Linear users share questions and best practices in our Slack community.',
        linklabel: 'Join Slack >',
        link: '' // Add actual Slack join link if available
    },
    {
        title: 'General Communication',
        description: 'For general inquiries, feel free to reach out to us via email.',
        linklabel: 'hello@shareinfo.io >',
        link: 'mailto:hello@shareinfo.io'
    },
    {
        title: 'Documentation',
        description: 'Visit our documentation for detailed guides and API references.',
        linklabel: 'ShareInfo Docs >',
        link: '' // Add actual docs link if available
    },
    {
        title: 'Recruiters',
        description: 'Find talents by exploring our recruiters’ portal.',
        linklabel: 'Find Talents >',
        link: 'http://recruiter.shareinfo.io/'
    }
];
