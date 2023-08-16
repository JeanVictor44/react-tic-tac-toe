import "./styles.scss";
import logo from "../../assets/logo.svg";
import xBlack from "../../assets/icons/icon-x-black.svg";
import oGray from "../../assets/icons/icon-o-grey.svg";
import oBlack from "../../assets/icons/icon-o-black.svg";
import xGray from "../../assets/icons/icon-x-grey.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Marks } from "../../enums/marks";
import { MyButton } from "../../components/MyButton";

export const HomePage = () => {
  const { t } = useTranslation();
  const [markPlayerOne, setMarkPlayerOne] = useState<Marks>(Marks.x);

  function toggleToX() {
    setMarkPlayerOne(Marks.x);
  }

  function toggleToO() {
    setMarkPlayerOne(Marks.o);
  }

  return (
    <div className="home-container">
      <div className="logo-container">
        <img src={logo} alt="Logo com X e O"/>
      </div>

      <div className="choose-mark-box">
        <p className="choose-mark-box__title">{t("Pick player mark")}</p>
        <div className={`choose-mark-box__buttons-box ${markPlayerOne}`}>
          <button onClick={toggleToX} id="button-x" className={`${markPlayerOne === Marks.x && 'mark_choosed'}`}>
            <img src={markPlayerOne === Marks.x ? xBlack : xGray} />
          </button>
          <button onClick={toggleToO} id="button-o" className={`${markPlayerOne === Marks.o && 'mark_choosed'}`}>
            <img src={markPlayerOne === Marks.o ? oBlack : oGray} />
          </button>
        </div>
        <p className="choose-mark-box__reminder">{t("X first")}</p>
      </div>

      <div className="actions-buttons-container" >
        <MyButton id="button-vs-cpu" label={t("New game cpu")}/>
        <MyButton id="button-vs-player" label={t("New game player")}/>
      </div>
    </div>
  );
};
