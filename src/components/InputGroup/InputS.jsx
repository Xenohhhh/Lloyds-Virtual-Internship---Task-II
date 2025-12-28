const InputS = ({PropertyPrice, DownPayment, InterestRate, LoanTerm, setPropertyPrice, setDownPayment, setInterestRate, setLoanTerm, handleResult}) => {
    return (
        <div className="input-section">
            <div className='input-group'>
                <label className="input-label">Property Price:</label>
                <input className="input-field" type='number' value={PropertyPrice} onChange={(e) => setPropertyPrice(Number(e.target.value))} />

                <label className="input-label">Down Payment:</label>
                <input className="input-field" type='number' value={DownPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />

                <label className="input-label">Interest Rate:</label>
                <input className="input-field" type='number' value={InterestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />

                <label className="input-label">Loan Term:</label>
                <input className="input-field" type='number' value={LoanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} />
            </div>

            <button className="btn" onClick={handleResult}>Calculate</button>
        </div>
    )
}

export default InputS;