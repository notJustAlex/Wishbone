import { ReactComponent as FinalizingIcon } from "../../assets/icons/Finalizing-Icon.svg";
import { ReactComponent as BuildingIcon } from "../../assets/icons/Building-Icon.svg";
import { ReactComponent as SketchingIcon } from "../../assets/icons/Sketching-Icon.svg";

import "./processSection.css";

const ProcessSection = () => {
	return (
		<div className="process">
			<div className="descr">Our process</div>
			<div className="title">How we do what we do.</div>
			<div className="circles_wrapper">
				<div className="single_circle_wrapper">
					<div className="circle">
						<SketchingIcon />
					</div>
					<div className="title">Sketching</div>
					<div className="descr">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
						tristique libero. Nulla luctus sapien ac arcu tempor, vitae tempor
						leo iaculis.
					</div>
				</div>

				<div className="single_circle_wrapper">
					<div className="circle">
						<FinalizingIcon />
					</div>
					<div className="title">Finalizing</div>
					<div className="descr">
						Adipiscing elit. Nulla ut tristique libero. Nulla vitae tempor leo
						iaculis luctus sapien ac arcu tempor, vitae.
					</div>
				</div>

				<div className="single_circle_wrapper">
					<div className="circle">
						<BuildingIcon />
					</div>
					<div className="title">Building</div>
					<div className="descr">
						Nulla ut tristique libero. Lorem ipsum ut tristique libero. Nulla
						luctus sapien ac arcu tempor, vitae lorem ipsum dolor leo iaculis.
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProcessSection;
