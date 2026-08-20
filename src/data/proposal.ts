export const meta = {
  firm: "Ribbon Protocol",
  division: "Frontier Technology Development",
  title: "Tokenized Real World Assets for ZEEX",
  subtitle:
    "A Proposal to ZSE Holdings for Onchain Capital Markets Infrastructure, Global Liquidity and Base Ecosystem Funding",
  from: "Ribbon Protocol — Frontier Technology Development",
  to: "ZSE Holdings — Zimbabwe Entrepreneurship Exchange (ZEEX)",
  role: "Project Manager / Investment Agent & Technology Integration Architect",
  date: "August 2026",
  reference: "SD-ZEEX-RWA-2026-01",
  confidential:
    "Private & Confidential — For the attention of the Chief Executive Officer, ZSE Holdings",
};

export const contact = {
  heading: "Proposal Lead & Executive Contact",
  name: "Gugu Nyathi",
  role: "CIO (Chief Information Officer), Ribbon Protocol",
  assignment:
    "Frontier Technology Development — Integration Architect & Investment Lead",
  email: "gugu@ribbonprotocol.org",
  mobile: "+27 66 296 8376",
  website: "https://ribbonprotocol.org",
};

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "numbers"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "quote"; text: string };

export type Section = {
  number: string;
  title: string;
  kicker: string;
  image?: "sme" | "network" | "mobile";
  blocks: Block[];
};

