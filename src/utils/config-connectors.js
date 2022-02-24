import Metamask from "../images/connector-img/metamaskWallet.png";
import WalletConnect from "../images/connector-img/wallet-connect.svg";
import TrustWallet from "../images/connector-img/TrustWallet.png";

export const connectors = [
    {
      title: "Metamask",
      icon: Metamask,
      connectorId: "injected",
      priority: 1,
    },
    {
      title: "WalletConnect",
      icon: WalletConnect,
      connectorId: "walletconnect",
      priority: 2,
    },
    {
      title: "Trust Wallet",
      icon: TrustWallet,
      connectorId: "injected",
      priority: 3,
    }
];