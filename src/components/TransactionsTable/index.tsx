import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


//para não dar erro na hora de utilizar as informações precisamos passar a interface
interface Transaction{
    id:number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt:string;
}
export function TransactionsTable(){
    const [transactions,setTransactions]= useState<Transaction[]>([]);

    useEffect(()=>{
        // Coloca esse .transactions no final pois o data retorna as informações como um objeto e dentro desse está as transações
        api.get('transactions').then(response=> setTransactions(response.data.transactions))
    },[]);

    
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