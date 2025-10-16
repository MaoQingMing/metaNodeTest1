import { Abi, Address, GetContractReturnType, PublicClient, WalletClient, getContract as viemGetContract, } from "viem"
import {config, defaultChainId } from './wagmi'
import { viemClients } from "./viem"
import { writeContract } from "viem/actions"

export const getContract = <TAbi extends Abi | readonly unknown[], TWalletClient extends WalletClient>({
  abi,
  address,
  chainId = defaultChainId,
  signer,
  type
}: {
  abi: TAbi | readonly unknown[]
  address: Address
  chainId?: number
  signer?: TWalletClient
  type?: string
}) => {
  console.log('11111111111', type)
  if (type === 'viem'){
    const c = viemGetContract({
      abi,
      address,
      client: {
        public: viemClients(chainId),
        wallet: signer,
      },
    }) as unknown as GetContractReturnType<TAbi, PublicClient, Address>

    return {
      ...c,
      account: signer?.account,
      chain: signer?.chain,
    }
  } else if (type === 'wagmi'){
    const depositETH = (args: any[] = [],amount:any) => {
      console.log('wagmi!!!!!!!!!!!!', abi)
      // @ts-ignore
      return  writeContract(config,
          {
            account: signer?.account,
            address: address, // ERC20 合约地址 (交易的 to)
            abi: abi,
            functionName: 'depositETH',
            value: amount, // transfer 函数参数
          })
    }
    const c = {
      read:{
        
      },
      write:{
        depositETH
      }
    }

    return {
      ...c,
      account: signer?.account,
      chain: signer?.chain,
    }
  }
}