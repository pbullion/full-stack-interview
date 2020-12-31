import './App.css';

function App() {
  const getFile = () => {
    console.log('getting file');
  };

  return (
    <div className='App'>
      <button onClick={getFile}>Get File</button>
    </div>
  );
}

export default App;
