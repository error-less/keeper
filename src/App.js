import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note.jsx";
import Notes from './components/Notes.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      {Notes.map(item=>
        <Note
          key={item.key}
          title={item.title}
          content={item.content}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
