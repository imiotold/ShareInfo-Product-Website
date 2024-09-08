import { Title, Text, Divider, Paper, Image, Box, Avatar, SimpleGrid, Modal } from '@mantine/core';
import { ModalContent } from './ModalContent';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { data } from './data';

export const SectionOne = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalTitle, setModalTitle] = useState('Blog');

    const handleOpen = (item) => {
        setSelectedItem(item);
        open();
    };

    const renderContent = (items, cat, h) => {
        return items.map((item, index) => (
            <Paper
                key={index}
                onClick={() => {
                    handleOpen(item), setModalTitle(cat);
                }}
                bg={'#090C0D'}
                radius={'lg'}>
                <Image
                    src={item.image}
                    h={h == 150 ? '150px' : '250px'}
                    w={'100%'}
                    style={{ borderRadius: '15px 15px 0 0' }}
                    fit={'cover'}
                />
                <Box p={20}>
                    <Avatar.Group mb={5}>
                        {item.avatar.map((avatarSrc, avatarIndex) => (
                            <Avatar key={avatarIndex} src={avatarSrc} />
                        ))}
                    </Avatar.Group>
                    <Text size='sm' c={'dimmed'}>
                        {item.dimmedtext}
                    </Text>
                    <Text fw={700}>{item.text}</Text>
                </Box>
            </Paper>
        ));
    };

    return (
        <>
            <Title mt={50}>Blog</Title>
            <Text>What they are talking about ShareInfo</Text>
            <Divider my={'lg'} />

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing={{ base: 10, sm: 'xl' }} verticalSpacing={{ base: 'md', sm: 'xl' }}>
                {renderContent(data.blog1, 'Blog')}
            </SimpleGrid>

            <SimpleGrid
                mt={'xl'}
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}>
                {renderContent(data.blog2, 'Blog', 150)}
            </SimpleGrid>

            <Title mt={50}>Case Studies</Title>
            <Text>What We Inspired to Build ShareInfo</Text>
            <Divider my={'lg'} />

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing={{ base: 10, sm: 'xl' }} verticalSpacing={{ base: 'md', sm: 'xl' }}>
                {renderContent(data.caseStudies, 'Case Study')}
            </SimpleGrid>

            <Modal
                radius={'lg'}
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 9
                }}
                centered
                opened={opened}
                onClose={close}
                fullScreen
                title={modalTitle}>
                {selectedItem && <ModalContent item={selectedItem} />}
            </Modal>
        </>
    );
};
