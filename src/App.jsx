import { useState } from 'react'
import InputS from './components/InputGroup/InputS';
import Result from './components/SummaryCard/Result';

function App() {
  const [PropertyPrice, setPropertyPrice] = useState("");
  const [DownPayment, setDownPayment] = useState("");
  const [LoanTerm, setLoanTerm] = useState("");
  const [InterestRate, setInterestRate] = useState("");
  const [MortgageType, setMortgageType] = useState("Fixed-rate");

  const fields = [PropertyPrice, DownPayment, LoanTerm, InterestRate];
  const filled = fields.filter(field => field > 0).length;
  const progres = (filled / fields.length) * 100;



  const [calculated, setCalculated] = useState(false);
  const [results, setResults] = useState({
    total: 0,
    pi: 0,
    taxes: 0,
    insurance: 0
  });


  const handleResult = () => {

    const principal = PropertyPrice - DownPayment;
    const monthlyRate = InterestRate / 100 / 12;
    const numberOfPayments = LoanTerm * 12;
    let monthlyPI = 0;

   
    if (MortgageType === "Interest-Only") {
      monthlyPI = principal * monthlyRate;
    } else {
      monthlyPI = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }



    const monthlyTaxes = (PropertyPrice * 0.012) / 12;

    const monthlyInsurance = (PropertyPrice * 0.0035) / 12;

    const totalMonthlyPayment = monthlyPI + monthlyTaxes + monthlyInsurance;

    setResults({
      total: totalMonthlyPayment.toFixed(2),
      pi: monthlyPI.toFixed(2),
      taxes: monthlyTaxes.toFixed(2),
      insurance: monthlyInsurance.toFixed(2)
    });
    setCalculated(true);
  };



  return (
    <>
      <div className="app-container">
        <header className="app-header">
          <div className="logo-placeholder">LLOYDS BANK</div>
          <h1>Mortgage Calculator</h1>
          <p>Estimate your monthly payments in seconds.</p>
        </header>

        <div className="progress-container">
          <div className="progress-bar"
            style={{ width: `${progres}%` }}
          ></div>
        </div>

        <InputS
          PropertyPrice={PropertyPrice}
          DownPayment={DownPayment}
          InterestRate={InterestRate}
          LoanTerm={LoanTerm}
          setPropertyPrice={setPropertyPrice}
          setDownPayment={setDownPayment}
          setInterestRate={setInterestRate}
          setLoanTerm={setLoanTerm}
          handleResult={handleResult}
          MortgageType={MortgageType}
          setMortgageType={setMortgageType}
        />

        {calculated && (
          <Result total={results.total}
            pi={results.pi}
            taxes={results.taxes}
            insurance={results.insurance} />
        )}
      </div>

    </>
  )
}

export default App;
