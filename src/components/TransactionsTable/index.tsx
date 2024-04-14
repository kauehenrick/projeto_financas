import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable() {
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    })

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
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2024</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="withdraw">- R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2024</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}