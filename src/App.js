import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

function App() {

  const steps = [
    
    {
      id: "AskName",
      message: "Please enter your name: ",
      trigger: "Name"
    },
    {
      id: "Name",
      user: true,
      trigger: "Greet"
    },
    {
      id: "Greet",
      message: "Hello, Welcome to our Website! {previousValue}",
      trigger: "Info"
    },

    {
      id: "Info",
      message: "What is your occupation?",
      trigger: "Issues"
    },
    {
      id: "Issues",
      options: [
        { value: "Student", label: "Student", trigger: "Student" },
        { value: "HR", label: "HR", trigger: "HR" },
      ]
    },
    {
      id: "Student",
      message: "What problem are you facing?",
      trigger: "Problem1"
    },
    {
      id: "Problem1",
      user: true,
      trigger: "Solution1"
    },
    {
      id: "Solution1",
      message: "Our technical team would be contacting you soon through email. Thank you for your patience :) ",
      end: true
    },
    {
      id: "HR",
      message: "What problem are you facing?",
      trigger: "Problem2"
    },
    {
      id: "Problem2",
      user: true,
      trigger: "Solution2"
    },
    {
      id: "Solution2",
      message: "Our technical team would be contacting you soon through email. Thank you for your patience :) ",
      end: true
    }
  ];
  

  return (
    <Segment style={{ float: 'right'}}>
      <ChatBot steps={steps} />
    </Segment>
  );
}

export default App;