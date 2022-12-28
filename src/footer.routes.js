// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Gate Way Passengers Transport",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "/",
    },
    {
      icon: <TwitterIcon />,
      link: "/",
    },
    {
      icon: <GitHubIcon />,
      link: "/",
    },
    {
      icon: <YouTubeIcon />,
      link: "/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "/" },
        { name: "Our Mission", href: "/" },
        { name: "Our Values", href: "/" },
        { name: "Our Vision", href: "/" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "24/7 Response Team", href: "/" },
        { name: "Management Team", href: "/" },
        { name: "affiliate program", href: "/" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/" },
        { name: "knowledge center", href: "/" },
        { name: "custom development", href: "/" },
        { name: "sponsorships", href: "/" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "/" },
        { name: "privacy policy", href: "/" },
        { name: "licenses (EULA)", href: "/" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Gate Way Passengers Transport by{" "}
      <MKTypography
        component="a"
        href=""
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Rented Buses LLC
      </MKTypography>
      .
    </MKTypography>
  ),
};
