import { SectionOne } from '../ui/ChangeLog/SectionOne';
import { Footer } from '../ui/Footer/Footer';
import { Navbar } from '../ui/Navbar/Navbar';
import { Flex } from '@mantine/core';

export const ChangeLog = () => {
    return (
        <>
            <div style={{ position: 'sticky', top: 0, zIndex: 2147483646 }}>
                <Navbar />
            </div>

            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <SectionOne />
                </Flex>
            </Flex>
            <Footer />
        </>
    );
};
