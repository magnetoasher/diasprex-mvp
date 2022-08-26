import BillingCardSubComponent from "./BillingCardSubComponent";
import ImportantNoteComponent from "./ImportantNoteComponent";
const BillingCardComponent = () => {
  const cardHash = [
    {
      id: 1,
      name: "Marcus Moris",
      cardNumber: "Visa ****1697",
      expiry: "Card Expires at 09/34",
    },
    {
      id: 2,
      name: "Marcus Moris",
      cardNumber: "Visa ****7566",
      expiry: "Card Expires at 09/34",
    },
    {
      id: 3,
      name: "Marcus Moris",
      cardNumber: "Mastercard ****6867",
      expiry: "Card Expires at 09/34",
    },
  ];
  return (
    <div className="card mb-5 mb-xl-10">
      <div
        id="kt_billing_payment_tab_content"
        className="card-body tab-content"
      >
        <div
          id="kt_billing_creditcard"
          className="tab-pane fade show active"
          role="tabpanel"
        >
          <h3 className="mb-5">My Cards</h3>
        </div>

        <BillingCardSubComponent />
      </div>
    </div>
  );
};

export default BillingCardComponent;
