import aiagentImage from '@/assets/images/dapps/aiagent.png';
import avatorImage from '@/assets/images/dapps/avatar.png';
import exhibitionImage from '@/assets/images/dapps/exhibition.png';
import hoverboardImage from '@/assets/images/dapps/hoverboard.png';
import universityImage from '@/assets/images/dapps/university.png';

const collaboratorImages = require.context('@/assets/images/collaborators', true);
const collaboratorImageList = collaboratorImages.keys().map((image: any) => collaboratorImages(image));

const investorsImages = require.context('@/assets/images/investors', true);
const investorsImageList = investorsImages.keys().map((image: any) => investorsImages(image));

const partnerImages = require.context('@/assets/images/partners', true);
const partnerImageList = partnerImages.keys().map((image: any) => partnerImages(image));

export const copywriter = {
  global: {
    title: 'Matrix Universe'
  },
  home: {
    heroSection: {
      title: ['All-in-one', 'Innovative Web3', 'Ecosystem'],
      subTitle: 'Autonomous Intelliverse',
      desc: "Sustainable Web3 Entertainment Ecosystem Powered by a 'Proof of Value to Earn' Protocol"
    },
    featuresSection: {
      title: 'Explore Our Core Features',
      subTitle: 'Innovation Meets Engagement',
      cards: [
        {
          title:
            'Frictionless Onboarding:\n"Enter with Ease, Connect with Chains."',
          content: [
            'User Onboarding',
            'Content Creator Integration',
            'Community Building'
          ]
        },
        {
          title: 'Value-Based Earnings:\n"Your Contribution, Your Reward."',
          content: [
            'Circulation across Systems',
            'Medium for Value Exchange',
            'Incentivize Participants'
          ]
        },
        {
          title: 'Fair Revenue Sharing:\n"Earn Fairly, Share Smartly."',
          content: [
            'Free Mint',
            'Passport ID',
            'Play to Earn',
            'Revenue Sharing'
          ]
        },
        {
          title: 'Vibrant Entertainment:\n"Engage, Enjoy, Experience."',
          content: []
        }
      ]
    },
    architectureSection: {
      title: 'First Era Architecture',
      subTitle: 'Crafting the Foundation of Web3 Entertainment',
      content: {
        layer: [
          {
            title: 'Policy Layer',
            subTitle: 'The Backbone of the Ecosystem'
          },
          {
            title: 'Infura Layer',
            subTitle: 'Genesis Infrastructure'
          }
        ],
        unit: [
          {
            title: 'Matrix World',
            subTitle: 'Environment',
            image: 'mw-logo'
          },
          {
            title: 'Matrix Treasure',
            subTitle: 'Treasure',
            image: 'mt-logo'
          },
          {
            title: 'Matrix Intelligence',
            subTitle: 'Intelligence',
            image: 'mi-logo'
          }
        ]
      }
    },
    roadmapSection: {
      title: 'Roadmap',
      subTitle: 'Future Development and Milestones of Matrix Universe',
      content: [
        {
          title: 'Foundation Launch Epoch',
          subTitles: [
            'Release Multi-chain Wallet System',
            'Release Score and Ranking Dashboard'
          ],
          time: '2024 Q1'
        },
        {
          title: 'Expansion Epoch I',
          subTitles: [
            'Facilitate the creation of more connections',
            'Evolve into a decentralized, autonomous,\nand AI-powered universe'
          ],
          time: '2024 Q2'
        },
        {
          title: 'Expansion Epoch II',
          subTitles: [
            'New Content Integration and Community Expansion',
            'Scalability and Long-Term Sustainability Plans'
          ],
          time: '2024 Q4'
        }
      ]
    },
    dAppsSection: {
      title: 'Explore the Galaxies',
      subTitle: 'From Present Innovation to Future Visions',
      cards: [
        {
          title: 'Avatar System',
          subTitle: 'Express Yourself',
          desc: 'Fuse the aesthetics of anime and "Western" art styles to allow you to create avatars that are sophisticated, sleek, and cute, all at the same time.',
          image: avatorImage,
          video: 'https://media.nft.matrixworld.org/videos/avatar_system.mp4',
          link: 'https://medium.com/@matrixworld/avatar-editor-69248e202131'
        },
        {
          title: 'ETH Exhibition Hall',
          subTitle: 'Hanging around in Real Metaverse',
          desc: 'One interior space within buildings serves as the interface for navigating the ETH. It will be equipped with an elevator to select your destination.',
          image: exhibitionImage,
          video: '',
          link: ''
        },
        {
          title: 'Hoverboard Racing',
          subTitle: 'Feel the Pleasure of Competition',
          desc: 'In this player-versus-player race, players compete to be the first to cross the finish line through a track filled with power-ups and various obstacles.',
          image: hoverboardImage,
          video: '',
          link: ''
        },
        {
          title: 'Intelligent 2D Agent',
          subTitle: 'Redefine Entertainment with AI',
          desc: 'Revolutionary AI companions prioritize engagement, ensuring personalized experiences with its Memory Augmented AI Backend.',
          image: aiagentImage,
          video: '',
          link: ''
        },
        {
          title: 'University Park',
          subTitle: 'A Leap into the 3D Future of Education',
          desc: 'A means of connecting with students beyond physical boundaries, offering high-quality education worldwide in a flexible learning environment.',
          image: universityImage,
          video: '',
          link: 'https://medium.com/@matrixworld/a-leap-into-the-3d-future-of-education-6099bfcdd38c'
        }
      ]
    },
    collaboratorsSection: {
      title: 'Collaborators',
      subTitle: '',
      images: collaboratorImageList
    },
    investorSection: {
      title: 'Investors',
      subTitle: '',
      images: investorsImageList
    },
    partnerSection: {
      title: 'Partners',
      subTitle: '',
      images: partnerImageList
    }
  },
  console: {
    welcome: 'Welcome Back to MU Console',
    featuresTitle:
      'Link Region + Explore Missions to Earn Reputations + LeaderBoard Booster',
    region: 'Region',
    missions: 'Mission',
    activeMissions: 'Active Missions',
    explore: 'Explore'
  },
  appDetail: {
    linked: 'linked',
    activeMissions: 'Active Missions',
    leaderboard: 'Leaderboard'
  },
  missionDetail: {
    desc: 'Mission Description',
    steps: 'Mission Steps'
  },
  footer: {
    desc: 'The Matrix Universe is a pioneering Web3 entertainment platform, in which the power of decentralization meets the innovations of artificial intelligence in an autonomous digital realm. This is an ecosystem where entertainment transcends traditional boundaries; where community is built, found, and fostered; and every interaction is an opportunity to explore, create and grow.',
    link: {
      medium: 'https://medium.com/@matrixworld',
      twitter: 'https://twitter.com/theMatrixWorld',
      youtube: 'https://www.youtube.com/@matrixworldofficial',
      telegram: 'https://t.me/MatrixWorldM',
      discord: 'https://discord.com/invite/bMQh4ztyhP'
    }
  }
};
