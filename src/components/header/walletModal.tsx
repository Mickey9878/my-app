import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { resolve } from 'path'
import { useContext, useEffect } from 'react'
import getProps from '../api/fetch'


const WalletModal = () => {
  let scores;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {activate, deactivate, active, account, library: provider} = useWeb3React();
  // injected provider identifier
  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  })
  const connectWallet = async () => {
      
    onClose();
    activate(injected);
    if(active==true) {
      scores = await getProps(account);  
  }

  // useEffect(() => {
  //   if(active==true) {
  //     scores = getProps(account);
      
  //   }
  // },[account, active])
  return (
    <>
      {active ?(
          <Button onClick={deactivate} >{account}</Button>
      ) : (
          <Button onClick={onOpen}>Connect Wallet</Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button onClick={connectWallet}>MetaMask</Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default WalletModal