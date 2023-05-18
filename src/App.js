
import './App.css';

import Hero from './components/Hero';

import {BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import JobData1 from './components/JobData1';
import JobData2 from './components/JobData2';
import JobData3 from './components/JobData3';
import JobData4 from './components/JobData4';
import JobData5 from './components/JobData5';
import JobData6 from './components/JobData6';
import JobData7 from './components/JobData7';
import JobData8 from './components/JobData8';
import JobData9 from './components/JobData9';
import ScrollToTop from './components/scroll-to-top';


function App() {
  return (
    <Router>
      <ScrollToTop>
      <Routes>
      
          <Route exact path='/' element={
          <Hero/>}>
          
          
          </Route>
          <Route path='/jobdata1' element={
          <JobData1/>}>
          </Route>
          <Route path='/jobdata2' element={
          <JobData2/>}>
          </Route>
          <Route path='/jobdata3' element={
          <JobData3/>}>
          </Route>
          <Route path='/jobdata4' element={
          <JobData4/>}>
          </Route>
          <Route path='/jobdata5' element={
          <JobData5/>}>
          </Route>
          <Route path='/jobdata6' element={
          <JobData6/>}>
          </Route>
          <Route path='/jobdata7' element={
          <JobData7/>}>
          </Route>
          <Route path='/jobdata8' element={
          <JobData8/>}>
          </Route>
          <Route path='/jobdata9' element={
          <JobData9/>}>
          </Route>
          
      </Routes>
          </ScrollToTop>
    </Router>
  );
          
}


export default App;

