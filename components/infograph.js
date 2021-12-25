import {
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { TwitterTweetEmbed } from "react-twitter-embed";

function Infograph() {
  const [showAllModal2020, setAllShowModal2020] = useState(false);
  const [showAllModal2021, setAllShowModal2021] = useState(false);

  return (
    <div>
      <Text fontSize="3xl" as="b">
        <a id="info_anchor">Interactive infographic</a>
      </Text>
      <Tabs variant="soft-rounded" colorScheme="green">
        <br />
        <TabList>
          <Tab>All Top Tweets</Tab>
          <Tab>Top Politics Tweets</Tab>
          <Tab>Top Entertainment Tweets</Tab>
          <Tab>Top Company Tweets</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* THIS IS FOR ALL THE TOP TWEETS */}
            Filter:
            <Button
              colorScheme="blue"
              variant="ghost"
              onClick={() => setAllShowModal2020(!showAllModal2020)}
            >
              2020*
            </Button>
            <Button
              colorScheme="blue"
              variant="ghost"
              onClick={() => setAllShowModal2021(!showAllModal2021)}
            >
              2021
            </Button>
            {!showAllModal2020 && !showAllModal2021
              ? "Currently showing Tweets from 2020 and 2021"
              : null}
            <br />
            {!showAllModal2020 && !showAllModal2021 ? (
              <div>
                <Stack direction={["column", "row"]} spacing="24px" mt="12">
                  <Box>
                    {"2020"}
                    <TwitterTweetEmbed tweetId={"1299530165463199747"} />
                  </Box>
                  <Box>
                    {"2017"}
                    <TwitterTweetEmbed tweetId={"896523232098078720"} />
                  </Box>
                  <Box>
                    {"2021"}
                    <TwitterTweetEmbed tweetId={"1351897267666608129"} />
                  </Box>
                  <Box>
                    {"2020"}
                    <TwitterTweetEmbed tweetId={"1221552460768202756"} />
                  </Box>
                  <Box>
                    {"2020"}
                    <TwitterTweetEmbed tweetId={"1266821069823975430"} />
                  </Box>
                </Stack>
                <Stack direction={["column", "row"]} spacing="24px" mt="6">
                  <Box>
                    {"2021"}
                    <TwitterTweetEmbed tweetId={"1445078208190291973"} />
                  </Box>
                  <Box>
                    {"2021"}
                    <TwitterTweetEmbed tweetId={"1353536893787357184"} />
                  </Box>
                  <Box>
                    {"2020"}
                    <TwitterTweetEmbed tweetId={"1325126733482385409"} />
                  </Box>
                  <Box>
                    {"2020"}
                    <TwitterTweetEmbed tweetId={"1298730289737293824"} />
                  </Box>
                  <Box>
                    {"2021"}
                    <TwitterTweetEmbed tweetId={"1381179392798302213"} />
                  </Box>
                </Stack>
              </div>
            ) : showAllModal2020 ? (
              <div>
                <Stack direction={["column", "row"]} spacing="24px" mt="12">
                  <Box>
                    {"2020"}
                    <TwitterTweetEmbed tweetId={"1299530165463199747"} />
                  </Box>
                  <Box>
                    {"2017"}
                    <TwitterTweetEmbed tweetId={"896523232098078720"} />
                  </Box>

                  <Box>
                    {"2020"}
                    <TwitterTweetEmbed tweetId={"1221552460768202756"} />
                  </Box>
                  <Box>
                    {"2020"}
                    <TwitterTweetEmbed tweetId={"1266821069823975430"} />
                  </Box>
                  <Box>
                    {"2020"}
                    <TwitterTweetEmbed tweetId={"1325126733482385409"} />
                  </Box>
                </Stack>
                <Stack direction={["column", "row"]} spacing="24px" mt="6">
                  <Box>
                    {"2020"}
                    <TwitterTweetEmbed tweetId={"1298730289737293824"} />
                  </Box>
                </Stack>
              </div>
            ) : showAllModal2021 ? (
              <div>
                <Stack direction={["column", "row"]} spacing="24px" mt="12">
                  <Box>
                    {"2021"}
                    <TwitterTweetEmbed tweetId={"1351897267666608129"} />
                  </Box>
                  <Box>
                    {"2021"}
                    <TwitterTweetEmbed tweetId={"1445078208190291973"} />
                  </Box>
                  <Box>
                    {"2021"}
                    <TwitterTweetEmbed tweetId={"1353536893787357184"} />
                  </Box>
                  <Box>
                    {"2021"}
                    <TwitterTweetEmbed tweetId={"1381179392798302213"} />
                  </Box>
                </Stack>
              </div>
            ) : null}
          </TabPanel>
          <TabPanel>
            <div>
              <Stack direction={["column", "row"]} spacing="24px" mt="12">
                <Box>
                  {"2017"}
                  <TwitterTweetEmbed tweetId={"896523232098078720"} />
                </Box>
                <Box>
                  {"2021"}
                  <TwitterTweetEmbed tweetId={"1351897267666608129"} />
                </Box>
                <Box>
                  {"2020"}
                  <TwitterTweetEmbed tweetId={"1221552460768202756"} />
                </Box>
                <Box>
                  {"2020"}
                  <TwitterTweetEmbed tweetId={"1325126733482385409"} />
                </Box>
              </Stack>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Stack direction={["column", "row"]} spacing="24px" mt="12">
                <Box>
                  {"2020"}
                  <TwitterTweetEmbed tweetId={"1299530165463199747"} />
                </Box>

                <Box>
                  {"2020"}
                  <TwitterTweetEmbed tweetId={"1266821069823975430"} />
                </Box>
                <Box>
                  {"2021"}
                  <TwitterTweetEmbed tweetId={"1353536893787357184"} />
                </Box>

                <Box>
                  {"2020"}
                  <TwitterTweetEmbed tweetId={"1298730289737293824"} />
                </Box>
                <Box>
                  {"2021"}
                  <TwitterTweetEmbed tweetId={"1381179392798302213"} />
                </Box>
              </Stack>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Stack direction={["column", "row"]} spacing="24px" mt="6">
                <Box>
                  {"2021"}
                  <TwitterTweetEmbed tweetId={"1445078208190291973"} />
                </Box>
              </Stack>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      * With the exception of one pre-2020 Tweet (in 2017 from @BarackObama){" "}
      <br />
      All data is obtained from twitter.com
    </div>
  );
}

export default Infograph;
