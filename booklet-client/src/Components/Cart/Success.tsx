import { Button } from "react-bootstrap";
import { CartContext } from "../../Contexts/CartContext";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function Success() {
  // @ts-ignore
  const { cartItems, setItems, address, name } = useContext(CartContext);
  const history = useHistory();
  useEffect(() => {
    const verifyPath = async () => {
      if (cartItems.length == 0) {
        history.push("/");
      }
    };
    verifyPath();
    setItems([]);
  }, []);
  return (
    <div className="purchase-success">
      <h3>
        Congratulations <strong>{name}</strong>
      </h3>
      <img src="/images/successful.gif" />
      <h3>
        Your order will be shipped to <strong>{address}</strong> in the next 3-5 working days.
      </h3>
      <Button
        variant="outline-primary"
        onClick={() => {
          history.push("/");
        }}
      >
        Back To The Store
      </Button>
    </div>
  );
}
