import { useTransactions } from "../../hooks/UseTransactions";
import { Container } from "./styles";



export function TransactionsTable(){

    //Como vai ter que pegar mais de um parâmetro temos que desestruturar o transactions, é só colocar entr { }
    
    const {transactions} = useTransactions();
     
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
                        
                    {transactions.map(transaction=>(    
                        <tr key={transaction.id}>
                            <td >{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR',{
                                    //Formato de moeda
                                    style:'currency',
                                    //Qual moeda 
                                    currency:'BRL'
                                }).format(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt)
                                )}
                                </td>
                        
                        </tr>
                    ))}
                
                </tbody>
            </table>
        </Container>
    )
}