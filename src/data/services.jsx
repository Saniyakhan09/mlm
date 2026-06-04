import {
  FiUsers, FiShare2, FiDollarSign, FiPackage, FiSmartphone, FiGlobe,
  FiClipboard, FiCreditCard, FiShoppingCart, FiUserCheck, FiSettings,
} from 'react-icons/fi'
import { FaBitcoin } from 'react-icons/fa'

// Single source of truth for all services — used by the home Services section
// and the routed /services/:slug detail pages.
export const services = [
  {
    slug: 'mlm-software',
    title: 'Multi-Level Marketing Software',
    desc: 'A complete MLM platform supporting every compensation plan.',
    icon: <FiUsers />,
    viz: 'rings',
    tagline: 'The complete platform to launch and scale your network marketing business.',
    long: [
      'Our flagship multi-level marketing software gives you everything needed to run a modern direct-selling business — genealogy trees, compensation engines, e-wallets, payouts and reporting, all from one dashboard.',
      'Built on a secure, scalable architecture, it supports every popular MLM plan and is fully customizable to match your unique commission structure and branding.',
    ],
    features: ['All compensation plans supported', 'Real-time genealogy & downline view', 'Automated commission & payout engine', 'Secure e-wallet and reporting'],
  },
  {
    slug: 'referral-marketing',
    title: 'Referral-Based Marketing',
    desc: 'Generate referrals effortlessly and grow year after year.',
    icon: <FiShare2 />,
    viz: 'rows',
    tagline: 'Turn every happy customer into your most powerful growth channel.',
    long: [
      'Minimize the hassle of generating referrals with a referral-based marketing system that rewards members for every successful introduction.',
      'Track referral links, conversions and rewards in real time, and keep your network motivated with transparent, automated incentives.',
    ],
    features: ['Unique referral links & codes', 'Real-time conversion tracking', 'Automated reward distribution', 'Leaderboards & gamification'],
  },
  {
    slug: 'sales-commission',
    title: 'Sales Commission Software',
    desc: 'Automate commission plans with transparent incentive structures.',
    icon: <FiDollarSign />,
    viz: 'panel',
    tagline: 'Centralize, automate and audit every commission with confidence.',
    long: [
      'Improve the efficacy of your sales by centralizing and automating commission-based plans with smart, transparent incentive structures.',
      'Define rules once and let the engine calculate accurate payouts every cycle — no spreadsheets, no errors, full audit trails.',
    ],
    features: ['Rule-based commission engine', 'Multi-tier incentive structures', 'Automated payout cycles', 'Full audit & history logs'],
  },
  {
    slug: 'direct-sales',
    title: 'Direct Sales Solutions',
    desc: 'Powerful direct-selling software with custom compensation.',
    icon: <FiPackage />,
    viz: 'rows',
    tagline: 'Innovative direct-selling tools built around your products.',
    long: [
      'Excellent MLM business compensation plans that promote direct selling with innovative, customized direct-selling software.',
      'Empower your distributors with the tools they need to sell more, onboard faster and stay engaged.',
    ],
    features: ['Distributor onboarding flows', 'Product-based selling tools', 'Custom compensation plans', 'Performance dashboards'],
  },
  {
    slug: 'distributor-management',
    title: 'Distributor Management',
    desc: 'Manage your downline, genealogy tree & network in one place.',
    icon: <FiUserCheck />,
    viz: 'rings',
    tagline: 'Your entire network, visualized and under control.',
    long: [
      'Manage your entire downline, genealogy tree and distributor network from one powerful, intuitive dashboard.',
      'Monitor activity, rank advancement and performance in real time so you can support the right people at the right time.',
    ],
    features: ['Interactive genealogy tree', 'Rank & activity tracking', 'Bulk member operations', 'KYC & profile management'],
  },
  {
    slug: 'mlm-mobile-app',
    title: 'MLM Mobile App',
    desc: 'Native Android & iOS apps to keep distributors engaged.',
    icon: <FiSmartphone />,
    viz: 'panel',
    tagline: 'Put your whole business in your distributors’ pockets.',
    long: [
      'A native MLM mobile application for Android and iOS that keeps pace with fast-moving technology and keeps your distributors engaged on the go.',
      'Members can track earnings, manage their network, share referrals and receive instant notifications — anytime, anywhere.',
    ],
    features: ['Native Android & iOS apps', 'Earnings & wallet on mobile', 'Push notifications', 'One-tap referral sharing'],
  },
  {
    slug: 'crypto-integration',
    title: 'Cryptocurrency Integration',
    desc: 'Crypto wallets and binary matrix payouts on the blockchain.',
    icon: <FaBitcoin />,
    viz: 'rings',
    tagline: 'Future-ready payouts powered by blockchain.',
    long: [
      'Full cryptocurrency support with blockchain wallets and binary-matrix payouts that streamline your business with modern, secure technology.',
      'Offer your members crypto wallets, token rewards and smart-contract-driven payouts for a truly next-generation MLM.',
    ],
    features: ['Crypto wallet integration', 'Smart-contract payouts', 'Token & coin rewards', 'Multi-currency support'],
  },
  {
    slug: 'payment-gateway',
    title: 'Payment Gateway Integration',
    desc: 'Secure global transactions with leading payment gateways.',
    icon: <FiCreditCard />,
    viz: 'panel',
    tagline: 'Accept payments and send payouts, securely, worldwide.',
    long: [
      'Seamless integration with leading payment gateways for secure global transactions, deposits and withdrawals.',
      'Give your members a smooth, trusted checkout and payout experience in their preferred currency and method.',
    ],
    features: ['Multiple gateway support', 'Secure deposits & withdrawals', 'Multi-currency checkout', 'PCI-compliant processing'],
  },
  {
    slug: 'ecommerce-integration',
    title: 'E-Commerce Integration',
    desc: 'Combine MLM with a full store for product-based marketing.',
    icon: <FiShoppingCart />,
    viz: 'rows',
    tagline: 'Sell products and build a network — in one platform.',
    long: [
      'Combine MLM with a full e-commerce store for true product-based network marketing.',
      'Manage catalogs, carts, orders and inventory while every sale flows directly into your compensation plan.',
    ],
    features: ['Built-in online store', 'Catalog & inventory management', 'Cart & order workflows', 'Sales linked to commissions'],
  },
  {
    slug: 'mlm-web-design',
    title: 'MLM Web Design',
    desc: 'World-class, fully responsive websites that elevate your brand.',
    icon: <FiGlobe />,
    viz: 'rings',
    tagline: 'A stunning, conversion-focused web presence for your brand.',
    long: [
      'World-class software development services with fully responsive, modern website designs that take your brand to the next level.',
      'From landing pages to full corporate sites, we craft fast, beautiful and conversion-optimized experiences.',
    ],
    features: ['Fully responsive design', 'Conversion-optimized layouts', 'Brand-aligned visuals', 'SEO-friendly structure'],
  },
  {
    slug: 'product-management',
    title: 'Product Management',
    desc: 'Handle diverse product catalogs end-to-end with ease.',
    icon: <FiClipboard />,
    viz: 'rows',
    tagline: 'Manage every product, variant and price effortlessly.',
    long: [
      'Customized product management software that brings an innovative approach to managing diverse products end-to-end.',
      'Organize catalogs, variants, pricing and stock so your distributors always have accurate, up-to-date information.',
    ],
    features: ['Catalog & variant management', 'Dynamic pricing rules', 'Stock & inventory control', 'Bulk import / export'],
  },
  {
    slug: 'customized-sales-system',
    title: 'Customized Sales System',
    desc: 'Tailor-made management built around your unique workflow.',
    icon: <FiSettings />,
    viz: 'panel',
    tagline: 'Software shaped exactly to the way you work.',
    long: [
      'Tailor-made sales management systems built around your unique workflow, processes and goals.',
      'We adapt every module — from onboarding to reporting — so the software fits your business, not the other way around.',
    ],
    features: ['Fully bespoke modules', 'Custom workflows & roles', 'Tailored reporting', 'Scalable architecture'],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
