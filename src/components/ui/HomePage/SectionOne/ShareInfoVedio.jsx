import { Paper, Title, Text } from '@mantine/core';

export const ShareInfoVedio = () => {
    return (
        <>
            <div>
                <Title c={'white'} className='text-custom_gradient_blue' style={{ fontFamily: 'Nunito' }} order={1} align={'center'}>
                    1% starts with ShareInfo
                </Title>
                <Text ta={'center'}>Bridge Your Ambition and Drive into Success! </Text>
                <Paper bg={'#0C0C0C'} p={10} style={{ borderRadius: '30px' }} mt={20} shadow='lg'>
                    <video style={{ borderRadius: '23px' }} autoPlay muted>
                        <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' type='video/mp4' />
                    </video>
                </Paper>
            </div>
        </>
    );
};
