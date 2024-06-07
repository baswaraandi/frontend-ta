import { Icon } from "leaflet";
import agyaIcon from "../../../assets/Kendaraan/Agya.png";
import avanzaIcon from "../../../assets/Kendaraan/Avanza.png";
import aylaIcon from "../../../assets/Kendaraan/Ayla.jpg";
import brioIcon from "../../../assets/Kendaraan/Brio.png";
import brvIcon from "../../../assets/Kendaraan/Brv Mobilio.jpg";
import calyaIcon from "../../../assets/Kendaraan/Calya.jpg";
import ertigaIcon from "../../../assets/Kendaraan/Ertiga_xl7.png";
import fortunerIcon from "../../../assets/Kendaraan/Fortuner.png";
import grandmaxIcon from "../../../assets/Kendaraan/Grandmax.jpg";
import innovaIcon from "../../../assets/Kendaraan/Innova.jpg";
import raizeIcon from "../../../assets/Kendaraan/Raize.jpg";
import rockyIcon from "../../../assets/Kendaraan/Rocky.png";
import sigraIcon from "../../../assets/Kendaraan/Sigra.png";
import stargazerIcon from "../../../assets/Kendaraan/Stargazer.png";
import teriosIcon from "../../../assets/Kendaraan/Terios.jpg";
import velozIcon from "../../../assets/Kendaraan/Veloz.png";
import xeniaIcon from "../../../assets/Kendaraan/Xenia.jpg";
import xpanderIcon from "../../../assets/Kendaraan/Xpander.jpg";
import yarissIcon from "../../../assets/Kendaraan/Yaris Cross.png";
import zenixIcon from "../../../assets/Kendaraan/Zenix.png";

const vehicleIcons = {
  AGYA: new Icon({
    iconUrl: agyaIcon,
    iconSize: [688 / 10, 408 / 10],
    popupAnchor: [-3, -76],
  }),
  AVANZA: new Icon({
    iconUrl: avanzaIcon,
    iconSize: [300 / 10, 300 / 10],
    popupAnchor: [-3, -76],
  }),
  AYLA: new Icon({
    iconUrl: aylaIcon,
    iconSize: [675 / 15, 440 / 15],
    popupAnchor: [-3, -76],
  }),
  BRIO: new Icon({
    iconUrl: brioIcon,
    iconSize: [400 / 10, 225 / 10],
    popupAnchor: [-3, -76],
  }),
  MOBILIO: new Icon({
    iconUrl: brvIcon,
    iconSize: [606 / 15, 402 / 15],
    popupAnchor: [-3, -76],
  }),
  CALYA: new Icon({
    iconUrl: calyaIcon,
    iconSize: [297 / 10, 173 / 10],
    popupAnchor: [-3, -76],
  }),
  ERTIGA: new Icon({
    iconUrl: ertigaIcon,
    iconSize: [695 / 20, 389 / 20],
    popupAnchor: [-3, -76],
  }),
  FORTUNER: new Icon({
    iconUrl: fortunerIcon,
    iconSize: [688 / 20, 408 / 20],
    popupAnchor: [-3, -76],
  }),
  GRANDMAX: new Icon({
    iconUrl: grandmaxIcon,
    iconSize: [290 / 10, 174 / 10],
    popupAnchor: [-3, -76],
  }),
  INNOVA: new Icon({
    iconUrl: innovaIcon,
    iconSize: [297 / 10, 174 / 10],
    popupAnchor: [-3, -76],
  }),
  RAIZE: new Icon({
    iconUrl: raizeIcon,
    iconSize: [800 / 20, 455 / 20],
    popupAnchor: [-3, -76],
  }),
  ROCKY: new Icon({
    iconUrl: rockyIcon,
    iconSize: [531 / 20, 319 / 20],
    popupAnchor: [-3, -76],
  }),
  SIGRA: new Icon({
    iconUrl: sigraIcon,
    iconSize: [750 / 30, 450 / 30],
    popupAnchor: [-3, -76],
  }),
  STARGAZER: new Icon({
    iconUrl: stargazerIcon,
    iconSize: [1000 / 30, 560 / 30],
    popupAnchor: [-3, -76],
  }),
  TERIOS: new Icon({
    iconUrl: teriosIcon,
    iconSize: [272 / 10, 185 / 10],
    popupAnchor: [-3, -76],
  }),
  VELOZ: new Icon({
    iconUrl: velozIcon,
    iconSize: [200 / 5, 135 / 5],
    popupAnchor: [-3, -76],
  }),
  XENIA: new Icon({
    iconUrl: xeniaIcon,
    iconSize: [269 / 10, 187 / 10],
    popupAnchor: [-3, -76],
  }),
  XPANDER: new Icon({
    iconUrl: xpanderIcon,
    iconSize: [900 / 30, 600 / 30],
    popupAnchor: [-3, -76],
  }),
  "YARIS CROSS": new Icon({
    iconUrl: yarissIcon,
    iconSize: [200 / 5, 135 / 5],
    popupAnchor: [-3, -76],
  }),
  ZENIX: new Icon({
    iconUrl: zenixIcon,
    iconSize: [200 / 5, 135 / 5],
    popupAnchor: [-3, -76],
  }),
};

export default vehicleIcons;
