import { Box, Heading } from "@chakra-ui/react"
import walletModal from "./walletModal"

const Header = () => {
    return(
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <Heading>Web3.Ranking</Heading>
            <walletModal />
        </Box>
    )
}

export default Header