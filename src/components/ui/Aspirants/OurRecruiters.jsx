import { Flex, SimpleGrid, Text, Image } from '@mantine/core';

export const OurRecruiters = () => {
    return (
        <>
            <Text ta={'center'}>T O P&nbsp;&nbsp;R E C R U I T E R S</Text>

            <SimpleGrid mt={40} cols={{ base: 3, sm: 6 }} spacing={{ base: 'md', sm: 'md' }} verticalSpacing={{ base: 'md', sm: 'md' }}>
                {companyLogos.map((item, index) => (
                    <Flex key={index} className='trusted_by' p={30} justify={'center'} align={'center'} w={'100%'} h={100}>
                        <Image fit={'contain'} w={'auto'} h={100} src={item.url} alt={item.name} />
                    </Flex>
                ))}
            </SimpleGrid>
        </>
    );
};

const companyLogos = [
    {
        name: 'google',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
    },
    {
        name: 'google',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png'
    },
    {
        name: 'google',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
    },
    {
        name: 'google',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg'
    },
    {
        name: 'google',
        url: 'https://worldgbc.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/08/08135440/GSsignature_Blue.png'
    },
    {
        name: 'google',
        url: 'https://docs.comnoco.com/img/docs/supabase/supabase-logo-wordmark--dark.png'
    },
    {
        name: 'google',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Atlassian-logo.svg/2560px-Atlassian-logo.svg.png'
    },
    {
        name: 'google',
        url: 'https://cdn.prod.website-files.com/64b6f3636f598299028e8577/65a6ee1dfad0ee04bccb5086_Logo%20(1).svg'
    },
    {
        name: 'google',
        url: 'https://mintlify.s3-us-west-1.amazonaws.com/commandline/logo/wave-dark.png'
    },
    {
        name: 'google',
        url: 'https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0b52aa9e99b832574a53_full_logo_blurple_RGB.png'
    },

    {
        name: 'google',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png'
    },
    {
        name: 'google',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/2560px-Zomato_Logo.svg.png'
    }
];
