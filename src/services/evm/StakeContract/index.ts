import { ethers, parseEther } from "ethers"
import { StakeContractAddress } from "../../../utils/env"
import { stakeAbi } from "../../../assets/abis/stake"

export const depositETH = (signer: ethers.ContractRunner, amount: string) => {
    const contract = new ethers.Contract(StakeContractAddress, stakeAbi, signer)
    return contract.depositETH({
        value: parseEther(amount)
    })
}