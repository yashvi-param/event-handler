import React from 'react';
import TopNavbar from './components/TopNavbar';
import EventsPage from "./EventsPage";
import './App.css';

function App() {
  return (
    <>
      <TopNavbar />

      <header className="hero">
        <div className="container hero-content">
          <h1 className="display-5 fw-bold">Event Handlers</h1>
          <p className="lead text-muted">Learn and test event handling in React with Bootstrap.</p>
        </div>
      </header>

      <main className="container">
        <EventsPage />
      </main>
    </>
  );
}

export default App;