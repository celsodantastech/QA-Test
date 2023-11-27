import { Text, Code, Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Form } from '../components/Form';
import { Hero } from '../components/Hero';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { UserList } from '../components/UserList';

const Index = () => {
  const [userList, setUserList] = useState([]);

  // Define a function to handle form submission
  const handleFormSubmit = (name, email) => {
    // Update the userList state with the new user data
    setUserList((prev) => [...prev, { name, email }]);
    setTimeout(() => {
      setUserList((prev) => [...prev, { name, email }]);
    }, 5000);

    const newUser = { name, email };

    // POST the new user to the dummy API
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        // Update the userList state with the new user data from the response
        setUserList([...userList, data]);
      })
      .catch(error => console.error('Error posting data:', error));
  };

  const handleRemoveUser = (indexToRemove) => {
    const updatedUserList = userList.filter((_, index) => index !== indexToRemove);
    setUserList(updatedUserList);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const firstFiveUsers = data.slice(0, 4);
        setUserList(firstFiveUsers);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Dependency array is empty, meaning this runs once on mount

  return (
    <Container height="100vh" >
      <Hero />
      <Main>
        {/* Pass the handleFormSubmit function as a prop to the Form component */}
        <Form handleOnSubmit={handleFormSubmit} />
        <UserList userList={userList} onRemoveUser={handleRemoveUser} />
      </Main>
      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
