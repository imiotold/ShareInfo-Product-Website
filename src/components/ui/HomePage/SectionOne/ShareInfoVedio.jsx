import { Paper, Title, Text } from '@mantine/core';

export const ShareInfoVedio = () => {
    return (
        <>
            <div id='explore'>
                <Title
                    mt={50}
                    c={'white'}
                    className='text-custom_gradient_blue'
                    style={{ fontFamily: 'Nunito' }}
                    order={1}
                    align={'center'}>
                    1% starts with ShareInfo
                </Title>
                <Text ta={'center'}>Bridge Your Ambition and Drive into Success! </Text>
                <Paper mt={50} bg={'#0C0C0C'} p={10} style={{ borderRadius: '30px' }} shadow='lg'>
                    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                        <iframe
                            style={{
                                borderRadius: '23px',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            }}
                            src='https://www.youtube.com/embed/ALoLgtQwj0Y?si=hNC5iOs75Uu-nsaN'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            referrerPolicy='strict-origin-when-cross-origin'
                            allowFullScreen></iframe>
                    </div>
                </Paper>
            </div>
        </>
    );
};

{
    /* <video style={{ borderRadius: '23px' }} autoPlay muted>
    <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' type='video/mp4' />
</video>; */
}
