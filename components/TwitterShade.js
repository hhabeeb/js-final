




import { Button, Stack, Text,    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure } from '@chakra-ui/react'

import { TwitterTweetEmbed } from 'react-twitter-embed';


function TwitterShade() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Stack spacing={3}>
  <Text fontSize='3xl'>One random top Tweet comes from the official @Twitter account, which posted a Tweet when the Facebook/WhatsApp/Messenger services were down and users flocked to Twitter. The Tweet poked fun at Facebook, which is probably why it received so many likes, along with the fact that more people were logging onto Twitter because everything else was down. <Button variant='link' onClick={onOpen}>[Tweet]</Button></Text>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Tweet</ModalHeader>
    <ModalCloseButton />
    <ModalBody>

    <Text fontSize='xl'>Twitter</Text>
    <TwitterTweetEmbed
  tweetId={'1445078208190291973'}
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

export default TwitterShade