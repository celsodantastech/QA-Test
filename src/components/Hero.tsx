import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    w="100%"
    justifyContent="center"

    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    flexDirection="column"
  >
    <Heading fontSize="5vw" textAlign="center">{title}</Heading>
    <Heading fontSize="3vw" textAlign="center"
      bgClip="text" color="white">MyCareForce</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Users-list',
}
