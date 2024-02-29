import React from "react";
import { Box, Container, Heading, Text, Button, Image, VStack, HStack, Input, useToast } from "@chakra-ui/react";
import { FaPlay, FaCheckCircle, FaRegCreditCard } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubscribe = () => {
    // Here should be your subscription logic. For now, it's just a toast message.
    toast({
      title: "Subscription Success.",
      description: "You've successfully subscribed to our IPTV service!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} alignItems="flex-start">
        <Heading as="h1">IPTV Streaming Service</Heading>
        <Text as="p" fontSize="lg">
          Enjoy your favorite TV channels, movies, and sports events with our premium IPTV streaming service.
        </Text>

        <Box p={6} boxShadow="md" borderRadius="md">
          <VStack spacing={4} alignItems="flex-start">
            <HStack spacing={4}>
              <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUViUyMHNjcmVlbnxlbnwwfHx8fDE3MDkyMjg0NzN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="IPTV Streaming" />
              <VStack alignItems="flex-start">
                <Heading as="h3" size="md">
                  Start Streaming Now
                </Heading>
                <HStack>
                  <FaCheckCircle color="green" />
                  <Text>Thousands of TV channels</Text>
                </HStack>
                <HStack>
                  <FaCheckCircle color="green" />
                  <Text>4K & HD quality</Text>
                </HStack>
                <HStack>
                  <FaCheckCircle color="green" />
                  <Text>24/7 Customer Support</Text>
                </HStack>
              </VStack>
            </HStack>

            <HStack spacing={4} alignItems="center">
              <Input placeholder="Email Address" type="email" />
              <Button leftIcon={<FaRegCreditCard />} colorScheme="teal" onClick={handleSubscribe}>
                Subscribe
              </Button>
            </HStack>
          </VStack>
        </Box>

        <Button rightIcon={<FaPlay />} colorScheme="pink" variant="solid" size="lg">
          Watch a Demo
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
