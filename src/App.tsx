import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from 'miragejs';
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/TransactionsContext";

Modal.setAppElement('#root');

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Teste',
          type: 'deposit',
          category: 'teste',
          amount: 6000,
          createdAt: new Date('2023-05-31 13:00:00'),
        },
        {
          id: 2,
          title: 'Teste',
          type: 'withdraw',
          category: 'teste',
          amount: 5000,
          createdAt: new Date('2023-05-31 13:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
})

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
    </TransactionsProvider>
  );
}