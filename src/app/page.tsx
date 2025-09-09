"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarStyleMinimal
        logoSrc='/images/logo.svg'
        logoAlt='PawCoin'
        buttonText='Get Started'
        onButtonClick={() => { /* Define button action */ }}
      />
      <div id='hero' data-section='hero'>
        <BillboardHero title='Welcome to PawCoin' subtitle='The Next Big Meme Coin!' />
      </div>
      <div id='about' data-section='about' className='scroll-mt-24'>
        <CtaAbout title='About PawCoin' descriptions={['PawCoin is a fun, meme-inspired cryptocurrency.', 'Join our community and enjoy a playful financial experience.']} />
      </div>
      <div id='how-to-buy' data-section='how-to-buy' className='scroll-mt-24'>
        <HowToBuy3D title='How to Buy PawCoin' steps={[{ title: 'Step 1', description: 'Visit the exchange.', image: '/images/placeholder1.avif', position: 'left', isCenter: false }, { title: 'Step 2', description: 'Create an account.', image: '/images/placeholder2.avif', position: 'center', isCenter: true }, { title: 'Step 3', description: 'Make your purchase.', image: '/images/placeholder3.avif', position: 'right', isCenter: false }]} />
      </div>
      <div id='tokenomics' data-section='tokenomics' className='scroll-mt-24'>
        <PatternTokenomics title='Tokenomics' description='PawCoin is built for fun and growth.' kpiItems={[{ value: '1B', description: 'Total Supply', icon: 'DollarSign' }, { value: '50M', description: 'Market Cap', icon: 'BarChart' }, { value: '20%', description: 'Liquidity', icon: 'Shield' }]} />
      </div>
      <div id='footer' data-section='footer' className='scroll-mt-24'>
        <FooterLogoEmphasisBackgroundGradient logoSrc='/images/logo.svg' logoAlt='PawCoin' logoText='PawCoin' items={[{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }, { label: 'Contact Support', onClick: () => {} }]} />
      </div>
    </SiteThemeProvider>
  );
}
