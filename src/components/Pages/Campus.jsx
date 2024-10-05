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
        // AOS.init();
    }, []);
    return (
        <>
            <div style={{ position: 'sticky', top: 0, zIndex: 2147483646 }}>
                <Navbar active='campus' />
            </div>

            {/* <div data-aos='fade-up' data-aos-duration='3000'>
                <HeroPage active='campus' />
            </div> */}

            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <div>
                        <Heropage />
                    </div>
                    <div>
                        <Flex justify={'center'}>
                            <Text size='lg' c={'blue'} w={{ base: '90%', md: '55%' }} ta={'center'}>
                                Smart Matching: Recommends suitable candidates to companies based on skills, experience, and academic
                                performance (compared to traditional keyword-based searches)
                            </Text>
                        </Flex>
                    </div>

                    <div>
                        <SectionOne />
                    </div>

                    <div>
                        <Flex justify={'center'}>
                            <Text size='lg' w={{ base: '90%', md: '55%' }} ta={'center'}>
                                Smart Matching: Recommends suitable candidates to companies based on skills, experience, and academic
                                performance (compared to traditional keyword-based searches) Provides students with personalized job
                                recommendations and career guidance.
                            </Text>
                        </Flex>
                    </div>

                    <div>
                        <SectionTwo />
                    </div>
                    <div>
                        <SectionThree />
                    </div>
                    <div>
                        <CaseStudies />
                    </div>
                    <div>
                        <Featured />
                    </div>
                    <div>
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
