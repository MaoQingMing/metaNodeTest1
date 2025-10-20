import {useReadContract, useWalletClient } from "wagmi"
import { stakeAbi } from "../assets/abis/stake"
import { StakeContractAddress } from "../utils/env"
import { config } from '../utils/wagmi';
import { writeContract } from '@wagmi/core'

const useWagmi = () => {
    const { data: walletClient } = useWalletClient()

    const depositETH = (amount:bigint) => {
        return  writeContract(config,
            {
                account: walletClient?.account,
                address: StakeContractAddress, // ERC20 合约地址 (交易的 to)
                abi: stakeAbi,
                functionName: 'depositETH',
                value: amount, // transfer 函数参数
        })
    }
    const claim = (_pid: bigint) => {
        return writeContract(config,
            {
                account: walletClient?.account,
                address: StakeContractAddress, // ERC20 合约地址 (交易的 to)
                abi: stakeAbi,
                functionName: 'claim',
                args: [_pid],
            })
    }
    const stakingBalance = (_pid: bigint, address:`0x${string}`)=> {
        return useReadContract({
            account: walletClient?.account,
            address: StakeContractAddress, // ERC20 合约地址 (交易的 to)
            abi: stakeAbi,
            functionName: 'stakingBalance',
            args: [_pid,address], // 可选参数
        })
    }
    const withdrawAmount = (_pid: bigint, address:`0x${string}`)=> {
        return useReadContract({
            account: walletClient?.account,
            address: StakeContractAddress, // ERC20 合约地址 (交易的 to)
            abi: stakeAbi,
            functionName: 'withdrawAmount',
            args: [_pid,address], // 可选参数
        })
    }
    const unstake = (_pid: bigint, amount:bigint) => {
        return writeContract(config,
            {
                account: walletClient?.account,
                address: StakeContractAddress, // ERC20 合约地址 (交易的 to)
                abi: stakeAbi,
                functionName: 'unstake',
                args: [_pid,amount],
            }
        ) 
    }
    const withdraw = (_pid: bigint) => {
        return writeContract(config,
            {
                account: walletClient?.account,
                address: StakeContractAddress, // ERC20 合约地址 (交易的 to)
                abi: stakeAbi,
                functionName: 'withdraw',
                args: [_pid],
            }
        )
    }
    return {
        depositETH,
        claim,
        stakingBalance,
        withdrawAmount,
        unstake,
        withdraw,
    }
}

export default useWagmi