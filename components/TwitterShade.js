import {
  Button,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { TwitterTweetEmbed } from "react-twitter-embed";

function TwitterShade() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Stack spacing={3}>
        <Text fontSize="3xl">
          One top 10 Tweets of all time comes from the official Twitter account.{" "}
          <Text onClick={onOpen} as="mark" cursor="grab">
            The Tweet they posted
          </Text>{" "}
          poked fun at Facebook when Facebook services (including Instagram,
          Whatsapp, Messenger) were down and users flocked to Twitter.{" "}
        </Text>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Tweet</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontSize="xl">Twitter</Text>
              <TwitterTweetEmbed tweetId={"1445078208190291973"} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </div>
  );
}

export default TwitterShade;
