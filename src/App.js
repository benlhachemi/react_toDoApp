//imports
import './App.css';
import Header from './Header.js';
import AddTask from './AddTask.js';
import Tasks from './Tasks.js';
import {useState} from 'react';

function App() {
  //variables
  const [tasksList, setTasksList] = useState([
    {
      'id' : '1',
      'title' : 'Learn ReactJS',
      'description' : 'watch videos on Youtube about reactJS framework/library',
      'end_time' : '12:07 AM',
      'background' : 'https://i.imgur.com/x8Bni9k.jpg'
    },
    {
      'id' : '2',
      'title' : 'my second task',
      'description' : 'this is a description of my second task',
      'end_time' : '05:32 PM',
      'background' : 'https://i.imgur.com/GB2jxNx.jpg'
    }
  ]);

  //vue
  return (
    <div className="App">
      <Header />
      <AddTask />
      <Tasks tasks = {tasksList}/>
    </div>
  );
}

export default App;
