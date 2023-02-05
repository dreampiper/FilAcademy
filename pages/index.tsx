import PageLayout from '@/components/page-layout';
import {
  Box,
  Button,
  Center,
  Divider,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsChatQuoteFill } from 'react-icons/bs';

const Contents = [
  'Pay as you Learn',
  'Fast loading docs',
  'Video learning with livepeer',
];

const IndexPage = () => {
  return (
    <PageLayout title='Home' description='Welcome to filAcademy'>
      <Stack
        spacing={4}
        mt={32}
        py={0}
        borderRadius={16}
        background='#1075f6'
        align='center'
        minH='100vh'
        w='100%'
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          spacing={2}
          align='center'
          w={{ base: '100%', md: '100%' }}
          py={{ base: 20, md: 0 }}
          px={5}
        >
          <Box fontWeight={600} fontSize='4xl' color='white'>
            FilAcademy
            <Box as='span' color={'#57c9f0'}>
              {' '}
              Online
            </Box>
          </Box>
          <Divider />
          <Text color='white' align='center'>
            A new Learning Experience
          </Text>

          <Button
            mt={3}
            sx={{
              background: 'orange',
              borderRadius: '15px',
              height: '43px',
            }}
          >
            Connect Wallet
          </Button>

          <Stack
            direction={['column', 'column', 'row']}
            w='100%'
            justifyContent={'center'}
            alignItems='center'
          >
            {Contents.map((x, i) => (
              <Center key={i} w={{ base: '70%', md: '50%' }} h='240px'>
                {' '}
                <Box
                  mt={3}
                  py={6}
                  w='100%'
                  background='white'
                  borderRadius={12}
                  fontWeight={600}
                  justifyContent='center'
                  alignItems={'center'}
                  flexDirection='column'
                  textAlign={'center'}
                  h='100%'
                  fontSize='xl'
                  sx={{
                    color: '#1c2178',
                  }}
                >
                  {x}
                </Box>
              </Center>
            ))}
          </Stack>

          <Box w='100%' py={2} h='20px'>
            <Box
              h='40px'
              w='100%'
              m={0}
              p={0}
              fontSize={'4xl'}
              bg='transparent'
              color='orange'
              position='absolute'
              display='flex'
              justifyContent={'center'}
              alignItems='center'
              left={0}
              right={0}
            >
              <BsChatQuoteFill />
            </Box>{' '}
            <Box py={4}>
              <Divider />
            </Box>
          </Box>
          <Box fontWeight={600} fontSize='xl' color='white' mt={6} py={12}>
            FilAcademy is provides a new learning...
            <br />
            <Box w='100%' py={2} h='20px'>
              <Box
                h='40px'
                textAlign={'center'}
                m={0}
                p={0}
                fontSize={'lg'}
                color='orange'
                opacity={0.6}
                position='absolute'
                display='flex'
                justifyContent={'center'}
                alignItems='center'
                left={0}
                right={0}
              >
                Tinybird, Dreampiper DAO
              </Box>{' '}
              <Box py={5} opacity={0.7}>
                <Divider />
              </Box>
            </Box>
          </Box>
        </VStack>
      </Stack>
    </PageLayout>
  );
};

export default IndexPage;
