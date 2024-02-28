import Card from "./components/Card";

function App() {
  let objects={
    name:"manish",
    surname:"Shitole",
    Address:"Mumbai",
    Pincode:"4000064"
  }

  let arr=[1,23,54,90]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card username="Coder" surname="Coder" name="Image" value={objects} get={arr} /><br />
      
    </>
  );
}

export default App;
