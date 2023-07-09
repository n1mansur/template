import { Box } from '@chakra-ui/react'
import Container from '@/components/UI/Container'
import Logo from '@/components/UI/Logo'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useResponsive } from '@/hooks/useResponsive'
import styles from './styles.module.scss'


const Header = () => {
	const [scrolled, setScrolled] = useState(false)
	const lg = useResponsive('lg')

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () =>
				setScrolled(window.pageYOffset > 85)
			)
		}
	}, [])


	return (
		<Box
			className={styles.header}
			bgColor={scrolled ? 'white' : 'transparent'}
			boxShadow={scrolled ? '-5px 0 15px rgba(0,0,0,.2)' : ''}
			zIndex={5}
		>
			<Container className={styles.container}>
				<Link className={styles.linkLogo} href='/'>
					<Logo className={styles.logo} />
				</Link>
			</Container>
		</Box>
	)
}
export default Header
