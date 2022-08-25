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
import { disconnect } from 'process';

const injected = new InjectedConnector();

const WalletModal = () => {
    const {activate, active, library: provider} = useWeb3React();
    const connect = async () => {
        try {
            await activate(injected);
        } catch (e) {
            console.log(e);
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        {active ?(
            <Button onClick={disConnect} value={value}>Connect Wallet</Button>
        ) : (
            <Button onClick={onOpen}>Connect Wallet</Button>
        )}
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Connect Wallet</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default WalletModal