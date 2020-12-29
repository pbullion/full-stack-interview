import React from "react";

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
  state = {
    selectPage: page => {
      this.setState({ page });
    }
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
