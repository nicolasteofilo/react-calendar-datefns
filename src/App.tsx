import React from "react";
import { Calendar } from "./lib/components/Calendar";

const App: React.FC = () => {
  const [language, setLanguage] = React.useState("pt-BR" as "pt-BR" | "en-US");
  const [isContinuos, setIsContinuos] = React.useState(true);
  console.log(isContinuos);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <select
          style={{
            borderRadius: "5px",
            border: "none",
            padding: "5px",
            fontSize: "16px",
          }}
          onChange={(e) => {
            setLanguage(e.target.value as "pt-BR" | "en-US");
          }}
        >
          <option value="pt-BR">Português</option>
          <option value="en-US">English</option>
        </select>
        <br />
        <select
          style={{
            borderRadius: "5px",
            border: "none",
            padding: "5px",
            fontSize: "16px",
          }}
          onChange={(e) => {
            setIsContinuos(e.target.value === "true");
          }}
        >
          <option value="false">
            {language === "pt-BR" ? "Seleção de datas" : "Date selection"}
          </option>
          <option value="true">
            {language === "pt-BR" ? "Seleção Continua" : "Selection continues"}
          </option>
        </select>
        <br />
        <br />
        <Calendar
          language={language}
          padding="20px"
          bgColor="#001e3c"
          bgMonth="#001e3c"
          borderRadius="20px"
          colorArrows="#FFF"
          colorTextHeader="#FFF"
          colorTextDaysOfTheWeek="#FFF"
          colorDays="#FFF"
          colorSelectDay="#FFF"
          wDay="60px"
          hDay="50px"
          sizeArrow="25"
          fontWeightMonthAndYear="bold"
          circleSelectDayColor="#007fff"
          isContinuous={isContinuos}
          initialDate={new Date("2022-03-15")}
          endDate={new Date("2022-03-28")}
        />
      </div>
    </div>
  );
};

export default App;
