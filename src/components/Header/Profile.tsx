import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
}
export function Profile({showProfileData = true}: ProfileProps){
  return(
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Filipe Rodrigues</Text>
        <Text color="gray.300" fontSize="small">
          lipe_rsilva@hotmail.com
        </Text>
        </Box>
      )}
      
      <Avatar size="md" name="Filipe Rodrigues" src="https://github.com/lipersilva.png"/>
   </Flex>
  );
}