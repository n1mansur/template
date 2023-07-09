import MainPage from '@/components/Pages/Main'
import SEO from '@/components/SEO'
import MainLayout from "@/components/Layouts/MainLayout"

const Home = () => {

	return (
		<>
			<SEO />
			<MainLayout>
				<MainPage  />
			</MainLayout>
		</>
	)
}

export default Home
