import React from 'react';


import {
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';


export default function Banner(props) {
  const { icon, ...rest } = props;

  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();


  const bgList = useColorModeValue('white', 'whiteAlpha.100');
  const bgShadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'unset',
  );

  return (
    <Menu isOpen={isOpen1} onClose={onClose1}>
      <MenuButton {...rest} onClick={onOpen1}>
        {icon}
      </MenuButton>
      <MenuList
        w="150px"
        minW="unset"
        maxW="150px !important"
        border="transparent"
        backdropFilter="blur(63px)"
        bg={bgList}
        boxShadow={bgShadow}
        borderRadius="20px"
        p="15px"
      ></MenuList>
    </Menu>
  );
}
