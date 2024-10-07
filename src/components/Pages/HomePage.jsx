import { useEffect } from 'react';
import { Navbar } from '../ui/Navbar/Navbar';
import { Footer } from '../ui/Footer/Footer';
import { HeroPage } from '../ui/HomePage/SectionOne/HeroPage';
import { SectionOne } from '../ui/HomePage/SectionOne/SectionOne';
import { SectionTwo } from '../ui/HomePage/SectionTwo/SectionTwo';
import { SectionThree } from '../ui/HomePage/SectionThree/SectionThree';
import { SectionFour } from '../ui/HomePage/SectionFour/SectionFour';
import { SectionFive } from '../ui/HomePage/SectionFive/SectionFive';
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
    }, []);
    return (
        <>
            <div style={{ position: 'sticky', top: 0, zIndex: 2147483646 }}>
                <Navbar />
            </div>
            <div>
                <HeroPage />
            </div>

            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <div>
                        <ShareInfoVedio />
                    </div>
                    <div>
                        <SectionOne />
                    </div>
                    <div>
                        <SectionTwo />
                    </div>

                    <div>
                        <SectionThree />
                    </div>

                    <div>
                        <SectionFour />
                    </div>
                    <div>
                        <MissionBanner />
                    </div>
                    <div>
                        <ForLearn />
                    </div>
                    <div>
                        <CaseStudies />
                    </div>
                    <div>
                        <TrustedBy />
                    </div>
                    <div>
                        <WhyTheyTrust />
                    </div>
                    <div>
                        <MisiionShareInfo />
                    </div>
                    <div>
                        <TechCore />
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

HomePage.displayName = 'HomePage';
