import React,{useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

const TransactionList = () => {
    const {transactions, deleteTransaction} = useContext(GlobalContext)
    return (
        <>
            <h3>History</h3>
            <ul className="list">

                {
                    transactions.map(transaction => {
                        const sign = transaction.amount < 0 ? '-': '+';
                        return (
                        <li className={sign === '-' ? 'minus' : 'plus'}>
                            {transaction.text} <span>{ sign + '$' + Math.abs(transaction.amount)}</span>
                            <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
                        </li>
                    )} )
                }


            </ul>
        </>
    );
};

export default TransactionList;
