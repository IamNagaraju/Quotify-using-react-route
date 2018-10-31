import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RandomQuote from "./RandomQuote"
import RandomLocal from "./RandomLocal"
import AddQuote from "./AddQuote"
import ListAllQuotes from "./ListAllQuotes"

function BasicExample() {
  return (
    <Router>
      <div className="container">
        <div className="mb-4">
          <h2 className="text-danger text-center">Quotify</h2>
        </div>
        <nav className="alert alert-blue" role="alert">
          <Link to="/" className="text-dark">Random Quote(Api)</Link><span> | </span>
          <Link to="/RandomLocal" className="text-dark">Random Quote(Local)</Link><span> | </span>
          <Link to="/AddQuote" className="text-dark">Add Quote</Link><span> | </span>
          <Link to="/ListAllQuotes" className="text-dark">List all Quotes</Link>
        </nav>
        <hr />

        <Route path="/" exact component={RandomQuote} />
        <Route path="/RandomLocal" component={RandomLocal} />
        <Route path="/AddQuote" component={AddQuote} />
        <Route path="/ListAllQuotes" component={ListAllQuotes} />
      </div>
    </Router>
  );
}

export default BasicExample;