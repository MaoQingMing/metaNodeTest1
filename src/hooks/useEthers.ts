import { ethers } from "ethers";
import { stakeAbi } from "../assets/abis/stake"
import { StakeContractAddress } from "../utils/env"
import { toast } from "react-toastify";
const useEthers =async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    let signer
    try {
        signer = await provider.getSigner()
    } catch (error) {
        toast.error('Transaction failed. Please try again.');
        console.log(error, 'stake-error');
    }
    const contract = new ethers.Contract(StakeContractAddress, stakeAbi, signer);
    return contract;
}

export default useEthers;