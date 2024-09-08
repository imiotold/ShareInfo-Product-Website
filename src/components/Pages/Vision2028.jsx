import { Navbar } from '../ui/Navbar/Navbar';
import { SectionFive } from '../ui/HomePage/SectionFive/SectionFive';
import { HeroPage } from '../ui/HomePage/SectionOne/HeroPage';
import { SectionOne } from '../ui/Vision/SectionOne';
import { Footer } from '../ui/Footer/Footer';
import { useEffect } from 'react';
import { Flex } from '@mantine/core';
import { Featured } from '../ui/Featured/Featured';

export const Vision2028 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <HeroPage vision='vision2028' />
                    <SectionOne />
                    <Featured />
                    <SectionFive />
                </Flex>
            </Flex>
            <Footer />
        </>
    );
};
