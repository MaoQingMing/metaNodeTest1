import { useWalletClient } from "wagmi"
import { stakeAbi } from "../assets/abis/stake"
import { StakeContractAddress } from "../utils/env"
import { config } from '../utils/wagmi';
import { writeContract } from '@wagmi/core'

const useWagmi = () => {
    const { data: walletClient } = useWalletClient()

    const depositETH = (amount:any) => {
        // console.log(
        //     config,
        //     {
        //         account: walletClient?.account,
        //         address: StakeContractAddress, // ERC20 合约地址 (交易的 to)
        //         abi: stakeAbi,
        //         functionName: 'depositETH',
        //         value: amount, // transfer 函数参数
        //     }
        // )
        return  writeContract(config,
            {
                account: walletClient?.account,
                address: StakeContractAddress, // ERC20 合约地址 (交易的 to)
                abi: stakeAbi,
                functionName: 'depositETH',
                value: amount, // transfer 函数参数
        })
    }
    return {
        depositETH,
    }
}

export default useWagmi