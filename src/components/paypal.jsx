import { useEffect, useRef } from "react";

const PayPal = () => {
    const paypal = useRef()
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "print",
                            amount: {
                                currency: "ILS",
                                value: 30.00,
                            }
                        }
                    ]
                })
}
        }).render(paypal.current)
    }, [])
    return <div>
      <div ref={paypal}></div>
  </div>;
};

export default PayPal;
