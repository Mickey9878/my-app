import { Box, Heading } from "@chakra-ui/react"
import WalletModal from "./walletModal"

const Header = () => {
    return(
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <Heading>Web3.Ranking</Heading>
            <WalletModal />
        </Box>
    )
}

export default Header