import { Flex, Button, Text, Title, Image } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import FourPiller from '../../../../assets/FourPiller.svg';

export const SectionOne = () => {
    return (
        <>
            <Flex id='features' align={'center'} direction={'column'}>
                <Title c={'white'} className='text-custom_gradient_orange' style={{ fontFamily: 'Nunito' }} order={1} ta={'center'}>
                    Our Integrations
                </Title>
                <Text ta={'center'}>We are integrating 4 pillers of Success</Text>

                <Image w={{ base: '90%', md: '70%' }} className='no-select no-context-menu' src={FourPiller} />

                <Button
                    onClick={() => window.open('https://web.shareinfo.io/redirect', '_blank', 'noopener,noreferrer')}
                    size='sm'
                    radius={'md'}
                    color='#F94612'
                    rightSection={<IconExternalLink style={{ width: '70%', height: '70%' }} />}>
                    Get Started
                </Button>
            </Flex>
        </>
    );
};
