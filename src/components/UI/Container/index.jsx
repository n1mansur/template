



import { Box } from "@chakra-ui/react";

const Container = ({ children, ...props }) => {
  return <Box maxW="1240px" marginX="auto" paddingX="20px" {...props} >
    {children}
  </Box>
}
export default Container