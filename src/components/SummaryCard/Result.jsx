const Result = ({total, pi, taxes, insurance}) => {
  return (
    <div>
        <div className="results-container">
            <h2>Estimated Monthly Payment: ${total}</h2>
            <div className="breakdown-list">
              <p className="breakdown-item">Principal & Interest: ${pi}</p>
              <p className="breakdown-item">Monthly Taxes: ${taxes}</p>
              <p className="breakdown-item">Monthly Insurance: ${insurance}</p>
            </div>
          </div>
    </div>
  )
}

export default Result