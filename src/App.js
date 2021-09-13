import './App.css';

const Box = ({week}) => {
  return(
    <div className="Box">{week + 1}</div>
  )
}

function App() {
  return (
    <div className="App">
      {[...Array(78)].fill().map((n, year) => (
          [...Array(52)].fill().map((n, week) => (
            <Box key={week} week={week}/>
          )
        )
      ))}
    </div>
  );
}

export default App;
