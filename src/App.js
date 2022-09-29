import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss';
import FormTask from './components/form-task';
import ConfigForm from './components/form-config';
import Header from './components/header';
import History from './components/history';
import { ConfigProvider } from './context/configContext';
import { TaskListProvider } from './context/tasklistContext';
import Pomodoro from './pomodoro';
import Home from './components/home';

function App() {
  return (
    <main>
      <TaskListProvider>
        <ConfigProvider>
          <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/pomodoro' element={<Pomodoro />}/>
            <Route path='history' element={<History />}/>
            <Route path='add' element={<FormTask />}/>
            <Route path='settings' element={<ConfigForm />} />
          </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </TaskListProvider>
    </main>
  );
}

export default App;
