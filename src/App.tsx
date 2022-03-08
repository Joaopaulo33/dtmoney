import styled from 'styled-components'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTrasactionModal} from './components/NewTrasactionModal';
import { TransactionsContext, TransactionsProvider } from './TransactionsContext';



// const Title = styled.h1`
//   font-size: 64px;
//   color:#8257e6;
//   `
//forma de acessibilidade
Modal.setAppElement('#root');


export function App() {

  const[isNewTrasactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function  handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
}

function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
}

  return (
    //Carregas as informações que queremos consumir
    <TransactionsProvider>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
    <Dashboard/>
    
    <NewTrasactionModal 
    isOpen={isNewTrasactionModalOpen} 
    onRequestClose={handleCloseNewTransactionModal}  />

    <GlobalStyle/>
    </TransactionsProvider>
  );
}
