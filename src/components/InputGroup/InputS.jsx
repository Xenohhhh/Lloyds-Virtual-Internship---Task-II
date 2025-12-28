const InputS = ({PropertyPrice, DownPayment, InterestRate, LoanTerm, setPropertyPrice, setDownPayment, setInterestRate, setLoanTerm, handleResult}) => {
    return (
        <div>
            <h1>Mortgage Calculator</h1>
            <div className='InputS'>
                <label>Property Price:</label>
                <input type='number' value={PropertyPrice} onChange={(e) => setPropertyPrice(Number(e.target.value))} />

                <label>Down Payment:</label>
                <input type='number' value={DownPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />

                <label>Interest Rate:</label>
                <input type='number' value={InterestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />

                <label>Loan Term:</label>
                <input type='number' value={LoanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} />
            </div>

            <button onClick={handleResult}>Calculate</button>
        </div>
    )
}

export default InputS;