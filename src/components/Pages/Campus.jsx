import { useEffect } from 'react';
import { Navbar } from '../ui/Navbar/Navbar';
import { SectionFive } from '../ui/HomePage/SectionFive/SectionFive';
import { Footer } from '../ui/Footer/Footer';
import { Text, Flex } from '@mantine/core';
import { SectionOne } from '../ui/Campus/SectionOne';
import { SectionTwo } from '../ui/Campus/SectionTwo';
import { SectionThree } from '../ui/Campus/SectionThree';
import { CaseStudies } from '../ui/CaseStudies/CaseStudies';
import { Featured } from '../ui/Featured/Featured';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Heropage } from '../ui/Campus/Heropage';

export const Campus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <>
            <Navbar active='campus' />

            {/* <div data-aos='fade-up' data-aos-duration='3000'>
                <HeroPage active='campus' />
            </div> */}

            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <div data-aos='fade-up' data-aos-duration='3000'>
                        <Heropage />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <Flex justify={'center'}>
                            <Text size='lg' c={'blue'} w={{ base: '90%', md: '55%' }} ta={'center'}>
                                Smart Matching: Recommends suitable candidates to companies based on skills, experience, and academic
                                performance (compared to traditional keyword-based searches)
                            </Text>
                        </Flex>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionOne />
                    </div>

                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <Flex justify={'center'}>
                            <Text size='lg' w={{ base: '90%', md: '55%' }} ta={'center'}>
                                Smart Matching: Recommends suitable candidates to companies based on skills, experience, and academic
                                performance (compared to traditional keyword-based searches) Provides students with personalized job
                                recommendations and career guidance.
                            </Text>
                        </Flex>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionTwo />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionThree />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <CaseStudies />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <Featured />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionFive />
                    </div>
                </Flex>
            </Flex>
            <div>
                <Footer />
            </div>
        </>
    );
};
