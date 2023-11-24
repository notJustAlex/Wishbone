import AboutSection from "./components/AboutSection/AboutSection";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection/FeaturedProjectsSection";
import Footer from "./components/Footer/Footer";
import NavMenu from "./components/NavMenu/NavMenu";
import NewsSectiont from "./components/NewsSection/NewsSection";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import TeamSection from "./components/TeamSection/TeamSection";

function App() {
	return (
		<>
			<header>
				<NavMenu />
			</header>
			<main>
				<ProjectsSection />
				<AboutSection />
				<NewsSectiont />
				<ProcessSection />
				<ClientsSection />
				<FeaturedProjectsSection />
				<TeamSection />
				<ContactSection />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
