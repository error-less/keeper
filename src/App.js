import Card from "./components/card";
import contacts from "./components/contact";
import "./style.css";
function main(contacts) {
  return(
    <Card
        name={contacts.name}
        img={contacts.imgURL}
        tel={contacts.phone}
        email={contacts.email}
    />
  );
}
function App() {
  return (
    <div className="App">
      {contacts.map(main)}
    </div>
  );
}

export default App;
