import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>data</th>
                    </tr>
                </thead>

                    <tbody>
                        <tr>
                            <td>Desenvolvimento de website</td>
                            <td>R$12.000</td>
                            <td>Desenvolvimento</td>
                            <td>28/02/2021</td>
                        </tr>
                        <tr>
                            <td>Desenvolvimento de website</td>
                            <td className="deposit">R$12.000</td>
                            <td>Desenvolvimento</td>
                            <td>28/02/2021</td>
                        </tr>
                        <tr>
                            <td>Aluguel</td>
                            <td className="withdraw">-R$1000</td>
                            <td>Casa</td>
                            <td>17/02/2021</td>
                        </tr>
                    </tbody>
            </table>
        </Container>
    )
}