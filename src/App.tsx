import styled from 'styled-components'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';



// const Title = styled.h1`
//   font-size: 64px;
//   color:#8257e6;
//   `


export function App() {

  const[isNewTrasactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function  handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
}

function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
}

  return (
    <>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
    <Dashboard/>
    <Modal 
      isOpen={isNewTrasactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}>
    </Modal>
    <GlobalStyle/>
    </>
  );
}

