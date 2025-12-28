import { useState } from 'react'
import InputS from './components/InputGroup/InputS';
import Result from './components/SummaryCard/Result';

function App() {
  const [PropertyPrice, setPropertyPrice] = useState("");
  const [DownPayment, setDownPayment] = useState("");
  const [LoanTerm, setLoanTerm] = useState("");
  const [InterestRate, setInterestRate] = useState("");


  const [calculated, setCalculated] = useState(false);
  const [results, setResults] = useState({
    total: 0,
    pi: 0,
    taxes: 0,
    insurance: 0
  });


  const handleResult = () => {
    const monthlyPayment = ((PropertyPrice - DownPayment) / (LoanTerm * 12)).toFixed(2);

    const principal = PropertyPrice - DownPayment;
    const monthlyRate = InterestRate / 100 / 12;
    const numberOfPayments = LoanTerm * 12;

    const monthlyPI =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

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
      />

      {calculated && (
        <Result total={results.total}
          pi={results.pi}
          taxes={results.taxes}
          insurance={results.insurance} />
      )}

    </>
  )
}

export default App;
