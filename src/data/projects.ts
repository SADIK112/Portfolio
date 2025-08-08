export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[]; // Additional images for the project modal
  tech: string[];
  liveUrl?: string; // Optional since some projects might be private
  githubUrl?: string; // Optional since some projects might be private
  featured: boolean;
  category: 'shopify' | 'web' | 'machinelearning';
  features?: string[]; // Key features to display in the modal
  role?: string; // User's role in the project
  date?: string; // Project completion date
  isPrivate?: boolean; // Flag for private projects
  challenge?: string; // Project challenge statement
  solution?: string; // Project solution overview
}

export const projects: Project[] = [
  {
    id: 'fractional-product-quantities',
    title: 'Fractional Product Quantities for POS',
    description: 'Sell products with fractional quantities in Shopify POS',
    longDescription: 'Fractional Product Quantities allows merchants to sell products with fractional quantities in POS. Selling products with fractional quantities inside Shopify POS has been a challenge until now! With this app, you can easily select a single product/variant or multiple products/variants within the POS. Specify the fractional quantity or amount of each selected product/variant that you want to sell. Add those products/variants and their specified fractional quantities to the POS cart. Then proceed to checkout your customer. The app automatically syncs and adjusts your inventory accurately!',
    image: '/projects/fractional-quantities-app/1.jpg',
    images: [
      '/projects/fractional-quantities-app/1.jpg',
      '/projects/fractional-quantities-app/2.jpg',
      '/projects/fractional-quantities-app/3.jpg'
    ],
    tech: ['Shopify', 'React', 'Node.js', 'GraphQL', 'MongoDB', 'Docker', 'Kubernetes'],
    liveUrl: 'https://apps.shopify.com/pos-fractional-quantities',
    featured: true,
    category: 'shopify',
    role: 'Full-stack Developer',
    date: '2024',
    features: [
      'Sell any product, variant, or SKU with any fractional quantity',
      'Add products with fractional quantities to the POS cart',
      'Accurate inventory tracking for fractional sales',
      'Support for yardage, weight, length, and unit measurements',
      'Seamless integration with Shopify POS',
      'Real-time inventory synchronization'
    ]
  },
  {
    id: 'credit-charge-accounts',
    title: 'Credit & Charge Accounts for POS',
    description: 'Enable customers to purchase on account and pay later within Shopify POS',
    longDescription: 'Credit & Charge Accounts lets customers purchase products on account and pay them later within POS. Enhance your customer service by offering Credit & Charge Accounts inside Shopify POS. Now, you can give customers the ability to purchase items by putting purchases on their tab and charging it to their account. Customers can then make payments on their balances as required (e.g. weekly, bi-weekly, monthly, net-45, or custom).',
    image: '/projects/credit-charge-app/1.jpg',
    images: [
      '/projects/credit-charge-app/1.jpg',
      '/projects/credit-charge-app/2.jpg',
      '/projects/credit-charge-app/3.jpg',
      '/projects/credit-charge-app/4.jpg',
      '/projects/credit-charge-app/5.jpg',
      '/projects/credit-charge-app/6.jpg'
    ],
    tech: ['Shopify', 'React', 'Node.js', 'GraphQL', 'MongoDB', 'Docker', 'QuickBooks'],
    liveUrl: 'https://apps.shopify.com/credit-charge-account-on-pos',
    featured: true,
    category: 'shopify',
    role: 'Full-stack Developer',
    date: '2024',
    features: [
      'Charge purchases to customer accounts and view all transactions',
      'Set store credit for customers and apply it to balances',
      'View complete purchase, payment, and invoice history',
      'Flexible payment schedules (weekly, bi-weekly, monthly, custom)',
      'Integration with QuickBooks POS Desktop',
      'Real-time balance and credit tracking'
    ]
  },
  {
    id: 'draft-custom-orders',
    title: 'Draft & Custom Orders for POS',
    description: 'Create & manage draft & custom orders within your POS device',
    longDescription: 'Draft & Custom Orders is an app for creating & managing draft & custom orders within your POS device. Using Draft Orders inside the Shopify POS has been a challenge until now! Easily create or add any draft or custom order, its line items, discounts, and respective customer info directly to your Shopify POS cart. Search through draft/custom orders, edit statuses, and add them to your Shopify POS cart. After checkout, the draft is automatically deleted.',
    image: '/projects/draft-order/1.jpg',
    images: [
      '/projects/draft-order/1.jpg',
      '/projects/draft-order/2.jpg',
      '/projects/draft-order/3.jpg',
      '/projects/draft-order/4.jpg',
      '/projects/draft-order/5.jpg',
      '/projects/draft-order/6.jpg'
    ],
    tech: ['Shopify', 'React', 'Node.js', 'GraphQL', 'MongoDB', 'Docker', 'Redis'],
    liveUrl: 'https://apps.shopify.com/draft-and-custom-orders-for-pos',
    featured: true,
    category: 'shopify',
    role: 'Full-stack Developer',
    date: '2024',
    features: [
      'Search & view open, invoice sent, and completed draft orders',
      'Create new draft orders directly from POS (no admin access needed)',
      'View and edit contents of all draft & custom orders in-app',
      'Create drafts from current cart contents with custom discounts',
      'Manage customers and line items for each draft order',
      'Automatic draft cleanup after successful checkout'
    ]
  },
  {
    id: 'uniswap-wallet-pos',
    title: 'Uniswap Wallet POS Integration',
    description: 'Seamless crypto payments for Shopify POS with Uniswap Wallet',
    longDescription: 'Integrated Uniswap Wallet with Shopify POS to enable seamless crypto payments in physical retail environments. The solution simplifies the payment flow, allowing customers to pay with their preferred tokens while providing merchants with a familiar POS experience. The system supports auto-confirmation for small transactions, L2 token support, and a streamlined cashier workflow for both crypto and traditional payments.',
    image: '/projects/uniswap/1.png',
    images: [
      '/projects/uniswap/1.png',
      '/projects/uniswap/2.png',
      '/projects/uniswap/3.png'
    ],
    tech: ['Shopify', 'React', 'Node.js', 'Ethereum', 'Web3.js', 'GraphQL', 'Docker'],
    featured: true,
    category: 'shopify',
    role: 'Blockchain Integration Engineer',
    date: '2024',
    features: [
      'Simplified payment flow with clear transaction details',
      'Auto-confirmation for transactions under a set amount',
      'Support for L2 tokens and gasless transactions via relayer',
      'Dual-mode operation: standard confirmation or auto-pay',
      'NFC tap-to-pay support for faster transactions',
      'Seamless integration with existing POS workflows'
    ],
    // Private project details
    isPrivate: true,
    challenge: 'Reducing the complexity of crypto payments in retail environments while maintaining security and user experience.',
    solution: 'Developed a streamlined payment flow that integrates with Uniswap Wallet, featuring auto-confirmation for small transactions and clear UX for both customers and cashiers.'
  },
  {
    id: 'coinbase-nft-drop',
    title: 'Coinbase NFT Event Access Control',
    description: 'Event access control system using Coinbase Wallet and NFTs',
    longDescription: 'Developed an event access control system that verifies NFT ownership for event entry. The system includes an iPad interface for event staff to scan attendee wallets, verify NFT ownership, and log attendance in real-time to a Google Sheet. The solution streamlines event check-ins while maintaining a secure and verifiable guest list.',
    image: '/projects/coinbase-nft-drop/1.png',
    images: [
      '/projects/coinbase-nft-drop/1.png',
      '/projects/coinbase-nft-drop/2.png',
      '/projects/coinbase-nft-drop/3.png',
      '/projects/coinbase-nft-drop/4.png'
    ],
    tech: ['React', 'Node.js', 'Ethereum', 'Web3.js', 'Google Sheets API', 'Coinbase Wallet SDK'],
    featured: true,
    category: 'web',
    role: 'Full-stack Blockchain Developer',
    date: '2024',
    features: [
      'QR code-based wallet connection for easy check-in',
      'Real-time NFT verification for access control',
      'Automated Google Sheets integration for attendance tracking',
      'User-friendly iPad interface for event staff',
      'Secure wallet connection via Coinbase Wallet',
      'Timestamped entry logs with attendee details'
    ],
    // Private project details
    isPrivate: true,
    challenge: 'Creating a seamless event check-in experience that verifies NFT ownership while maintaining a smooth user experience for both attendees and event staff.',
    solution: 'Developed a system that combines QR code scanning with Coinbase Wallet integration to verify NFT ownership and log attendance in real-time to Google Sheets, providing a seamless check-in experience.'
  },
  {
    id: 'upscribe',
    title: 'UpScribe: Advanced Subscription Management',
    description: 'Powerful subscription management solution for Shopify merchants',
    longDescription: 'UpScribe is a comprehensive subscription management platform designed specifically for Shopify stores. It enables merchants to offer flexible subscription options, manage recurring billing, and provide customers with self-service account management. The solution includes advanced features like one-time purchases, subscription bundles, and customizable delivery schedules to enhance customer retention and increase average order value.',
    image: '/projects/upscribe/1.png',
    images: [
      '/projects/upscribe/1.png',
      '/projects/upscribe/2.png',
      '/projects/upscribe/3.png'
    ],
    tech: ['Shopify', 'React', 'Node.js', 'GraphQL', 'Liquid', 'Redis', 'Docker'],
    featured: true,
    category: 'shopify',
    role: 'Full-stack Developer',
    date: '2024',
    features: [
      'Flexible subscription options (weekly, bi-weekly, monthly, custom)',
      'One-time purchase and subscription bundle support',
      'Customer self-service portal for subscription management',
      'Advanced analytics and reporting dashboard',
      'Seamless integration with Shopify checkout',
      'Automated email notifications and reminders'
    ],
    // Private project details
    isPrivate: true,
    challenge: 'Creating a flexible subscription system that works seamlessly with Shopify\'s existing infrastructure while providing advanced features typically found in enterprise solutions.',
    solution: 'Developed a robust subscription management platform that integrates natively with Shopify, offering merchants powerful subscription capabilities without the need for complex third-party services or custom development.'
  },
  {
    id: 'krapopolis',
    title: 'KraPopolis: Web3 E-commerce Platform',
    description: 'NFT marketplace with direct crypto payments and multi-wallet support',
    longDescription: 'KraPopolis is a cutting-edge Shopify store integrated with Web3 capabilities, allowing users to purchase and mint NFTs directly from the storefront. The platform supports multiple wallet connections including MetaMask, Coinbase Wallet, and WalletConnect, providing a seamless bridge between traditional e-commerce and blockchain technology. Users can browse NFT collections, connect their preferred wallet, and complete purchases using various cryptocurrencies.',
    image: '/projects/krapopolis/1.png',
    images: [
      '/projects/krapopolis/1.png',
      '/projects/krapopolis/2.png',
      '/projects/krapopolis/3.png'
    ],
    tech: ['Shopify', 'React', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'Node.js'],
    featured: true,
    category: 'shopify',
    role: 'Blockchain Developer & Integration Specialist',
    date: '2023',
    features: [
      'Multi-wallet support (MetaMask, Coinbase Wallet, WalletConnect)',
      'In-browser NFT minting and purchasing',
      'Crypto payment processing with multiple token support',
      'Gas-optimized smart contracts for minting',
      'IPFS integration for decentralized storage',
      'Seamless Shopify checkout integration'
    ],
    // Private project details
    isPrivate: true,
    challenge: 'Creating a user-friendly Web3 shopping experience that abstracts away blockchain complexity while maintaining security and decentralization principles.',
    solution: 'Developed a hybrid e-commerce solution that combines Shopify\'s robust storefront with Web3 functionality, enabling NFT sales and crypto payments while providing a familiar shopping experience for users.'
  },
  {
    id: 'emedals',
    title: 'EMedals: Premium Auction Platform',
    description: 'Exclusive online auction platform for rare collectibles and medals',
    longDescription: 'EMedals is a high-end auction platform specializing in rare collectibles, medals, and historical artifacts. The platform features a real-time bidding system with countdown timers, automatic bid increments, and instant notifications. Users can track auction status (upcoming, live, ended), view bid history, and receive alerts when they\'re outbid. The system includes secure payment processing and escrow services for high-value transactions.',
    image: '/projects/emedals/1.png',
    images: [
      '/projects/emedals/1.png',
      '/projects/emedals/2.png'
    ],
    tech: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'Express', 'Stripe', 'AWS'],
    featured: true,
    category: 'web',
    role: 'Full-stack Developer',
    date: '2023',
    features: [
      'Real-time auction updates with WebSocket integration',
      'Countdown timers and auction status tracking',
      'Automatic bid increments and proxy bidding',
      'Comprehensive bid history and activity feed',
      'Email and push notifications for auction events',
      'Secure payment processing and escrow services'
    ],
    // Private project details
    isPrivate: true,
    challenge: 'Creating a seamless real-time bidding experience that handles high concurrency while maintaining data consistency and providing instant feedback to users.',
    solution: 'Developed a robust auction system using WebSockets for real-time updates, implemented a scalable backend with Node.js and MongoDB, and designed an intuitive UI that clearly displays auction status, time remaining, and bidding activity.'
  },
  {
    id: 'smart-discount-engine',
    title: 'Smart Discount Engine for Shopify',
    description: 'Advanced discount management system that intelligently applies the best possible discount combinations',
    longDescription: 'A sophisticated Shopify app that automatically applies the most beneficial discount combinations across multiple discount types while respecting Shopify\'s "one discount per item" rule. The system intelligently evaluates cart items, detects eligible discounts, and applies them in the most advantageous way possible, ensuring maximum customer savings without violating platform limitations.',
    image: '/projects/smart-discount/1.png',
    images: [
      '/projects/smart-discount/1.png'
    ],
    tech: ['Shopify', 'React', 'Node.js', 'GraphQL', 'MongoDB', 'Redis', 'Docker'],
    featured: true,
    category: 'shopify',
    role: 'Full-stack Developer',
    date: '2024',
    features: [
      'Supports multiple discount types (B2G1, B1G150, membership, coupons)',
      'Intelligent discount stacking within Shopify\'s limitations',
      'Real-time discount calculation and application',
      'Admin panel for discount configuration and prioritization',
      'Automatic detection of best discount combinations',
      'Detailed discount application reporting and analytics'
    ],
    // Private project details
    isPrivate: true,
    challenge: 'Creating a discount engine that maximizes customer savings while working within Shopify\'s constraint of one discount per item, requiring intelligent prioritization and combination of various discount types.',
    solution: 'Developed a rules-based engine that evaluates all possible discount combinations, temporarily removes and reapplies discounts as needed, and ensures optimal savings while maintaining compliance with platform limitations.'
  },
  {
    id: 'shopify-product-export',
    title: 'Shopify Product Export App',
    description: 'Location-based low inventory product export tool for Shopify',
    longDescription: 'A Remix-based Shopify app that enables store owners to efficiently manage inventory across multiple locations. The app allows users to export products with low stock levels from specific store locations to CSV files, helping businesses maintain optimal inventory levels and streamline their restocking processes.',
    image: '/projects/export-app/1.png',
    images: [
      '/projects/export-app/1.png'
    ],
    tech: ['Shopify', 'Remix', 'React', 'GraphQL', 'TypeScript', 'Shopify Polaris'],
    featured: true,
    category: 'shopify',
    role: 'Full-stack Developer',
    date: '2024',
    features: [
      'Location-based inventory management with search functionality',
      'Export low-stock products to CSV with a single click',
      'Real-time inventory level monitoring',
      'Shopify Polaris UI for consistent admin experience',
      'Responsive design for both desktop and mobile',
      'Secure authentication with Shopify App Bridge'
    ],
    // Private project details
    isPrivate: true,
    challenge: 'Creating an efficient solution for multi-location inventory management that simplifies the process of identifying and exporting low-stock products across different store locations.',
    solution: 'Developed a lightweight yet powerful export tool using Remix and Shopify\'s GraphQL API, featuring real-time search, location filtering, and one-click CSV generation for streamlined inventory management.'
  },
  {
    id: 'dynamic-campaign-creator',
    title: 'Dynamic Campaign Creator',
    description: 'Advanced campaign design and automation platform with canvas-based editor',
    longDescription: 'A comprehensive campaign creation platform that revolutionizes digital marketing workflows. This powerful tool enables users to design, automate, and deploy sophisticated marketing campaigns across multiple channels. Featuring an intuitive canvas-based interface, users can drag-and-drop elements, create automation workflows, and preview campaigns in real-time before deploying them to various websites and platforms.',
    image: '/projects/bevy-design/1.png',
    images: [
      '/projects/bevy-design/1.png'
    ],
    tech: ['React', 'TypeScript', 'Fabric.js', 'Node.js', 'MongoDB', 'WebSockets', 'AWS'],
    featured: true,
    category: 'web',
    role: 'Lead Frontend Developer & UX Designer',
    date: '2024',
    features: [
      'Canvas-based campaign designer with drag-and-drop interface',
      'Rich library of customizable templates and UI components',
      'Advanced automation workflow builder',
      'Real-time preview and collaboration features',
      'Cross-platform campaign deployment',
      'Version control and campaign history tracking'
    ],
    // Private project details
    isPrivate: true,
    challenge: 'Creating a flexible and intuitive campaign builder that simplifies complex marketing automation while providing powerful customization options for professional marketers and designers.',
    solution: 'Designed and developed a comprehensive campaign creation suite featuring a canvas-based editor, extensive component library, and seamless integration with various marketing platforms, enabling users to create professional campaigns without coding knowledge.'
  },
  {
    id: 'ai-resume-matcher',
    title: 'AI Resume Matcher',
    description: 'AI-powered resume matching system that analyzes job descriptions and candidate resumes',
    longDescription: 'AI Resume Matcher is an intelligent system that helps job seekers optimize their resumes for specific job postings. The application uses natural language processing to analyze job descriptions and compare them with uploaded resumes, providing a detailed match percentage and specific feedback on matching and non-matching skills and experiences.',
    image: '/projects/ai-resume-matcher/1.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Open AI API', "Shadcn UI", 'Vercel', "Redux"],
    liveUrl: 'https://ai-resume-matcher-ec6y.vercel.app/',
    featured: true,
    category: 'machinelearning',
    role: 'Full-stack Developer & ML Engineer',
    date: '2024',
    features: [
      'AI-powered resume analysis against job descriptions',
      'Detailed match percentage and scoring',
      'Identifies matching and non-matching skills/experiences',
      'Supports PDF and DOCX file uploads',
      'User-friendly interface with clear visual feedback',
      'Secure document processing'
    ],
    challenge: 'Job seekers often struggle to tailor their resumes for specific job postings, leading to lower application success rates.',
    solution: 'The AI Resume Matcher provides instant feedback on how well a resume matches a specific job description, highlighting areas of strength and suggesting improvements to increase the chances of getting noticed by recruiters.'
  }
];
