import { useEffect } from 'react';
import { Navbar } from '../ui/Navbar/Navbar';
import { SectionFive } from '../ui/HomePage/SectionFive/SectionFive';
import { Footer } from '../ui/Footer/Footer';
import { SectionOne } from '../ui/Employers/SectionOne';
import { CaseStudies } from '../ui/CaseStudies/CaseStudies';
import { Featured } from '../ui/Featured/Featured';
import { Flex } from '@mantine/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Heropage } from '../ui/Employers/Heropage';
import { OurRecruiters } from '../ui/Aspirants/OurRecruiters';


export const Employers = () => {
    useEffect(() => {
        AOS.init();
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar active='employers' />
            {/* <div data-aos='fade-up' data-aos-duration='3000'>
                <HeroPage active='employers' />
            </div> */}

            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <div data-aos='fade-up' data-aos-duration='3000'>
                        <Heropage />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionOne />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <CaseStudies />
                    </div>
                    <div >
                        <OurRecruiters/>
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
