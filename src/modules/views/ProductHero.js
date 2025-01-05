import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://w0.peakpx.com/wallpaper/372/649/HD-wallpaper-forest-nature-sunny.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography
        color="inherit"
        align="center"
        variant="h2"
   
        sx={{
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px', // 線條寬度
            height: '4px', // 線條高度
            backgroundColor: 'darkblue', // 更改線條顏色（例如藍色）
          },
        }}
      >
        Upgrade your Life
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Enjoy the best moment with the world.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{
          minWidth: 200,
          backgroundColor: 'darkblue', // 按鈕背景顏色
          '&:hover': {
            backgroundColor: 'gray', // 停時的背景顏色
          },
        }}
      >
        Apply
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
