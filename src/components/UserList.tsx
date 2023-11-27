import { Box, Card, Text, VStack, Heading, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export const UserList = ({ userList, onRemoveUser }) => {
    const handleRemoveUser = (index) => {
        // Bug 3: Directly modifying state
        userList.splice(index, 1);
        onRemoveUser(index);
    };

    return (
        <Card p={4}>
            <Heading as="h2" size="lg" mb={4}>
                User List
            </Heading>
            <VStack spacing={4} align="stretch">
                {userList.map((user, index) => (
                    <Box
                        key={index}
                        p={4}
                        boxShadow="md"
                        borderWidth="1px"
                        borderRadius="md"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <VStack align="stretch">
                            <Text fontWeight="bold">Name: {user.name}</Text>
                            <Text>Email: {user.email}</Text>
                        </VStack>
                        <IconButton
                            icon={<CloseIcon />}
                            colorScheme="red"
                            aria-label={`Remove user ${user.name}`}
                            onClick={() => handleRemoveUser(index)}
                        />
                    </Box>
                ))}
            </VStack>
        </Card>
    );
};
