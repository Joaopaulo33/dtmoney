import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from "../../hooks/UseTransactions";
export function Summary(){
    // Já temos o valor de data, vindo do contexto
    //Como vai ter que pegar mais de um parâmetro temos que desestruturar o transactions, é só colocar entre { }

    const {transactions}= useTransactions();

   

//Reduce => Passar por todas transações e calcular um total
//acc => acumulator ( valor inicial 0, indicado ali)
const summary = transactions.reduce((acc, transaction)=>{
    if(transaction.type === 'deposit'){
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
        
    }else{
        acc.whitdraws += transaction.amount;
        acc.total -= transaction.amount;
    }
    //reduce precisa que sempre precisa que em toda interação eu retorne o acumulator(acc) com as mudanças.
    return acc;

},{
    deposits:0,
    whitdraws:0,
    total:0,
})


    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                         //Formato de moeda
                        style:'currency',
                        //Qual moeda 
                        currency:'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>
                -
                {new Intl.NumberFormat('pt-BR',{
                    //Formato de moeda
                    style:'currency',
                    //Qual moeda 
                    currency:'BRL'
                }).format(summary.whitdraws)}

                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                         //Formato de moeda
                        style:'currency',
                        //Qual moeda 
                         currency:'BRL'
                     }).format(summary.total)}

                </strong>
            </div>
        </Container>
    )
}