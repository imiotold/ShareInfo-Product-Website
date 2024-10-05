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
        // AOS.init();
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div style={{ position: 'sticky', top: 0 }}>
                <Navbar active='employers' />
            </div>

            {/* <div >
                <HeroPage active='employers' />
            </div> */}

            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <div>
                        <Heropage />
                    </div>
                    <div>
                        <SectionOne />
                    </div>
                    <div>
                        <CaseStudies />
                    </div>
                    <div>
                        <OurRecruiters />
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
