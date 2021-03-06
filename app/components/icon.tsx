import { Text } from '@mantine/core'
import { FunctionComponent } from 'react'
import {
  BsSlack as SlackIcon,
  BsFillChatSquareFill as TwistIcon,
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
  FaDiscord as DiscordIcon,
  FaTh as PolyworkIcon,
  FaTwitter as TwitterIcon,
  FaYoutube as YouTubeIcon,
  FaProductHunt as ProductHuntIcon,
  // Company
  FaProjectDiagram as KontenbaseIcon,
  // Person
  FaChalkboardTeacher as EducatorIcon,
  FaUserNinja as DeveloperIcon,
  // Features
  FaDatabase as DatabaseIcon,
  FaShieldAlt as AuthIcon,
  FaServer as StorageIcon,
  // FaDatabase as FunctionsIcon,
  FaShapes as RealTimeIcon,
  FaCommentAlt as MessageQueueIcon,
  // Misc
  FaCheck as CheckIcon,
  FaFileAlt as CVIcon,
  FaBolt as BoltIcon,
  FaCloud as CloudIcon,
  FaCog as CogIcon,
  FaBookOpen as DocsIcon,
  FaArrowRight as ArrowRightIcon,
  FaArrowLeft as ArrowLeftIcon,
  FaCalendar as CalendarIcon,
} from 'react-icons/fa'
import { MdFunctions as FunctionsIcon } from 'react-icons/md'
import {
  SiAmazonaws as AmazonEC2Icon,
  SiAmazons3 as AmazonS3Icon,
  SiMongodb as MongoDBIcon,
  SiApachekafka as KafkaIcon,
  SiCircle as ColyseusIcon,
} from 'react-icons/si'

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
  producthunt: <ProductHuntIcon />,
  // Chat
  slack: <SlackIcon />,
  twist: <TwistIcon />,
  discord: <DiscordIcon />,
  // Company
  kontenbase: <KontenbaseIcon />,
  // Person
  educator: <EducatorIcon />,
  developer: <DeveloperIcon />,
  // Pricing
  database: <DatabaseIcon />,
  auth: <AuthIcon />,
  storage: <StorageIcon />,
  // Features
  'feature-rest': <DatabaseIcon />,
  'feature-auth': <AuthIcon />,
  'feature-storage': <StorageIcon />,
  'feature-real-time': <RealTimeIcon />,
  'feature-message-queue': <MessageQueueIcon />,
  'feature-functions': <FunctionsIcon />,
  // Misc
  check: <CheckIcon />,
  cv: <CVIcon />,
  bolt: <BoltIcon />,
  cloud: <CloudIcon />,
  cog: <CogIcon />,
  docs: <DocsIcon />,
  'arrow-right': <ArrowRightIcon />,
  'arrow-left': <ArrowLeftIcon />,
  calendar: <CalendarIcon />,
  // Products
  'amazon-ec2': <AmazonEC2Icon />,
  'amazon-s3': <AmazonS3Icon />,
  mongodb: <MongoDBIcon />,
  kafka: <KafkaIcon />,
  colyseus: <ColyseusIcon />,
  // Default
  default: <CircleIcon />,
}

const switchFn =
  (lookupObject: any, defaultCase = '_default') =>
  (expression: string | number) =>
    lookupObject[expression] || lookupObject[defaultCase]

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
