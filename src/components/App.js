import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import "./App.scss";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
      {/*<div>
          <span className="ico_chk"></span>
      </div>*/}
  </div>
)


export default App;
