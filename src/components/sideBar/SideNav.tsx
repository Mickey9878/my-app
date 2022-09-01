import { Flex, Heading, Text, Image, Stack, Link, Center, Box, Spacer } from "@chakra-ui/react";
import { AiOutlineDashboard } from 'react-icons/ai';
import { TbShovel, TbMathSymbols } from 'react-icons/tb';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BsFillFlagFill } from 'react-icons/bs';
import { GiTrophy } from 'react-icons/gi';
import NavItem from "./navItem";
import SideFooter from "./sideFooter/sideFooter";

const SideNav = () => {
    return(
      <>
      <Stack height='100%' width='100%' bg="rgba(255,255,255,0.03)" pos="fixed" w={{ base: 'full', md: 279 }} borderRight='1px'>
    
        <NavItem name="MY Profile" icon={AiOutlineDashboard} navlink="/mypage" />
        <NavItem name="Portfolio" icon={TbShovel} navlink="/farm" />
        <NavItem name="NFT" icon={RiMoneyDollarCircleLine} navlink="/lend" />
        <Box border='1px' borderColor='#bbb' opacity='0.06' ></Box>
        <NavItem name="Calculator" icon={TbMathSymbols} navlink="/calculator" />
        <NavItem name="Vote" icon={BsFillFlagFill} navlink="/vote" />
        <NavItem name="Contributions" icon={GiTrophy} navlink="/contributions" />
        <Spacer  />
        <SideFooter />
      </Stack>
    </>
    )
}

export default SideNav