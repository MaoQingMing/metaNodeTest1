import { ethers, parseEther } from "ethers"
import { StakeContractAddress } from "../../../utils/env"
import { stakeAbi } from "../../../assets/abis/stake"

export const depositETH = (signer: ethers.ContractRunner, amount: string) => {
    const contract = new ethers.Contract(StakeContractAddress, stakeAbi, signer)
    return contract.depositETH({
        value: parseEther(amount)
    })
}

export const stakingBalance = (provider: ethers.ContractRunner, _pid:bigint,address:`0x${string}`) => {
    const contract = new ethers.Contract(StakeContractAddress, stakeAbi, provider)
    return contract.stakingBalance(
        _pid,address
    )
}

export const withdrawAmount = (provider: ethers.ContractRunner, _pid:bigint,address:`0x${string}`) => {
    const contract = new ethers.Contract(StakeContractAddress, stakeAbi, provider)
    return contract.withdrawAmount(
        _pid,address
    )
}