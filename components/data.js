import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight BlueSky Network",
  desc: "BlueSky network has access across the United States",
  image: benefitOneImg,
  bullets: [
    {
      title: "Find what kind of therapy is right for you.",
      desc: "Start your new year now.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "place holder",
      desc: "place holder",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "place holder",
      desc: "place holder.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more here",
  desc: "use bullet points or images.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Website",
      desc: "designed as a mobile first responsive Site.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Custom Development",
      desc: "This Site is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode users can choose via top right header button. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
