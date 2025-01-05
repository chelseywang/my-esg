import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import ConnectWalletButton from '../../ConnectWalletButton'; // 引入 ConnectWalletButton 組件

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* 左側留空，可添加 LOGO 或其他內容 */}
          <Box sx={{ flex: 1 }} />
          {/* 中間的標題 */}
          <Box sx={{ fontSize: 24, color: 'white' }}>
            {'ESG'}
          </Box>
          {/* 右側新增 Connect Wallet 按鈕 */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <ConnectWalletButton />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
