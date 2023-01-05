// Libraries
import {
  AtSignIcon,
  AttachmentIcon,
  LinkIcon,
  ViewIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CopyIcon,
  ChatIcon,
  UpDownIcon,
} from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

const MarkdownBar = () => {
  return (
    <Box fontSize={{ sm: 'text.mSmall', md: 'text.small' }} display='flex'>
      <AtSignIcon marginRight='5px' />
      <LinkIcon marginRight='5px' />
      <AttachmentIcon marginRight='5px' />
      <ViewIcon marginRight='5px' />
      <ArrowRightIcon marginRight='5px' />
      <ArrowLeftIcon marginRight='5px' />
      <CopyIcon marginRight='5px' />
      <ChatIcon marginRight='5px' />
      <UpDownIcon marginRight='5px' />
    </Box>
  );
};

export default MarkdownBar;
