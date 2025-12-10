 import "./App.css";
import Home from "../Home/Home.jsx"; // استدعاء الـ Child

function App() {
  // الداتا داخل الـ Parent
  const products = [
    { id: 1, name: "Laptop", price: 15000 },
    { id: 2, name: "Mouse", price: 250 },
    { id: 3, name: "Keyboard", price: 350 },
  ];

  return (
    <div>
      <h1>المتجر</h1>

      {/* إرسال الداتا للـ Child */}
      <Home products={products} />
    </div>
  );
}

export default App;
