import Modal from "react-modal";
import { useState } from "react";
import { Container, TransactionTypeContainer } from "./styles";
import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
            >
                <img src={close} alt="fechar modal"/>
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input placeholder="Título"/>
                <input
                    type="number"
                    placeholder="Valor"
                />
                <input placeholder="Categoria" />

                <TransactionTypeContainer>
                    <button type="button">
                        <img src={income} alt="botão entrada"/>
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={outcome} alt="botão saída"/>
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}