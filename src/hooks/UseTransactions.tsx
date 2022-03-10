import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';


//para não dar erro na hora de utilizar as informações precisamos passar a interface
interface Transaction{
    id:number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt:string;
}

//Vai criar uma iterface igual a de cima e omitir os item a direita
 type TransactionInput = Omit<Transaction,'id' | 'createdAt'>;
//aqui é se quisessemos selecionar os itens, ao invés de omitir outros
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProviderProps{
    // Aceita qualquer tipo de conteúdo válido pro React como: tag jsx, tag html, texto...etc
    children:ReactNode;
}
 
interface TransactionsContextData{
    transactions: Transaction[];
    //Promise -> toda função assincrona no js retorna uma promise
    createTransaction: (transaction: TransactionInput)=> Promise<void>;
}

 const TransactionsContext = createContext<TransactionsContextData>(
    //Aqui estava dando erro, a gente engana o react pra parar de dar esse erro
    {} as TransactionsContextData
    );

// Ao invez de usar la no App.tsx o "TransactionContext.Provider,
//vamos usar o TransactionProvider".
//Precisamos avisar pro react que colocaremos um clidren dentro desse elemento(Onde formos usar ele), ou seja, colocar um html dentro dele
export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions , setTransactions] = useState<Transaction[]>([]);

    
    useEffect(()=>{
        // Coloca esse .transactions no final pois o data retorna as informações como um objeto e dentro desse está as transações.
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    },[]);

// função assincrona
    async function createTransaction(transactionInpyut:TransactionInput){
        const response =  await api.post('/transactions', {
            ...transactionInpyut,
            //sem essa propriedade dá erro
            createdAt:new Date(),
        
        });

        const { transaction } = response.data;

        setTransactions(
            [
                ...transactions,
                transaction,
            ]
        );
    }


    return (
        <TransactionsContext.Provider value= {{transactions,createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )

}


//Um hook sempre pode utilizar de outros hooks 
export function useTransactions(){
    const context = useContext(TransactionsContext);
    return context;
}