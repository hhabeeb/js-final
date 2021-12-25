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
  <Text fontSize='3xl'>After that, two of the most popular Tweets come from Barack Obama. Close behind is one from Joe Biden and Kamala Harris. <Button variant='link' onClick={onOpen}>[Tweets]</Button></Text>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Tweet</ModalHeader>
    <ModalCloseButton />
    <ModalBody>

    <Text fontSize='xl'>Barack Obama</Text>
    <TwitterTweetEmbed
  tweetId={'896523232098078720'}
/>
<TwitterTweetEmbed
  tweetId={'1221552460768202756'}
/>
<Text fontSize='xl'>Joe Biden</Text>
<TwitterTweetEmbed
  tweetId={'1351897267666608129'}
/>
<Text fontSize='xl'>Kamala Harris</Text>
<TwitterTweetEmbed
  tweetId={'1325126733482385409'}
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