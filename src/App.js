import Form from "./Form";
import SeatList from "./SeatList";
import Table from "./Table";

function App() {
  return (
    <div className="wrapper">
      <div className="movie">
        <h1 className="text-center">MOVIE SEAT SELECTION</h1>
        <Form />
        <SeatList />
        <Table />
      </div>
    </div>
  );
}

export default App;
