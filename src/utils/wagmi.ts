import { createConfig, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  injectedWallet
} from '@rainbow-me/rainbowkit/wallets';

const ProjectId = 'e3242412afd6123ce1dda1de23a8c016';

// 配置钱包连接器
const connectors = connectorsForWallets(
    [
      {
        groupName: '自定义钱包321321321',
        wallets: [
          injectedWallet,
          metaMaskWallet,
          rainbowWallet,
          coinbaseWallet,
          walletConnectWallet,
        ],
      },
    ],
    {
      appName: 'Meta Node Stake',
      projectId: ProjectId,
    }
);

export const config = createConfig({
  chains: [sepolia],
  connectors,
  transports: {
    [sepolia.id]: http('https://sepolia.infura.io/v3/d8ed0bd1de8242d998a1405b6932ab33'),
  },
  ssr: true, // 如果你需要服务端渲染支持
});

export const defaultChainId: number = sepolia.id;