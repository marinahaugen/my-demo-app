

export default function BankAccount({ name, currentBalance, transactions}: any) {

    return (
        <fieldset id={name}>
            <legend>{name}</legend>
            
            <h2>Current Balance is: {currentBalance} NOK</h2>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((tx: any, i: number) =>
                    <li key={i} style={{ color: tx.isDeposit? 'green': 'red' }}> {tx.description} NOK {tx.price} </li>
                )}
            </ul>
        </fieldset>
    )
}