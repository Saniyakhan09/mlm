import {
  FiGitBranch, FiGrid, FiLayers, FiUsers, FiTrello, FiMinus, FiStar,
  FiTrendingUp, FiGift, FiRepeat, FiDollarSign, FiHeart, FiShare2,
  FiPlusCircle, FiPieChart, FiAward,
} from 'react-icons/fi'

// Single source of truth for all MLM compensation plans —
// used by the /plans listing page and the /plans/:slug detail pages.
export const plans = [
  {
    slug: 'binary', name: 'Binary Plan', icon: <FiGitBranch />,
    desc: 'Two-leg structure with spillover & balanced volume payouts.',
    tagline: 'The most popular plan — two legs, spillover, and fast viral growth.',
    long: [
      'The Binary Plan places every distributor into a two-leg (left and right) structure. Members earn through pair matching and balanced volume between the two legs.',
      'With spillover from upline placements, even new joiners benefit — making it one of the fastest-growing and most rewarding MLM plans.',
    ],
    features: ['Left & right leg structure', 'Spillover from upline', 'Pair-matching commissions', 'Carry-forward of balance volume'],
  },
  {
    slug: 'matrix', name: 'Matrix Plan', icon: <FiGrid />,
    desc: 'Forced matrix with fixed width and depth for steady growth.',
    tagline: 'A fixed-width matrix that drives steady, team-based growth.',
    long: [
      'The Matrix (or Forced Matrix) Plan limits each member to a fixed number of frontline positions — for example 3×9 — encouraging teamwork as members help fill each other’s matrix.',
      'It rewards depth and cooperation, making it ideal for stable, predictable, community-driven growth.',
    ],
    features: ['Fixed width × depth (e.g. 3×9)', 'Spillover fills the matrix', 'Level-completion bonuses', 'Encourages team building'],
  },
  {
    slug: 'unilevel', name: 'Unilevel Plan', icon: <FiLayers />,
    desc: 'Unlimited frontline width with level-based commissions.',
    tagline: 'Simple, unlimited width with clear level-based earnings.',
    long: [
      'The Unilevel Plan lets every member sponsor an unlimited number of frontline distributors, all on one level.',
      'Commissions are paid down a set number of levels, making it one of the simplest and easiest plans to understand and explain.',
    ],
    features: ['Unlimited frontline width', 'Level-based commissions', 'Easy to understand', 'Great for large teams'],
  },
  {
    slug: 'generation', name: 'Generation Plan', icon: <FiUsers />,
    desc: 'Generation-based gap commissions rewarding deep teams.',
    tagline: 'Reward leadership and deep, productive organizations.',
    long: [
      'The Generation Plan (or Gap Commission Plan) pays commissions based on "generations" defined by rank achievements within your downline.',
      'It strongly rewards leaders who build deep, productive teams and develop other leaders beneath them.',
    ],
    features: ['Generation/gap commissions', 'Rank-based qualifications', 'Rewards leadership depth', 'Long-term residual income'],
  },
  {
    slug: 'board', name: 'Board / Cycle Plan', icon: <FiTrello />,
    desc: 'Revolving board where members cycle for higher payouts.',
    tagline: 'A revolving board that splits and pays as it cycles.',
    long: [
      'The Board (or Matrix Cycle) Plan places members on a board that splits into two once filled, promoting members to new boards.',
      'Each cycle and re-entry unlocks higher payouts, creating excitement and momentum across the network.',
    ],
    features: ['Board splitting & cycling', 'Re-entry for higher payouts', 'Fast, exciting momentum', 'Multiple board levels'],
  },
  {
    slug: 'monoline', name: 'Monoline Plan', icon: <FiMinus />,
    desc: 'A single straight line where everyone benefits from joinings.',
    tagline: 'One single line — everyone benefits from every new member.',
    long: [
      'The Monoline (Single Line) Plan places all members into one straight line, regardless of who sponsored them.',
      'Every new joining benefits the entire line, making it simple, fair and highly attractive to newcomers.',
    ],
    features: ['Single straight-line structure', 'Everyone benefits from joinings', 'Simple & transparent', 'Auto re-entry options'],
  },
  {
    slug: 'party', name: 'Party Plan', icon: <FiStar />,
    desc: 'Host-and-guest model ideal for product demos & direct selling.',
    tagline: 'Sell through demonstrations, hosting and personal connection.',
    long: [
      'The Party Plan is built around hosted gatherings — online or offline — where distributors demonstrate products to guests.',
      'It is perfect for product-driven, relationship-based direct selling with strong personal engagement.',
    ],
    features: ['Host & guest management', 'Product demo workflows', 'Hostess rewards', 'Booking & event tracking'],
  },
  {
    slug: 'stair-step', name: 'Stair Step Plan', icon: <FiTrendingUp />,
    desc: 'Rank-based breakaway plan with step-up bonuses.',
    tagline: 'Climb ranks, break away, and unlock bigger bonuses.',
    long: [
      'The Stair Step (Breakaway) Plan rewards distributors with higher commission percentages as they hit sales targets and advance through ranks.',
      'Once a distributor reaches a rank, they "break away" with their team, earning override commissions on that group.',
    ],
    features: ['Rank-based step-up bonuses', 'Breakaway groups', 'Override commissions', 'Clear achievement targets'],
  },
  {
    slug: 'gift-donation', name: 'Gift / Donation Plan', icon: <FiGift />,
    desc: 'Peer-to-peer give-and-receive model with secure transfers.',
    tagline: 'A transparent peer-to-peer give-and-receive community model.',
    long: [
      'The Gift (Donation/Help) Plan works on a member-to-member give-and-receive principle with no company-held funds.',
      'Our software adds full transparency, secure transfers and tracking so the community runs smoothly and fairly.',
    ],
    features: ['Member-to-member transfers', 'Give & receive levels', 'Secure & transparent tracking', 'Auto upgrade options'],
  },
  {
    slug: 'hybrid', name: 'Hybrid Plan', icon: <FiRepeat />,
    desc: 'Combine binary, matrix & unilevel into one custom plan.',
    tagline: 'Mix the best of multiple plans into one tailored model.',
    long: [
      'The Hybrid Plan blends features of binary, matrix, unilevel and other plans into a single custom compensation model.',
      'It gives you the flexibility to design exactly the earning structure your business needs.',
    ],
    features: ['Combine multiple plan types', 'Fully custom rules', 'Flexible payout logic', 'Tailored to your business'],
  },
  {
    slug: 'investment', name: 'Investment / HYIP Plan', icon: <FiDollarSign />,
    desc: 'ROI & daily-return plans with automated payout scheduling.',
    tagline: 'Automated ROI and daily-return investment programs.',
    long: [
      'The Investment (HYIP) Plan offers members defined returns on investment, paid out on automated daily, weekly or monthly schedules.',
      'Full admin controls let you configure plans, caps and payout rules with complete oversight.',
    ],
    features: ['Configurable ROI plans', 'Automated payout schedules', 'Investment caps & limits', 'Admin controls & reports'],
  },
  {
    slug: 'crowdfunding', name: 'Crowdfunding Plan', icon: <FiHeart />,
    desc: 'Community funding with transparent contribution tracking.',
    tagline: 'Pool community contributions toward shared goals.',
    long: [
      'The Crowdfunding Plan lets a community pool contributions toward shared goals or projects with clearly defined reward tiers.',
      'Transparent tracking keeps every contribution and reward fully visible and accountable.',
    ],
    features: ['Contribution pooling', 'Defined reward tiers', 'Transparent tracking', 'Goal-based campaigns'],
  },
  {
    slug: 'affiliate', name: 'Affiliate / Growth Plan', icon: <FiShare2 />,
    desc: 'Affiliate-style referral commissions for lean growth.',
    tagline: 'Fast, lean growth powered by affiliate referrals.',
    long: [
      'The Affiliate (Growth) Plan rewards members with referral commissions on the sales they directly generate.',
      'It is simple, low-overhead and ideal for digital products and fast-scaling networks.',
    ],
    features: ['Direct referral commissions', 'Trackable affiliate links', 'Tiered payout options', 'Low-overhead & scalable'],
  },
  {
    slug: 'australian-x-up', name: 'Australian X-Up Plan', icon: <FiPlusCircle />,
    desc: 'Pass-up compensation where initial sales roll up to sponsor.',
    tagline: 'Pass-up your first sales, then earn directly forever.',
    long: [
      'In the Australian X-Up Plan, a distributor passes up their first one, two or three sales to their sponsor.',
      'After the pass-ups are met, all further sales convert into direct income — rewarding active sponsoring.',
    ],
    features: ['Configurable pass-ups (1-up, 2-up)', 'Direct income after pass-ups', 'Encourages active selling', 'Simple qualification'],
  },
  {
    slug: 'differential', name: 'Differential / 50-50 Plan', icon: <FiPieChart />,
    desc: 'Balanced differential payouts splitting volume evenly.',
    tagline: 'Balanced, differential payouts across your network.',
    long: [
      'The Differential (50-50) Plan splits volume evenly and pays the difference in commission percentages between ranks.',
      'It keeps earnings balanced and sustainable across the entire organization.',
    ],
    features: ['Even volume splitting', 'Differential commissions', 'Balanced, sustainable payouts', 'Rank percentage gaps'],
  },
  {
    slug: 'crypto', name: 'Crypto MLM Plan', icon: <FiAward />,
    desc: 'Blockchain MLM with smart-contract payouts & token rewards.',
    tagline: 'A next-generation MLM powered by blockchain.',
    long: [
      'The Crypto MLM Plan brings blockchain to network marketing with crypto wallets, token rewards and smart-contract-driven payouts.',
      'It offers transparency, security and the flexibility of any underlying compensation structure you choose.',
    ],
    features: ['Crypto wallets & tokens', 'Smart-contract payouts', 'Works with any plan type', 'Transparent on-chain records'],
  },
]

export const getPlan = (slug) => plans.find((p) => p.slug === slug)
