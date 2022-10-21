
import { SendMoneyForm } from "./SendMoneyForm";


export const SendMoneyFormWrapper=()=> {
    return (
    
    <div className="card shadow-sm px-10 py-5 mw-600px" style = {{margin: 'auto'}}>
        <div className="card-header">
            <h3 className="card-title">Money Transfer</h3>
            <div className="card-toolbar">

            </div>
        </div>
        <div className="card-body">
            <SendMoneyForm />
    </div>
        <div className = 'd-flex flex-row'>
        <div className="card-footer">
            Money transfer transactions are processed by Diasprex third party partners
                </div>
                </div>
            </div>

    )
}