import { useEffect } from 'react';
import { OurRecruiters } from '../ui/Aspirants/OurRecruiters';
import { SectionOne } from '../ui/Aspirants/SectionOne';
import { SectionThree } from '../ui/Aspirants/SectionThree';
import { SectionTwo } from '../ui/Aspirants/SectionTwo';
import { CaseStudies } from '../ui/CaseStudies/CaseStudies';
import { Featured } from '../ui/Featured/Featured';
import { Footer } from '../ui/Footer/Footer';
import { Navbar } from '../ui/Navbar/Navbar';
import { SectionFive } from '../ui/HomePage/SectionFive/SectionFive';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Flex } from '@mantine/core';
import { Heropage } from '../ui/Aspirants/Heropage';

export const Aspirants = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <>
            <Navbar active='aspirants' />

            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <div data-aos='fade-up' data-aos-duration='3000'>
                        {/* <HeroPage active='aspirants' /> */}
                        <Heropage />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionOne />
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
                    <div>
                        <OurRecruiters />
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
