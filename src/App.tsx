import { lazy } from "react";

import NavMenu from "./components/NavMenu/NavMenu";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import AboutSection from "./components/AboutSection/AboutSection";

const ClientsSection = lazy(
	() => import("./components/ClientsSection/ClientsSection")
);
const ContactSection = lazy(
	() => import("./components/ContactSection/ContactSection")
);
const FeaturedProjectsSection = lazy(
	() => import("./components/FeaturedProjectsSection/FeaturedProjectsSection")
);
const Footer = lazy(() => import("./components/Footer/Footer"));
const NewsSectiont = lazy(() => import("./components/NewsSection/NewsSection"));
const ProcessSection = lazy(
	() => import("./components/ProcessSection/ProcessSection")
);
const TeamSection = lazy(() => import("./components/TeamSection/TeamSection"));

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
