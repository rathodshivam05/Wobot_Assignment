import React from 'react';
import {
    Box, Container, Flex, Heading, Image, Text, FormControl,
    FormLabel,
    Input,
    Select,
    ButtonGroup,
    Button,
} from '@chakra-ui/react'

const Register = () => {
    return (
        <Container maxW='container.xl' bg='#F9F9F9' h={'auto'}>
            <Image src="wobot-logo.png" alt="logo" p={5} />
            <Flex direction={'column'} m='auto' p={5} h="auto" w="450px" bg='white' color='black' shadow={'xl'} borderRadius={10} align={'center'}>
                <svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="11.0477" height="27.8427" rx="5.52383" transform="matrix(0.854439 -0.519552 0.510535 0.859857 0.499878 24.0586)" fill="#3766E8"></rect><rect width="11.0477" height="42.3694" rx="5.52383" transform="matrix(0.854439 -0.519552 0.510535 0.859857 12.3904 8.65234)" fill="#3766E8"></rect><rect width="11.0477" height="21.5479" rx="5.52383" transform="matrix(0.854439 -0.519552 0.510535 0.859857 31.0594 5.73828)" fill="#3766E8"></rect></svg>
                <Heading as='h3' py={1} px={10} size='lg'>It's a delight to have you onboard </Heading>
                <Text mt={2} color={'darkslategrey'} fontSize="18px">Help us know you better.</Text>
                <Text px={20} color={'gray'}>(This is how we optimize Wobot as per your business needs.)</Text>

                <FormControl p={5}>
                    <FormLabel>Your name</FormLabel>
                    <Input type="text" placeholder='e.g. John Smith' />
                    <FormLabel pt={3}>Company name</FormLabel>
                    <Input type="text" placeholder='e.g. Alpha Inc.' />
                    <FormLabel pt={3}>Industry</FormLabel>
                    <Select name="" id="" placeholder='Select' mb={3}>
                        <option value="">IT Industry</option>
                        <option value="">Food Industry</option>
                        <option value="">Healthcare Industry</option>
                        <option value="">Manufacturing Industry</option>
                    </Select>
                    <FormLabel>Number of Locations</FormLabel>
                    <ButtonGroup spacing='7' mb={4} >
                        <Button colorScheme='gray' size='xs'>1-20</Button>
                        <Button colorScheme='gray' size='xs'>21-50</Button>
                        <Button colorScheme='gray' size='xs'>51-200</Button>
                        <Button colorScheme='gray' size='xs'>201-500</Button>
                        <Button colorScheme='gray' size='xs'>500+</Button>

                    </ButtonGroup>
                    <Button mt={3} bgColor={'#3766e8'} color='white' size="lg" w="100%">Get Started</Button>
                </FormControl>
            </Flex>

        </Container>

    )
}

export default Register
