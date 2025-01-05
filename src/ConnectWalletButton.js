import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Core } from '@walletconnect/core';
import { WalletKit } from '@reown/walletkit';

// 初始化 WalletConnect Core
const core = new Core({
  projectId: '1ac7fd552e244000f1a4883b95cd022b', // 你的 Project ID
});

// 配置連接錢包的應用資訊
const metadata = {
  name: 'ESG Project',
  description: 'A wallet connection example',
  url: 'https://chelseywang.github.io/my-esg', // 部屬後的網址
  icons: ['https://assets.reown.com/reown-profile-pic.png'],
};

const ConnectWalletButton = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletInfo, setWalletInfo] = useState(null); // 顯示連接的錢包資訊

  // 處理錢包連接
  const handleConnect = async () => {
    try {
      const walletKit = await WalletKit.init({ core, metadata });
      const wallet = await walletKit.connect(); // 顯示錢包選擇彈窗
      console.log('Connected wallet:', wallet);
      setWalletInfo(wallet);
      setWalletConnected(true);
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleConnect}
        sx={{
          backgroundColor: 'blue',
          color: 'white',
          '&:hover': {
            backgroundColor: 'darkblue',
          },
        }}
      >
        {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
      </Button>

      {walletConnected && walletInfo && (
        <div style={{ marginTop: '10px', color: 'white' }}>
          <p><strong>Connected Wallet:</strong></p>
          <p>Address: {walletInfo.accounts[0]}</p>
          <p>Chain ID: {walletInfo.chainId}</p>
        </div>
      )}
    </div>
  );
};

export default ConnectWalletButton;
