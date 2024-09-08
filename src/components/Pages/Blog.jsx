import { Navbar } from '../ui/Navbar/Navbar';
import { Flex } from '@mantine/core';
import { SectionFive } from '../ui/HomePage/SectionFive/SectionFive';
import { Footer } from '../ui/Footer/Footer';
import { SectionOne } from '../ui/Blog/SectionOne';

export const Blog = () => {
    return (
        <div>
            <Navbar />
            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <div>
                        <SectionOne />
                    </div>
                    <div>
                        <SectionFive />
                    </div>
                </Flex>
            </Flex>
            <Footer />
        </div>
    );
};
