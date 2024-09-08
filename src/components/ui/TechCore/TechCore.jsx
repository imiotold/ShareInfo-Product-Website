import { Flex, Text, Title, Image, SimpleGrid } from '@mantine/core';

export const TechCore = () => {
    return (
        <>
            <Flex align={'center'} direction={'column'}>
                <Title c={'white'} style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                    Technology at it’s Core
                </Title>
                <Text w={{ base: '90%', md: '40%' }} ta={'center'}>
                    We Always Concentrate to Integrate the Best Configuration from the Industry !
                </Text>
            </Flex>

            <SimpleGrid mt={40} cols={{ base: 3, sm: 6 }} spacing={{ base: 'md', sm: 'md' }} verticalSpacing={{ base: 'md', sm: 'md' }}>
                {technologyLogos.map((item, index) => (
                    <Flex key={index} className='trusted_by' p={30} justify={'center'} align={'center'} w={'100%'} h={100}>
                        <Image fit={'contain'} w={'auto'} h={100} src={item.url} alt={item.name} />
                    </Flex>
                ))}
            </SimpleGrid>
        </>
    );
};

const technologyLogos = [
    {
        name: 'flutter',
        url: 'https://storage.googleapis.com/cms-storage-bucket/6e19fee6b47b36ca613f.png'
    },
    {
        name: 'react',
        url: 'https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png'
    },
    {
        name: 'svelte',
        url: 'https://iconape.com/wp-content/png_logo_vector/svelte.png'
    },

    {
        name: 'angular',
        url: 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png'
    },
    {
        name: 'django',
        url: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-logo-icon.png'
    },
    {
        name: 'springboot',
        url: 'https://www.yessinfotech.com/wp-content/uploads/2019/11/spring-boot-logo.png'
    },
    {
        name: 'rest',
        url: 'https://www.brainboxes.com/files/pages/support/faqs/bb-400-faqs/logos/rest%20logo.png'
    },
    {
        name: 'mongodb',
        url: 'https://cdn.cosmicjs.com/a92cd3b0-bd3f-11ed-907c-292879eb8504-mongodb-cms.svg'
    },

    {
        name: 'sql',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png'
    },

    {
        name: 'azure',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png'
    },

    {
        name: 'ai',
        url: 'https://cdn-icons-png.freepik.com/256/10645/10645125.png'
    },
    {
        name: 'llm',
        url: 'https://s9i7q5a6.rocketcdn.me/wp-content/uploads/llms_800x800.png'
    }
];
