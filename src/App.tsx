import React from "react";
import { Calendar } from "./lib/components/Calendar";

const App: React.FC = () => {
    const [language, setLanguage] = React.useState("pt-BR" as "pt-BR" | "en-US");

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
}}>
  <div style={{
    display: "flex",
    flexDirection: "column",
  }}>
      <select style={{
        borderRadius: "5px",
        border: "none",
        padding: "5px",
        fontSize: "16px",
      }} onChange={
        (e) => {
            setLanguage(e.target.value as "pt-BR" | "en-US");
            }
        }>
        <option value="pt-BR">Português</option>
        <option value="en-US">English</option>
      </select>
      <br />
      <br />
      <Calendar
        language={language}
        padding="15px"
        bgColor="#001e3c"
        borderRadius="20px"
        colorArrows="#FFF"
        colorTextHeader="#FFF"
        colorTextdaysOfTheWeek="#FFF"
        bgMonth="#001e3c"
        colorDays="#FFF"
        wDay="60px"
        hDay="50px"
        sizeArrow="25"
        colorSelectDay="#4d4b4b"
        fontWeightMonthAndYear="bold"
      />

  </div>
    </div>
  );
};

export default App;