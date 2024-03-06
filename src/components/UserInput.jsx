
const UserInput = ({ values, onChange }) => {


    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" name="initialInvestment" required value={ values.initialInvestment } onChange={ onChange } />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" name="annualInvestment" required value={ values.annualInvestment } onChange={ onChange } />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number" name="expectedReturn" required value={ values.expectedReturn } onChange={ onChange } />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" name="duration" required value={ values.duration } onChange={ onChange } />
                </p>
            </div>
        </div>

    )
}
export default UserInput