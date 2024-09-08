import { useEffect } from 'react';
import { Flex } from '@mantine/core';
import { Navbar } from '../ui/Navbar/Navbar';
import { Footer } from '../ui/Footer/Footer';
import { SectionThree } from '../ui/Aspirants/SectionThree';
import { SectionTwo } from '../ui/Aspirants/SectionTwo';
import { SectionFive } from '../ui/HomePage/SectionFive/SectionFive';
import { OurRecruiters } from '../ui/Aspirants/OurRecruiters';
import { TechCore } from '../ui/TechCore/TechCore';
import { Featured } from '../ui/Featured/Featured';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SectionOne } from '../ui/Learning/SectionOne';
import { Challenges } from '../ui/Learning/Challenges';
import { Connections } from '../ui/Learning/Connections';
import { Internship } from '../ui/Learning/Internship';
import { Community } from '../ui/Community/Community';
import { Heropage } from '../ui/Learning/Heropage';

export const Learning = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <>
            <Navbar active='learning' />

            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <div data-aos='fade-up' data-aos-duration='3000'>
                        <Heropage />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionOne />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionTwo />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <Challenges />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <Connections />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <Internship />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionThree />
                    </div>
                    <div>
                        <TechCore />
                    </div>
                    <div>
                        <OurRecruiters />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <Community />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <Featured />
                    </div>

                    <div>
                        <SectionFive />
                    </div>
                </Flex>
            </Flex>
            <Footer />
        </>
    );
};
