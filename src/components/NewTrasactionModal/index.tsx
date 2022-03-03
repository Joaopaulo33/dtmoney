import Modal from 'react-modal';
import { Container } from './style';
import closeImg from '../../assets/close.svg'
interface NewTrasactionModalProps{
    isOpen: boolean;
    onRequestClose:()=>void;
}

export function NewTrasactionModal({isOpen,onRequestClose}:NewTrasactionModalProps){

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
        
        <img src="{clseImg}" alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor"
        />

        <input
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
  </Modal>
  );
}

