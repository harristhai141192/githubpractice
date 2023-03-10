// Libraries
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface IProps {
  isOpen?: boolean;
  children?: React.ReactNode;
}

const Status: React.FC<IProps> = ({ isOpen = false, children }) => {
  return (
    <Box
      bgColor={isOpen ? 'statusColor.green' : 'statusColor.purple'}
      padding={{ sm: '2px', md: '5px 0px' }}
      borderRadius='55px'
      fontSize={{ sm: 'text.mSmall', md: 'text.small' }}
      color='white'
      width={{ sm: '70px', md: '100px' }}
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
      data-testid='statusLabel'
    >
      {children}
      <Text marginLeft='5px'>{isOpen ? 'Open' : 'Closed'}</Text>
    </Box>
  );
};

export default Status;
