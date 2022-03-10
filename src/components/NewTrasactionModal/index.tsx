import Modal from 'react-modal';
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';


import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container,TransactionTypeContainer, RadioBox } from './style';
import { useTransactions } from '../../hooks/UseTransactions';



interface NewTrasactionModalProps{
    isOpen: boolean;
    onRequestClose:()=>void;
}



export function NewTrasactionModal({isOpen,onRequestClose}:NewTrasactionModalProps){

  const {createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const[amount, setAmount] = useState(0);
  const[category, setCategory] = useState('');
  const [type, setType]= useState('deposit');


  async function handleCreateNewTransaction(event:FormEvent){
    // significa " cancele se for cancelável, ou seja não execute uma função default de algum elemento se isso for possível."
    event.preventDefault()

    //Usando função assincrona para que possamos fechar o modal
   await createTransaction({
      title,
      amount,
      category,
      type
    })


    // Para que possamos resetar o modal
    setTitle("");
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }
return (  
  <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button 
      type='button' 
      onClick={onRequestClose} 
      className="react-modal-close">
        
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event=> setTitle(event.target.value)}
          />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event=> setAmount(Number(event.target.value))}
          />


        <TransactionTypeContainer>
          <RadioBox 
          type='button'
          onClick={()=>{setType('deposit');}}
          isActive={ type === 'deposit' }
          activeColor='green'
          
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          
          <RadioBox
          type='button'
          onClick={()=>{setType('withdraw');}}
          isActive={ type === 'withdraw' }
          activeColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event=> setCategory(event.target.value)}
          />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
  </Modal>
  );
}

