import React, { Component, useEffect } from "react";
import Galeri from "../pages/Galeri";
import Beranda from "../pages/Beranda";
import AgendaMateri from "../pages/AgendaMateri";
import { Switch, Route, useHistory, useParams } from "react-router-dom";
import gaTracker from './gaTracker'
import error from '../pages/404'
import Agenda from '../pages/Agenda'
import Materi from "../components/Agenda/AgendaDay"
// import {Switch, Route} from "./RelativeRoute"
import tawkTo from "tawkto-react";
import TawkTo from "../components/TawkTo"

export default function Routes() {
  // const tawkToPropertyId = "60f0f124d6e7610a49ab832e"
  // useEffect(() => {
  //   if (email) {
  //       tawkTo(tawkToPropertyId, email, fullName)
  //   }
  // }, [email, firstName, lastName]);
  const day = [
    { id: 1, day: 'one'},
    { id: 2, day: 'two'},
    { id: 3, day: 'three'},
    { id: 4, day: 'four'},
    { id: 5, day: 'five'},
    { id: 6, day: 'six'}
  ]

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://embed.tawk.to/60f433d2649e0a0a5cccc803/1fasuksoa";
    script.async = true;
    script.charset='UTF-8';
    script.setAttribute('crossorigin','*');
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  gaTracker();

  return (
    <Switch>
      <Route exact path="/2021" component={Beranda} />
      {/* <Route exact path="/2021/faq" component={FAQ} /> */}
      <Route path="/2021/galeri" component={Galeri} />
      {/* <Route relative path="/2021/agenda" component={Agenda} /> */}
      <Route exact path="/2021/agenda" component={AgendaMateri} />
      <Route path="/2021/agenda/agenda" component={Agenda} />
      <Route path="/2021/agenda/materi" component={Agenda} />
      <Route path="/2021/agenda/ketentuan" component={Agenda} />
      <Route exact path="/2021/agenda/materi/:id" render={({match})=>(
<Materi day={day.find(p => p.id === match.params.id)} />
      )}></Route>
      <Route  component={error} />
    </Switch>
  );
}

