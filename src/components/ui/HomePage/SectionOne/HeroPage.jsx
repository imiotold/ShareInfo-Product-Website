import { Flex, Text, em, Title, Stack, Group, Button, BackgroundImage, Image } from '@mantine/core';
import classes from '../../style.module.css';
import { useMediaQuery } from '@mantine/hooks';
import FluidWall from '../../../../assets/background.svg';
import badgelanding from '../../../../assets/badge.svg';
import buttonlanding from '../../../../assets/button.svg';
import iconslanding from '../../../../assets/iconslanding.svg';

const renderSubHeadingButton = (active) => {
    switch (active) {
        case 'aspirants':
            return <span>for Aspirants</span>;
        case 'campus':
            return <span>for Campus</span>;
        case 'employers':
            return <span>for Recruiters</span>;
        case 'learning':
            return <span>for Learning</span>;
        default:
            return <span>Built for Placements</span>;
    }
};

const description = (active) => {
    switch (active) {
        case 'aspirants':
            return <>Building Tech Aspirants to Dream Higher</>;
        case 'campus':
            return <>Our Campus Suit for Placements and Skill Up Packages</>;
        case 'employers':
            return <>Our Recruiter Suit to find the Best Talent Pool to your team</>;
        case 'learning':
            return <>Our Learning Suit for Students and Educators</>;
        default:
            return (
                <>
                    ShareInfo is built to bridge the gap between Aspirants, <br /> Institutes, and Recruiters Shaping the future of tech
                    enthusiasts
                </>
            );
    }
};

const handleHash = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export const HeroPage = (props) => {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

    return !props.vision ?
            // <BackgroundImage src={FluidWall}>
            //     <Flex id='shareinfo' direction={'column'} align={'center'} justify={'center'} h={'calc(100dvh - 80px)'}>
            //         <Text mb={20} fw={600} size={isMobile ? '4rem' : '9rem'} className={classes.linearwipe}>
            //             ShareInfo
            //         </Text>

            //         <button className='bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block'>
            //             <span className='absolute inset-0 overflow-hidden rounded-full'>
            //                 <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
            //             </span>
            //             <div className='relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 '>
            //                 {renderSubHeadingButton(props.active)}
            //             </div>
            //             <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
            //         </button>

            //         <Text mb={20} px={20} ta={'center'} mt={40}>
            //             {description(props.active)}
            //         </Text>
            //     </Flex>
            // </BackgroundImage>

            <BackgroundImage src={FluidWall}>
                <Flex
                    id='shareinfo'
                    direction={'column'}
                    align={'center'}
                    justify={'center'}
                    h={isMobile ? 'calc(100dvh - 60px)' : 'calc(100dvh - 80px)'}>
                    <Image draggable={false} style={{ pointerEvents: 'none' }} mb={20} src={badgelanding} w={{ base: '70%', sm: '17%' }} />
                    <Text mb={20} fw={600} size={isMobile ? '4rem' : '6.5rem'} className={classes.linearwipe}>
                        ShareInfo
                    </Text>
                    <Text mb={20} c={'white'} ta={'center'} fw={500} size={isMobile ? '1rem' : '1.5rem'}>
                        Built to bridge the gap between <br /> Aspirants, Institutes, and Recruiters
                    </Text>
                    <Image onClick={()=>handleHash('explore')} draggable={false} style={{ cursor: 'pointer' }} mb={20} src={buttonlanding} w={{ base: '120PX', sm: '150px' }} />

                    <Image draggable={false} style={{ pointerEvents: 'none' }} mt={60} src={iconslanding} w={{ base: '70%', sm: '20%' }} />
                </Flex>
            </BackgroundImage>
        :   <>
                <Flex id='shareinfo' direction={'column'} align={'center'} justify={'center'} h={'calc(100vh - 80px)'}>
                    <button className='bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block'>
                        <span className='absolute inset-0 overflow-hidden rounded-full'>
                            <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                        </span>
                        <div className='relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 '>
                            imiot
                        </div>
                        <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
                    </button>

                    <Title fw={700} size={isMobile ? '5rem' : '9rem'} style={{ fontFamily: 'Nunito' }} className={classes.linearwipeVision}>
                        Vision 2028
                    </Title>

                    <Text w={{ base: '90%', md: '60%' }} px={20} ta={'center'} mt={40}>
                        Imiot is transforming the management placement landscape with ShareInfo, a groundbreaking AI-powered software
                        solution. ShareInfo leverages the power of artificial intelligence to streamline the process for both companies
                        seeking top talent and candidates pursuing leadership roles.
                    </Text>
                </Flex>
            </>;
};
