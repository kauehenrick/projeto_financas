import { Container } from "./styles";
import { useTransactions } from "../../hooks/TransactionsContext";

export function TransactionsTable() {
    const { transactions } = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transactions => (
                         <tr key={transactions.id}>

                            <td>{transactions.title}</td>

                            <td className={transactions.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'brl'
                                }).format(transactions.amount)}
                                </td>

                            <td>{transactions.category}</td>

                            <td className={transactions.type}>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transactions.createdAt)
                                )}
                            </td>

                         </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}