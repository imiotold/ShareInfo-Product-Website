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
import { Flex } from '@mantine/core';
import { Heropage } from '../ui/Aspirants/Heropage';

export const Aspirants = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      
    }, []);
    return (
        <>
            <div style={{ position: 'sticky', top: 0, zIndex: 2147483647 }}>
                <Navbar active='aspirants' />
            </div>

            <Flex align={'center'} justify={'center'}>
                <Flex gap={{ base: 50, md: 150 }} w={{ base: '90%', md: '70%' }} direction={'column'}>
                    <div>
                        {/* <HeroPage active='aspirants' /> */}
                        <Heropage />
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