export const sections: Section[] = [
  {
    number: "01",
    title: "Executive Summary",
    kicker: "Mandate overview",
    blocks: [
      {
        kind: "p",
        text: "Ribbon Protocol proposes a strategic collaboration with ZSE Holdings to extend the newly launched Zimbabwe Entrepreneurship Exchange (ZEEX) onchain, converting securities issued by ZEEX-listed SMEs and startups into tokenized Real World Assets (RWAs) tradable by a global base of investors and digital asset traders.",
      },
      {
        kind: "p",
        text: "ZEEX solves the origination side of Zimbabwe's capital problem: it gives SMEs — 76% of business establishments, an estimated US$14.2 billion of annual output and more than 70% of the workforce — a regulated, collateral-free route to equity, debt and invoice discounting under SECZIM licensing. What ZEEX does not yet have is depth of demand. Domestic institutional and retail capital alone cannot absorb the issuance pipeline that formalisation will unlock.",
      },
      {
        kind: "p",
        text: "Our proposal supplies that demand. Ribbon Protocol brings existing working relationships within Base and Coinbase and will act as ZEEX's project manager, investment agent and technology integration architect to (a) secure non-dilutive grant funding of up to US$250,000 from the Base Ecosystem Fund, (b) raise up to US$3.5 million of seed equity from Base and Coinbase Ventures and aligned funds, and (c) channel liquidity from the Base and Coinbase ecosystem of investors, funds, market makers and traders into tokenized ZEEX instruments.",
      },
      {
        kind: "p",
        text: "The build comprises a digital RWA platform integrated with ZEEX, a Zimbabwe-currency stablecoin ($ZIG, pegged 1:1 to the Zimbabwe Investment Gold currency) as the onchain settlement and quote asset, desktop/tablet and mobile applications for global and diaspora investors, and a WhatsApp-based trading channel for local users on low-end devices.",
      },
      {
        kind: "quote",
        text: "The strategic prize is larger than a technology upgrade. Executed well, ZEEX becomes a globally investable venture funding venue — the Y Combinator and Silicon Valley capital formation engine for Africa — able to attract fast-moving venture capital to Zimbabwean startups, to list diaspora-owned Zimbabwean companies on ZEEX and other ZSE Holdings markets, and to position Zimbabwe as the Silicon Valley of Africa.",
      },
    ],
  },
  {
    number: "02",
    title: "The Opportunity",
    kicker: "Market context",
    image: "sme",
    blocks: [
      { kind: "h3", text: "2.1 What ZEEX has established" },
      {
        kind: "bullets",
        items: [
          "A SECZIM-licensed digital capital markets platform, launched in Bulawayo and sitting inside ZSE Holdings alongside the Zimbabwe Stock Exchange and the Victoria Falls Stock Exchange.",
          "A purpose-built incubator market: ZSE and VFEX issuers may not migrate to ZEEX, preserving ZEEX as a dedicated growth-enterprise venue backed by government incentives.",
          "Two market segments — ZEEX Private Markets and ZEEX Public Markets — supporting equity, debt securities and invoice discounting so issuers can choose the funding structure that fits their cash cycle.",
          "Trading and settlement in ZIG, and a formalisation flywheel: to raise on ZEEX, businesses must register for tax, maintain bank accounts and adopt proper governance, which builds investor confidence.",
        ],
      },
      { kind: "h3", text: "2.2 The constraint" },
      {
        kind: "p",
        text: "Demand-side depth, not supply-side pipeline, is the binding constraint. Growth-stage risk capital is scarce locally, exit paths are thin, secondary liquidity in an SME market is structurally shallow, and the largest natural buyer base — the Zimbabwean diaspora and global frontier-market investors — faces friction in FX, onboarding, custody and settlement.",
      },
      { kind: "h3", text: "2.3 The unlock" },
      {
        kind: "p",
        text: "Onchain markets settle 24/7, are natively composable, and reach investors wherever they are with wallet-level onboarding rather than correspondent banking. Tokenizing ZEEX instruments — equity, debt notes and invoice-financing receivables — and quoting them against a local stablecoin converts a domestic SME board into a globally accessible asset class without asking ZEEX to abandon its regulatory perimeter or its ZIG denomination.",
      },
    ],
  },
  {
    number: "03",
    title: "Strategic Alignment with the Base Request for Builders",
    kicker: "Investment thesis fit",
    blocks: [
      {
        kind: "p",
        text: "Base has publicly stated that global onchain finance is the defining use case for blockchains and has published the theses it is actively funding. ZEEX maps onto four of those theses simultaneously — a rare degree of fit for a single venue, and the core of the investment case we will take to the Base Ecosystem Fund.",
      },
      {
        kind: "table",
        head: ["Base thesis", "ZEEX asset / capability", "Why it is a strong fit"],
        rows: [
          [
            "Alternative yield-bearing assets",
            "ZEEX invoice discounting and debt securities issued by formalised SMEs",
            "Base explicitly names invoice financing, trade finance and revenue-based financing as short-duration working capital instruments it wants onchain. ZEEX already originates exactly these, under a licensed exchange with vertical-specific underwriting and issuer governance requirements.",
          ],
          [
            "Local stablecoins",
            "$ZIG on Base, pegged 1:1 to the Zimbabwe Investment Gold currency",
            "Base notes that tokenizing local assets is constrained until local-currency liquidity exists onchain, and that local stablecoins are the essential quote pair for tokenized local assets. $ZIG is the quote asset for the entire ZEEX board and doubles as a settlement rail for local business transactions.",
          ],
          [
            "Stablecoin distribution in cash-centric emerging markets",
            "WhatsApp trading and payments channel, agent and merchant network",
            "Zimbabwe is a cash-centric, effectively multi-currency economy. Meeting users on WhatsApp and on low-end handsets is precisely the defensible distribution wedge Base describes, connecting physical cash behaviour to onchain rails.",
          ],
          [
            "Tokenized portfolios as collateral",
            "Phase 3 credit layer against tokenized ZEEX holdings",
            "A B2B2C securities-backed credit facility lets SME founders and investors draw stablecoin liquidity against tokenized holdings without forced selling — the model Base wants built end to end, from tokenization through credit deployment.",
          ],
          [
            "Foreign exchange markets",
            "$ZIG / USDC and $ZIG / major pairs, native onchain FX",
            "Direct local-currency pairs remove FX intermediation for diaspora remitters and for cross-border SME trade, creating 24/7 liquid pricing where none exists today.",
          ],
        ],
      },
      {
        kind: "quote",
        text: "Base is looking for deep domain experts who can originate and responsibly manage real-world assets in under-financialised markets. ZSE Holdings is that domain expert, with regulatory standing no crypto-native team can replicate. Ribbon Protocol supplies the onchain architecture, the funding process and the ecosystem relationships.",
      },
    ],
  },
  {
    number: "04",
    title: "The Proposed Solution: ZEEX Onchain",
    kicker: "Platform architecture",
    image: "network",
    blocks: [
      { kind: "h3", text: "4.1 Platform architecture" },
      {
        kind: "numbers",
        items: [
          "Tokenization engine — issuance, register-of-members mirroring, corporate actions, lock-ups and transfer restrictions expressed in smart contracts, so every token remains the onchain representation of a SECZIM-recognised instrument.",
          "Compliance and identity layer — KYC/AML, investor accreditation, jurisdictional allow-lists, sanctions screening and a permissioned transfer standard, with audit trails formatted for SECZIM reporting.",
          "$ZIG stablecoin on Base — 1:1 to the Zimbabwe Investment Gold currency, with reserve attestation, authorised mint/redeem partners, and use as the quote and settlement asset for all ZEEX onchain trading as well as day-to-day local business payments.",
          "Liquidity and market structure — primary offering module, onchain order book and/or curated automated market making, designated market makers from the Base ecosystem, and RWA vaults for the working-capital and invoice-financing book.",
          "Applications — web and tablet terminal for institutions and global investors, iOS and Android apps for diaspora and retail, and a WhatsApp trading and account channel for local users on low-end devices.",
          "ZEEX integration — bi-directional interfaces to the existing ZEEX platform for listings, order routing, positions, corporate actions and settlement reconciliation, so the onchain venue extends ZEEX rather than competing with it.",
          "Custody and treasury — institutional custody options, self-custody wallets with recovery, and treasury controls for issuer proceeds.",
        ],
      },
      { kind: "h3", text: "4.2 Mapping ZEEX services onto onchain instruments" },
      {
        kind: "table",
        head: ["ZEEX service", "Onchain instrument", "Global demand"],
        rows: [
          [
            "Equity raise (Private Markets)",
            "Tokenized SME equity with transfer restrictions and cap-table mirroring",
            "Venture and frontier-market funds seeking early exposure with a credible register and eventual secondary route",
          ],
          [
            "Equity raise (Public Markets)",
            "Freely transferable tokenized equity, quoted in $ZIG",
            "Diaspora retail, global retail, index and thematic RWA allocators",
          ],
          [
            "Debt securities",
            "Tokenized notes with programmatic coupon and amortisation",
            "Onchain fixed-income and private-credit buyers seeking uncorrelated yield",
          ],
          [
            "Invoice discounting",
            "Tokenized receivables pools with tranching and vault deployment",
            "Stablecoin treasuries and yield vaults seeking short-duration working-capital exposure",
          ],
        ],
      },
      { kind: "h3", text: "4.3 Design principles" },
      {
        kind: "bullets",
        items: [
          "Regulation first: nothing is issued or traded outside the SECZIM perimeter; the chain is a settlement and distribution upgrade, not a regulatory bypass.",
          "ZIG-native: local currency is the unit of account, protecting monetary policy alignment and issuer reporting.",
          "Accessible by default: a founder in Gweru on a feature phone and a fund in New York must reach the same order book.",
          "Institutional-grade: audited contracts, formal reserve attestation for $ZIG, segregated client assets, and independent security review before launch.",
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Funding Strategy",
    kicker: "Capital formation",
    blocks: [
      {
        kind: "table",
        head: ["Source", "Type", "Quantum", "Use"],
        rows: [
          [
            "Base Ecosystem Fund",
            "Grant (non-dilutive)",
            "Up to US$250,000",
            "Architecture, $ZIG design and attestation framework, MVP build, security audit, pilot cohort of ZEEX issuers",
          ],
          [
            "Base Ecosystem Fund / Coinbase Ventures and co-investors",
            "Pre-seed / seed equity",
            "Up to US$3,500,000",
            "Full platform build, mobile and WhatsApp channels, market-maker incentives, compliance, licensing support, go-to-market across diaspora corridors",
          ],
        ],
      },
      {
        kind: "p",
        text: "Structuring of the seed vehicle — whether the platform entity is a ZSE Holdings subsidiary, a joint venture, or a licensed technology partner — is a decision for ZSE Holdings. We will present options with their governance, tax, control and regulatory consequences, and execute the option chosen.",
      },
    ],
  },
  {
    number: "06",
    title: "Ribbon Protocol's Role and Scope of Services",
    kicker: "Engagement model",
    blocks: [
      {
        kind: "p",
        text: "Ribbon Protocol is engaged in three defined capacities, each with its own deliverables and accountability.",
      },
      { kind: "h3", text: "6.1 Project Manager" },
      {
        kind: "bullets",
        items: [
          "Programme governance, delivery roadmap, milestone tracking and reporting to the ZSE Holdings executive and board.",
          "Vendor selection and management: smart contract developers, auditors, custody providers, mobile teams, market makers.",
          "Risk register, regulatory workstream coordination with SECZIM and the Reserve Bank, and issuer onboarding programme for the pilot cohort.",
        ],
      },
      { kind: "h3", text: "6.2 Investment Agent" },
      {
        kind: "bullets",
        items: [
          "Preparation and submission of the Base Ecosystem Fund grant application and the seed equity raise materials.",
          "Introductions to and management of Base, Coinbase Ventures and aligned funds; negotiation support on terms; diligence and data room management.",
          "Liquidity origination: market makers, stablecoin treasuries, RWA funds and diaspora distribution partners.",
        ],
      },
      { kind: "h3", text: "6.3 Technology Integration Architect" },
      {
        kind: "bullets",
        items: [
          "Target architecture, token standards, permissioned transfer design and $ZIG reserve and mint/redeem model.",
          "Integration design and delivery oversight between the onchain venue and the existing ZEEX platform, including settlement reconciliation and corporate actions.",
          "Security posture: audit scope, key management, incident response, and pre-launch penetration testing.",
          "Knowledge transfer and a documented handover so ZSE Holdings owns and operates the platform long term.",
        ],
      },
    ],
  },
  {
    number: "07",
    title: "Delivery Roadmap",
    kicker: "Execution plan",
    blocks: [
      {
        kind: "table",
        head: ["Phase", "Timeline", "Key outcomes"],
        rows: [
          [
            "Phase 0 — Mandate and design",
            "Weeks 1–6",
            "Signed engagement, regulatory mapping with SECZIM, target architecture, $ZIG design paper, grant application submitted",
          ],
          [
            "Phase 1 — MVP and pilot",
            "Months 2–6",
            "Tokenization engine, compliance layer, $ZIG testnet then mainnet on Base, web terminal, pilot cohort of 5–10 ZEEX issuers, security audit",
          ],
          [
            "Phase 2 — Scale and distribution",
            "Months 6–12",
            "Seed round closed, iOS/Android apps, WhatsApp channel live, designated market makers active, diaspora corridors opened, secondary liquidity in $ZIG pairs",
          ],
          [
            "Phase 3 — Credit and composability",
            "Months 12–24",
            "Invoice-financing vaults at scale, securities-backed credit against tokenized holdings, FX pairs, diaspora issuer listings across ZSE Holdings markets",
          ],
        ],
      },
    ],
  },
  {
    number: "08",
    title: "Strategic Impact: Zimbabwe as the Silicon Valley of Africa",
    kicker: "National outcome",
    image: "mobile",
    blocks: [
      {
        kind: "p",
        text: "The combination of a licensed startup exchange, onchain settlement and a local stablecoin creates something no other African market currently has: a regulated, globally accessible venue where a growth company can raise, be priced continuously, and offer investors a real exit path.",
      },
      {
        kind: "bullets",
        items: [
          "A globally viable venture funding platform. ZEEX becomes an institutional analogue to Y Combinator and the Silicon Valley funding stack — cohort formation, standardised instruments, transparent pricing and continuous liquidity — but with the public-market discipline of a licensed exchange.",
          "Fast-moving venture capital at the exchange. Onchain settlement, standardised documents and 24/7 secondary markets let funds move at software speed rather than correspondent-banking speed, drawing venture capital directly to Zimbabwean startups.",
          "Diaspora issuers and diaspora capital. Zimbabwean-owned startups operating abroad gain a natural home to list on ZEEX or other ZSE Holdings markets, while diaspora investors gain a compliant, low-friction way to invest in their own economy — deepening liquidity on both sides.",
          "Formalisation at scale. Every listing pulls an informal enterprise into the tax, banking and governance net, compounding the policy objective ZEEX was built to serve.",
          "National positioning. A functioning onchain capital market anchored in a local stablecoin is a credible claim to being the Silicon Valley of Africa — and a template ZSE Holdings can export across SADC.",
        ],
      },
    ],
  },
  {
    number: "09",
    title: "Risk and Compliance",
    kicker: "Governance",
    blocks: [
      {
        kind: "table",
        head: ["Risk", "Mitigation"],
        rows: [
          [
            "Regulatory uncertainty on tokenized securities",
            "Early, structured engagement with SECZIM; sandbox or no-objection pathway; tokens as records of existing licensed instruments, not new instruments",
          ],
          [
            "$ZIG peg and reserve integrity",
            "Ring-fenced reserves with authorised custodian, independent monthly attestation, published mint/redeem policy, RBZ engagement",
          ],
          [
            "Smart contract and cyber risk",
            "Two independent audits, bug bounty, staged rollout with caps, formal key management and incident response",
          ],
          [
            "Thin early liquidity",
            "Designated market makers funded from the raise, incentive programme, phased listing cadence, invoice-financing vaults as an anchor yield product",
          ],
          [
            "Investor protection and market abuse",
            "Permissioned transfers, surveillance, disclosure standards inherited from ZEEX listing rules",
          ],
          [
            "Capital controls and FX",
            "$ZIG-denominated settlement with regulated on/off ramps and full transaction traceability",
          ],
        ],
      },
    ],
  },
  {
    number: "10",
    title: "Commercials and Next Steps",
    kicker: "Mandate & mobilisation",
    blocks: [
      {
        kind: "p",
        text: "Ribbon Protocol proposes a mandate combining a monthly project management retainer, a success fee on capital raised in the investment agent capacity, and a fixed-fee architecture and integration workstream. Precise commercial terms will be tabled for negotiation once scope is confirmed, and can be structured to weight compensation toward successful funding outcomes.",
      },
      {
        kind: "numbers",
        items: [
          "Executive briefing with ZSE Holdings leadership to confirm strategic intent and scope (1 hour).",
          "Letter of intent and confidentiality agreement between ZSE Holdings and Ribbon Protocol.",
          "Two-week joint discovery: regulatory mapping, ZEEX technical review, pilot issuer shortlist.",
          "Submission of the Base Ecosystem Fund grant application with ZSE Holdings as named partner.",
          "Mobilisation of Phase 0 delivery on grant approval.",
        ],
      },
      {
        kind: "quote",
        text: "ZEEX has already done the hardest part: building a regulated venue where Zimbabwe's SMEs can raise capital without collateral. This proposal is about who shows up to buy. With Base and Coinbase capital, a local stablecoin and onchain distribution, that answer becomes the world.",
      },
    ],
  },
];
