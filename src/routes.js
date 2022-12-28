

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";
import Presentation from "layouts/pages/presentation";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name:"Home",
    route:"/home",
    icon:<Icon>home</Icon>,
    component:<Presentation/>
  },
  {
    name: "Our Fleet",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Fleet",
        collapse: [
          {
            name: "15 Seater Bus",
            route: "/pages/landing-pages/about-us",
            component: <Presentation />,
          },
          {
            name: "30 Seater Bus",
            route: "/pages/landing-pages/contact-us",
            component: <Presentation />,
          },
          {
            name: "67 Seater Bus",
            route: "/pages/landing-pages/author",
            component: <Presentation />,
          },
        ],
      },
      {name: "Other",
      collapse: [
        {
          name: "Labour Bus Transport",
          route: "/pages/landing-pages/about-us",
          component: <Presentation />,
        },
        {
          name: "School Bus Transport",
          route: "/pages/landing-pages/contact-us",
          component: <Presentation />,
        },
      ],},
    ],
  },
  {
    name: "Why Us?",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Our Company",
        description: "See all sections",
        dropdown: true,
        collapse: [
          {
            name: "Management Team",
            route: "/",
            component: <Presentation />,
          },
          {
            name: "Our Vision",
            route: "/",
            component: <Presentation />,
          },
        ],
      },
      {
        name: "Careers",
        description: "See all navigations",
        dropdown: true,
        collapse: [
          {
            name: "Drivers",
            route: "/",
            component: <Presentation />,
          },
          {
            name: "HR",
            route: "/",
            component: <Presentation />,
          },
          {
            name: "24/7 Support",
            route: "/",
            component: <Pagination />,
          },
        ],
      },
      
    ],
  }
];

export default routes;
