const Result = ({total, pi, taxes, insurance}) => {
  return (
    <div>
        <div className="results-container">
            <h2>Estimated Monthly Payment: ${total}</h2>
            <div className="breakdown">
              <p>Principal & Interest: ${pi}</p>
              <p>Monthly Taxes: ${taxes}</p>
              <p>Monthly Insurance: ${insurance}</p>
            </div>
          </div>
    </div>
  )
}

export default Result