import { useState } from 'react';
import {
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

export const Form = ({ handleOnSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(name, email);
  };

  return (
    <Card p={4} boxShadow="md" borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>
          <Button
            colorScheme="teal"
            type="submit"
            isFullWidth
            disabled={isSubmitted}
          >
            {isSubmitted ? 'Submitted' : 'Submit'}
          </Button>
        </Stack>
      </form>
      {isSubmitted && (
        <Text mt={4} color="green.500">
          Form Submitted!
        </Text>
      )}
    </Card>
  );
};
