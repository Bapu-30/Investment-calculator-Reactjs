import { calculateInvestmentResults, formatter } from "../util/investment"

const Results = ({ userInputs }) => {

    let resultData = calculateInvestmentResults(userInputs)
    console.log(resultData)

    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total interest</th>
                    <th>invested Capital</th>
                </tr>
            </thead>
            <tbody>
                { resultData.map((result, index) => {
                    const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                    const totalAmountInvested = result.valueEndOfYear - totalInterest;
                    return (
                        <tr key={ index }>
                            <td>{ result.year }</td>
                            <td>{ formatter.format(result.valueEndOfYear) }</td>
                            <td>{ formatter.format(result.interest) }</td>
                            <td>{ formatter.format(totalInterest) }</td>
                            <td>{ formatter.format(totalAmountInvested) }</td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>
    )
}
export default Results