import { FunctionComponent } from 'react'
import {
  BsSlack as SlackIcon,
  BsFillChatSquareFill as TwistIcon,
  BsDiscord as DiscordIcon,
} from 'react-icons/bs'
import {
  // General
  FaCircle as CircleIcon,
  FaGlobe as WebsiteIcon,
  // Theme
  FaSun as DarkIcon,
  FaMoon as LightIcon,
  // Social media
  FaDev as DevToIcon,
  FaFacebook as FacebookIcon,
  FaGithub as GitHubIcon,
  FaStopCircle as HashnodeIcon,
  FaInstagram as InstagramIcon,
  FaLinkedin as LinkedInIcon,
  FaTh as PolyworkIcon,
  FaTwitter as TwitterIcon,
  FaYoutube as YouTubeIcon,
  // Company
  FaProjectDiagram as KontenbaseIcon,
  // Person
  FaChalkboardTeacher as EducatorIcon,
  FaUserNinja as DeveloperIcon,
  // Misc
  FaFileAlt as CVIcon,
  FaBolt as BoltIcon,
  FaCloud as CloudIcon,
  FaCog as CogIcon,
  FaBookOpen as DocsIcon,
} from 'react-icons/fa'
import { Text } from '@mantine/core'

const switchFn =
  (lookupObject: any, defaultCase = '_default') =>
  (expression: string | number) =>
    lookupObject[expression] || lookupObject[defaultCase]

export const iconMaps = {
  // General
  circle: <CircleIcon />,
  website: <WebsiteIcon />,
  // Theme
  light: <LightIcon />,
  dark: <DarkIcon />,
  // Social media
  twitter: <TwitterIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  devto: <DevToIcon />,
  hashnode: <HashnodeIcon />,
  instagram: <InstagramIcon />,
  facebook: <FacebookIcon />,
  youtube: <YouTubeIcon />,
  polywork: <PolyworkIcon />,
  // Chat
  slack: <SlackIcon />,
  twist: <TwistIcon />,
  discord: <DiscordIcon />,
  // Company
  kontenbase: <KontenbaseIcon />,
  // Person
  educator: <EducatorIcon />,
  developer: <DeveloperIcon />,
  // Features
  'feature-rest': <CircleIcon />,
  'feature-auth': <CircleIcon />,
  'feature-storage': <CircleIcon />,
  'feature-functions': <CircleIcon />,
  'feature-websocket': <CircleIcon />,
  'feature-message-queue': <CircleIcon />,
  // Misc
  cv: <CVIcon />,
  bolt: <BoltIcon />,
  cloud: <CloudIcon />,
  cog: <CogIcon />,
  docs: <DocsIcon />,
  // Default
  default: <CircleIcon />,
}

const iconSwitch = switchFn(iconMaps, 'default')

interface IconProps {
  name: string
}

interface IconSpanProps {
  name: string
}

export const Icon: FunctionComponent<IconProps> = ({ name }) => iconSwitch(name)

export const IconSpan: FunctionComponent<IconSpanProps> = ({ name }) => (
  <Text component="span">
    <Icon name={name} />
  </Text>
)
