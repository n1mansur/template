import React, { FC } from 'react'
import Footer from '@/components/UI/Footer'
import Header from '@/components/UI/Header'

const Layout = ({ children, transparentHeader = true }) => {
	return (
		<>
			<Header transparentHeader={transparentHeader} />
			{children}
			<Footer />
		</>
	)
}

export default Layout
