import React, { Component } from "react";
import PhotoProvider from "./Components/Provider";
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Header from "./Components/Header";
import Item from "./Components/Item";
import Search from "./Components/Search";

class App extends Component {
  state={
    searchText:''
  }
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    this.setState({
      searchText:searchInput
    })
    history.push(url);
  };
  render() {
    return (
      <PhotoProvider>
        <Router>
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route path="/mountain"
              render={() => <Item searchTerm="mountain"/>}/>
              <Route path="/beach" render={() => <Item searchTerm="beach" />} />
              <Route path="/bird" render={() => <Item searchTerm="bird" />} />
              <Route path="/food" render={() => <Item searchTerm="food" />} />
              <Route path="/search"
              render={(props) =>
              <Search searchTerm={this.state.searchText}/>}/>
            </Switch>
          </div>
          </Router>
      </PhotoProvider>
    );
  }
}

export default App;

