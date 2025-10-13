import { CexListings } from './cex-listings'
import { CryptoADS } from './crypto-ads'
import { CryptoInfluencersService } from './crypto-influencers-service'
import { CryptoSocialMediaService } from './crypto-social-media'
import { HotServices } from './hot-services'
import { IcoServices } from './ico-services'
import { ListingServices } from './listing-services'
import { PressReleasesArticles } from './press-releases-articles'
import { TrendingServices } from './trending-services'
import VotingServices from './voting-services'

export const ServiceContent = ({ id }: { id: string }) => {
  switch (id) {
    case 'trending-services':
      return <TrendingServices />

    case 'voting-services':
      return <VotingServices />

    case 'listing-services':
      return <ListingServices />

    case 'crypto-influencers-service':
      return <CryptoInfluencersService />

    case 'crypto-social-media':
      return <CryptoSocialMediaService />

    case 'hot':
      return <HotServices />

    case 'crypto-ads':
      return <CryptoADS />

    case 'ico-services':
      return <IcoServices />

    case 'cex-listings':
      return <CexListings />

    case 'press-releases-articles':
      return <PressReleasesArticles />

    default:
      return null
  }
}
