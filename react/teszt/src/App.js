import './App.css';
import React, { useState, useEffect } from "react";
function App() {
  const [bejegyzes, setBejegyzes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/bejegyzesek")
      .then((response) => response.json())
      .then((data) => setBejegyzes(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  const [osztalyId, setOsztalyId] = useState('');
  const [tevekenysegNev, setTevekenysegNev] = useState('');

  const handleSubmit = () => {
      fetch('/http://localhost:8000/api/bejegyzes', {
          sellist1: osztalyId,
          sellist2: tevekenysegNev
      })
      
    }
    console.log(tevekenysegNev);
    console.log(osztalyId);
  return (

    <div className="App">
     <form onSubmit={handleSubmit}>
            <div className='container'>
                <div style={{borderStyle:"solid" }}>
                    <select className="form-select" id="sel1" name="sellist1" onChange={(e) => setOsztalyId(e.target.value)}>
                        <option>osztaly</option>
                        {bejegyzes.map((bejegyzesek) => (
                            <option key={bejegyzesek.osztaly_id}>{bejegyzesek.osztaly_id}</option>
                        ))}
                    </select>
                    <select className="form-select" id="sel2" name="sellist2" onChange={(e) => setTevekenysegNev(e.target.value)}>
                    <option>tevekenyseg neve</option>
                        {bejegyzes.map((bejegyzesek) => (
                            <option key={bejegyzesek.tevekenyseg_nev}>{bejegyzesek.tevekenyseg_nev}</option>
                        ))}
                    </select>
                    <button type="button" className="btn btn-primary">Küldése</button>
                </div>
            </div>
        </form>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr >
              <th>Osztaly</th>
              <th>Tevékenység</th>
              <th>Pont</th>
              <th>Státusz</th>
            </tr>
          </thead>
          <tbody>
            {bejegyzes.map((bejegyzesek) => (
              <tr key={bejegyzesek.osztaly_id}>
                <td>{bejegyzesek.osztaly_id}</td>
                <td>{bejegyzesek.tevekenyseg_nev}</td>
                <td>{bejegyzesek.pontszam}</td>
                {bejegyzesek.allapot == 0 &&
                  <td>Elfogadva</td>
                }{bejegyzesek.allapot == 1 &&
                  <td>Jóváhagyásra vár</td>
                }

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
