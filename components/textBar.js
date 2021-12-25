import { Button, Stack, Text,    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure } from '@chakra-ui/react'

import { TwitterTweetEmbed } from 'react-twitter-embed';


function TextBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Stack spacing={3}>
  <Text fontSize='6xl'>Welcome to the Top Tweets Tracker!</Text>
  <Text fontSize='xs'>By Hamza Habeeb</Text>
  <Text fontSize='3xl'>From the top 10 most liked Tweets of all time, the most liked, at 7.2 million, comes from the family of Chadwick Boseman. <Button variant='link' onClick={onOpen}>[Tweet]</Button></Text>
 
  


<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Tweet</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <TwitterTweetEmbed
  tweetId={'1299530165463199747'}
/>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
     
    </ModalFooter>
  </ModalContent>
</Modal>

</Stack>
        </div>
    )
}

export default TextBar