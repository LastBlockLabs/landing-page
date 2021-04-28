import React from "react";
import { Box, Typography } from "@material-ui/core";

const Message = () => {
  return (
    <Box m={10} textAlign="center">
      <Typography variant="h3">To the Denex Community:</Typography>
      <br />
      <p>
        We have decided to return 100% Eth put into our contract back to our
        investors. Since consulting legal professionals, we have been made aware
        of some critical flaws in the legality of our project. Instead of
        putting the project in jeopardy down the road and risking
        investors&rsquo; money without a clear legal roadmap, we have decided
        that returning all funds is the right approach. You can see our treasury
        account paying out everyone here:
        <br />
        <br />[
        <a href="https://etherscan.io/address/0x75757f85cd8f0e9b6a48421dd95f38edf6c57e7e">
          https://etherscan.io/address/0x75757f85cd8f0e9b6a48421dd95f38edf6c57e7e
        </a>
        ] <br /> <br />
        It may take a few hours for all of the funds to be processed, so please
        be patient.&nbsp;
      </p>
      <p>
        On a positive side, our community has been there for us. You gave us
        insane support throughout our raise, and helped us raise over 500 Eth,
        validating our idea that there is a demand for a decentralized NFT
        exchange. You kept us going with support and we will keep working on
        this shared dream.
      </p>
      <p>We will be reevaluating our options and planning next steps.&nbsp;</p>
      <p>
        There is a lot to think about and reflect on. We hope to be able to give
        you more news soon, and stay in touch as we explore more ideas in this
        amazing, ever growing and changing ecosystem.
      </p>
      <br />
      <Typography variant="h5">-The Denex Team</Typography>
    </Box>
  );
};

export default Message;
