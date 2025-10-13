export type Service = {
  id: string
  label: string
  icon: string
  screenshots: {
    image_url: string
    title: string
  }[]
}

export const services = [
  {
    id: 'trending-services',
    label: 'trending services',
    icon: '/services/trending-services.svg',
    screenshots: [
      {
        image_url: 'coinmarketcap-dexscan-trends.png',
        title: 'CoinMarketCap Dexscan Trends'
      },
      {
        image_url: 'cmc-most-visited.png',
        title: 'CoinMarketCap Most Visited'
      },
      {
        image_url: 'birdeye-trending.png',
        title: 'Birdeye trending'
      },
      {
        image_url: 'geckoterminal-trends-service.png',
        title: 'Geckoterminal Trends'
      },
      {
        image_url: 'ss-1-right-image.png',
        title: 'CoinMarketCap Trends'
      },
      {
        image_url: 'dextool-trends.png',
        title: 'DexTools Hot Pairs'
      },
      {
        image_url: 'cg-main-trends.png',
        title: 'CoinGecko Trending'
      },
      {
        image_url: 'solscan-1.png',
        title: 'Solscan Trending'
      },
      {
        image_url: 'cg-_country.png',
        title: 'CoinGecko Regional Trending'
      }
    ]
  },
  {
    id: 'voting-services',
    label: 'voting services',
    icon: '/services/voting-services.svg',
    screenshots: [
      { image_url: 'dexscreener-votes.png', title: 'Dexscreener votes' },
      {
        image_url: 'dextool-community-votes.png',
        title: 'Dextool Community Votes'
      },
      {
        image_url: 'coinmarketcap-watchlist.png',
        title: 'CoinMarketCap Watchlists'
      },
      {
        image_url: 'coinmarketcap-sentiment-votes.png',
        title: 'Coinmarketcap Sentiment Votes'
      }
    ]
  },
  {
    id: 'listing-services',
    label: 'listing services',
    icon: '/services/listing-services.svg',
    screenshots: [
      { image_url: 'dexscreener-listing.png', title: 'Dexscreener Update' },
      {
        image_url: 'dextool-verification-services.png',
        title: 'Dextool update'
      },
      {
        image_url: 'cmc-fast-lisitng.png',
        title: 'CoinMarketCap Fast Listing'
      },
      {
        image_url: 'cmc-cs-verification.png',
        title: 'CoinMarketCap Supply Verification'
      },
      { image_url: 'cg-fast-listing.png', title: 'CoinGecko Fast Listing' }
    ]
  },
  {
    id: 'crypto-influencers-service',
    label: 'crypto influencers service',
    icon: '/services/crypto-influencers-service.svg',
    screenshots: [
      {
        image_url: 'crypto-influencer-campaign.png',
        title: 'Crypto Influencers'
      }
    ]
  },
  {
    id: 'crypto-social-media',
    label: 'crypto social media',
    icon: '/services/crypto-social-media.svg',
    screenshots: [
      {
        image_url: 'crypto-twitter-x-followers.png',
        title: 'Crypto Twitter (X) Followers'
      }
    ]
  },

  {
    id: 'hot',
    label: 'Hot 🔥',
    icon: '/services/hot.svg',
    screenshots: [
      {
        image_url: 'cmc-most-visited.png',
        title: 'CoinMarketCap Most Visited'
      },
      {
        image_url: 'geckoterminal-trends-service.png',
        title: 'Geckoterminal Trends'
      },
      {
        image_url: 'coinmarketcap-watchlist.png',
        title: 'CoinMarketCap Watchlists'
      },
      { image_url: 'ss-1-right-image.png', title: 'CoinMarketCap Trends' },
      { image_url: 'dextool-trends.png', title: 'DexTools Hot Pairs' },
      { image_url: 'cg-main-trends.png', title: 'CoinGecko Trending' },
      {
        image_url: 'cmc-fast-lisitng.png',
        title: 'CoinMarketCap Fast Listing'
      },
      { image_url: 'cg-fast-listing.png', title: 'CoinGecko Fast Listing' }
    ]
  },
  {
    id: 'crypto-ads',
    label: 'Crypto ADS',
    icon: '/services/crypto-ads.svg',
    screenshots: [
      { image_url: 'ph-crypto-ads.png', title: 'Pornhub Crypto ads' },
      { image_url: '4chan-ads.png', title: '4chan Crypto ads' }
    ]
  },
  {
    id: 'ico-services',
    label: 'ICO Services',
    icon: '/services/ico-services.svg',
    screenshots: [{ image_url: 'ico.png', title: 'ICO Sites Listing' }]
  },
  {
    id: 'cex-listings',
    label: 'CEX Listings',
    icon: '/services/cex-listings.svg',
    screenshots: [{ image_url: 'okx.png', title: 'OKX Exchange Listing' }]
  },
  {
    id: 'press-releases-articles',
    label: 'Press Releases & Articles',
    icon: '/services/press-releases-articles.svg',
    screenshots: [
      {
        image_url: 'marketwatch-crypto-press-release.png',
        title: 'MarketWatch Crypto press release'
      }
    ]
  }
]
