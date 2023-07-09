import { Box, Text } from '@chakra-ui/react'

const Logo = ({ ...props }) => {
	return (
		<Text
			color='primary.main'
			fontWeight={700}
			fontSize='30px'
			lineHeight='38px'
			{...props}
			fontFamily='Roboto'
		>
			LOGO
		</Text>
	)
}
export default Logo
