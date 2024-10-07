import { Card, Text, Title, List, ThemeIcon, Stack } from '@mantine/core';
import { IconCircleDashedCheck } from '@tabler/icons-react';

export const SectionOne = () => {
    const changelogData = [
        {
            version: '1.0.2',
            date: '2024-08-26',
            changes: [
                'Fixed minor bugs in the authentication module.',
                'Improved performance on the dashboard page.',
                'Updated UI for the settings page.'
            ]
        },
        {
            version: '1.0.1',
            date: '2024-08-20',
            changes: [
                'Added support for dark mode.',
                'Enhanced security for password reset functionality.',
                'Fixed issue with email notifications.'
            ]
        },
        {
            version: '1.0.0',
            date: '2024-08-15',
            changes: ['Initial release of the application.', 'Implemented user authentication.', 'Set up the main dashboard.']
        }
    ];

    return (
        <div>
            <Title c={'white'} mt={50} style={{ fontFamily: 'Nunito' }} order={1}>
                Change Log
            </Title>
            <Text>New Updates & Improvements to ShareInfo</Text>
            <Stack mt={50}>
                {changelogData.map((entry) => (
                    <Card bg={'#090C0D'} key={entry.version} padding='lg' radius='md'>
                        <Title order={3}>
                            Version {entry.version} - <Text component='span'>{entry.date}</Text>
                        </Title>
                        <List
                            mt='md'
                            spacing='sm'
                            icon={
                                <ThemeIcon color='gray' size={24} radius='xl'>
                                    <IconCircleDashedCheck size={16} />
                                </ThemeIcon>
                            }>
                            {entry.changes.map((change, changeIndex) => (
                                <List.Item key={changeIndex}>{change}</List.Item>
                            ))}
                        </List>
                    </Card>
                ))}
            </Stack>
        </div>
    );
};
