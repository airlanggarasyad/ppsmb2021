import React, { useEffect } from "react";
import Galeri from "../pages/Galeri";
import Beranda from "../pages/Beranda";
import KembaraLoka from "../components/Vmap/KembaraLoka";
import AgendaMateri from "../pages/Agenda/MateriKetentuan";
import { Switch, Route, useLocation } from "react-router-dom";
import gaTracker from "./gaTracker";
import error from "../pages/404";
import FAQ from "../pages/FAQ";
import Materi from "../pages/Agenda/Materi";
import Universitas from "../pages/Agenda/Universitas";
import Fakultas from "../pages/Agenda/Fakultas";
import Ketentuan from "../pages/Agenda/KetentuanPenugasan";
import Artikel from "../pages/Artikel";
import ArtikelPage from "../components/Artikel/ArtikelPage"
//Modul
import Modul1 from "../pages/Agenda/Modul/Modul1";
import Modul2 from "../pages/Agenda/Modul/Modul2";
import Modul3 from "../pages/Agenda/Modul/Modul3";
import Modul4 from "../pages/Agenda/Modul/Modul4";
import Modul5 from "../pages/Agenda/Modul/Modul5";
// import {Switch, Route} from "./RelativeRoute"

export default function Routes() {
  // const tawkToPropertyId = "60f0f124d6e7610a49ab832e"
  // useEffect(() => {
  //   if (email) {
  //       tawkTo(tawkToPropertyId, email, fullName)
  //   }
  // }, [email, firstName, lastName]);
  const day = [
    { id: 1, day: "one" },
    { id: 2, day: "two" },
    { id: 3, day: "three" },
    { id: 4, day: "four" },
    { id: 5, day: "five" },
    { id: 6, day: "six" },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/2021/kembaraloka") {
      const script = document.createElement("script");

      script.src = "https://embed.tawk.to/60f433d2649e0a0a5cccc803/1fasuksoa";
      script.async = true;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [location.pathname]);

  gaTracker();

  return (
    <Switch>
      <Route exact path="/2021" component={Beranda} />
      <Route exact path="/2021/faq" component={FAQ} />
      <Route path="/2021/galeri" component={Galeri} />
      <Route path="/2021/kembaraloka" component={KembaraLoka} />
      {/* <Route relative path="/2021/agenda" component={Agenda} /> */}
      {/* Agenda Section */}
      <Route exact path="/2021/materi-ketentuan" component={AgendaMateri} />
      <Route exact path="/2021/materi-ketentuan/materi" component={Materi} />

      <Route path="/2021/materi-ketentuan/ketentuan" component={Ketentuan} />
      {/* Agenda-materi */}
      <Route
        exact
        path="/2021/materi-ketentuan/materi/ppsmb-universitas"
        component={Universitas}
      />
      <Route
        path="/2021/materi-ketentuan/materi/ppsmb-fakultas"
        component={Fakultas}
      />

      <Route
        path="/2021/materi-ketentuan/materi/ppsmb-universitas/modul-1"
        component={Modul1}
      />
      <Route
        path="/2021/materi-ketentuan/materi/ppsmb-universitas/modul-2"
        component={Modul2}
      />
      <Route
        path="/2021/materi-ketentuan/materi/ppsmb-universitas/modul-3"
        component={Modul3}
      />
      <Route
        path="/2021/materi-ketentuan/materi/ppsmb-universitas/modul-4"
        component={Modul4}
      />
      <Route
        path="/2021/materi-ketentuan/materi/ppsmb-universitas/modul-5"
        component={Modul5}
      />

      <Route exact path="/2021/redaksi-palapa" component={Artikel} />

      <Route exact path="/2021/redaksi-palapa/kembaraloka" render={(props) => <ArtikelPage {...props} day="one"/>} />
      <Route exact path="/2021/redaksi-palapa/rubik-karsa" render={(props) => <ArtikelPage {...props} day="two"/>} />
      <Route exact path="/2021/redaksi-palapa/rinai-warna" render={(props) => <ArtikelPage {...props} day="three"/>} />
      <Route exact path="/2021/redaksi-palapa/lantunan-adiwarna" render={(props) => <ArtikelPage {...props} day="four"/>} />
      <Route component={error} />
    </Switch>
  );
}
