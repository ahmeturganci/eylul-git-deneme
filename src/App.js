import { useEffect, useState } from "react";
import "./App.css";
import InputDecimal from "./components/input-decimal";
function App() {
  const [vki, setVki] = useState(0);
  const [boy, setBoy] = useState(0);
  const [kilo, setKilo] = useState(0);
  const [message, setmessage] = useState({ text: "", video: "" });

  const vucutKitleEndeksiHesapla = () => {
    let sonuc = kilo / (boy * boy);
    setVki(sonuc);
  };

  useEffect(() => {
    checkVki();
  }, [vki]);

  const checkVki = () => {
    if (vki> 14 && vki <= 18.5)
      setmessage({
        text: "İdeal kilonun altında",
        video: "uXFQnwOu_r0",
      });
    else if (vki >= 18.5 && vki <= 24.5)
      setmessage({
        text: "İdeal kiloda",
        video: "KoXxD99BYDw",
      });
    else if (vki >= 25 && vki <= 29.9)
      setmessage({
        text: "İdeal kilonun üstünde",
        video: "ZQK_Lb6PHEo",
      });
    else if (vki >= 30 && vki <= 39.9)
      setmessage({
        text: "İdeal kilonun çok üstünde (obez)",
        video: "W09ZsXCtokk",
      });
    else if (vki >= 49)
      setmessage({
        text: "İdeal kilonun çok üstünde (morbid obez)",
        video: "Z2ho_gA3wDA",
      });
    else
      setmessage({
        text: "Bir Cisim Yaklaşıyor",
        video: "BkTSo5iGyQs",
      });
  };
  return (
    <div className="App">
      <div className="center">
        <h1>VKI</h1>  
        <span>Vücüt Kitle Indeksi Hesaplayıcı</span> 
        <br/>
        {vki > 0 ? (
          <>
            <h3>{`Vücüt Kitle endeksin ${vki.toFixed(2)} - ${message.text}`}</h3>
            <br/>
            <iframe
              width="480"
              height="260"
              src={`https://www.youtube.com/embed/${message.video}?autoplay=1`}
              title={message.text}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen={false}
            ></iframe>
          </>
        ) : null}
        <div className="col-3">
          <InputDecimal
            type="text"
            placeholder="Boyunuzu Giriniz."
            title="Boy"
            value={boy}
            onChange={(e) => setBoy(e.target.value)}
          />
        </div>
        <div className="col-3">
          <InputDecimal
            type="text"
            placeholder="Kilonuzu Giriniz."
            title="Kilo"
            value={kilo}
            onChange={(e) => setKilo(e.target.value)}
          />
        </div>
        <button onClick={vucutKitleEndeksiHesapla}>Hesapla</button>
      </div>
    </div>
  );
}

export default App;
