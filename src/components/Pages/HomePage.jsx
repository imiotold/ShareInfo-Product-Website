import { useEffect } from 'react';
import { Navbar } from '../ui/Navbar/Navbar';
import { Footer } from '../ui/Footer/Footer';
import { HeroPage } from '../ui/HomePage/SectionOne/HeroPage';
import { SectionOne } from '../ui/HomePage/SectionOne/SectionOne';
import { SectionTwo } from '../ui/HomePage/SectionTwo/SectionTwo';
import { SectionThree } from '../ui/HomePage/SectionThree/SectionThree';
import { SectionFour } from '../ui/HomePage/SectionFour/SectionFour';
import { SectionFive } from '../ui/HomePage/SectionFive/SectionFive';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Flex } from '@mantine/core';
import { ShareInfoVedio } from '../ui/HomePage/SectionOne/ShareInfoVedio';
import { MissionBanner } from '../ui/HomePage/SectionTwo/MissionBanner';
import { ForLearn } from '../ui/HomePage/SectionFour/ForLearn';
import { CaseStudies } from '../ui/CaseStudies/CaseStudies';
import { TrustedBy } from '../ui/Trust/TrustedBy';
import { WhyTheyTrust } from '../ui/Trust/WhyTheyTrust';
import { MisiionShareInfo } from '../ui/HomePage/MissionShareInfo/MisiionShareInfo';
import { TechCore } from '../ui/TechCore/TechCore';
import { Featured } from '../ui/Featured/Featured';

export const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />

            <div data-aos='fade-up' data-aos-duration='3000'>
                <HeroPage />
            </div>
            {/* <FloatingNavDemo /> */}

            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <ShareInfoVedio />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionOne />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionTwo />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <MissionBanner />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionThree />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <SectionFour />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <ForLearn />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <CaseStudies />
                    </div>
                    <div>
                        <TrustedBy />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <WhyTheyTrust />
                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <MisiionShareInfo />
                    </div>
                    <div>
                        <TechCore />
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

HomePage.displayName = 'HomePage';
