import {BrowserProvider, JsonRpcSigner, ethers } from "ethers";
import { stakeAbi } from "../assets/abis/stake"
import { StakeContractAddress } from "../utils/env"
import { toast } from "react-toastify";
import { Config, useChainId, useClient, useConnectorClient, useWalletClient } from 'wagmi'
import { useCallback } from "react";


const useEthers =async () => {
    const { data: client } = useWalletClient()

    if (!client) return
    const { account, chain, transport } = client

    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: chain.contracts?.ensRegistry?.address,
    }
    const provider = new BrowserProvider(transport, network)
    const signer = new JsonRpcSigner(provider, account.address)

    // const provider = new ethers.BrowserProvider(window.ethereum);
    // let signer
    // try {
    //     signer = await provider.getSigner()
    // } catch (error) {
    //     toast.error('Transaction failed. Please try again.');
    //     console.log(error, 'stake-error');
    // }
    const contract = new ethers.Contract(StakeContractAddress, stakeAbi, signer);
    return contract;
}

export default useEthers;