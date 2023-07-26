import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

class Chat extends Component {
  state = {
    opened: false
  };

  toggleFloating = ({ opened }) => {
    this.setState({ opened });
  };

  render() {
    const { opened } = this.state;

    const steps = [
      {
        id: 'Greet',
        message: 'Hello, Welcome to EVENTBucket',
        trigger: 'Done'
      },
      {
        id: 'Done',
        message: 'Please enter your name!',
        trigger: 'waiting1'
      },
      {
        id: 'waiting1',
        user: true,
        trigger: 'Name'
      },
      {
        id: 'Name',
        message: 'Hi {previousValue}, Please select your issue',
        trigger: 'issues'
      },
      {
        id: 'issues',
        options: [
          {
            value: 'Event Registration Issue',
            label: 'Event Registration Issue',
            trigger: 'Event Registration Issue'
          },
          {
            value: 'Event information issue',
            label: 'Event information issue',
            trigger: 'Event information issue'
          }
        ]
      },
      {
        id: 'Event Registration Issue',
        message:
          'Thanks for letting your Event Registration issue, Our team will resolve your issue ASAP',
        end: true
      },
      {
        id: 'Event information issue',
        message:
          'Thanks for letting your Event information Issueissue, Our team will resolve your issue ASAP',
        end: true
      },

    ];

    return (
      <Segment floated="right">
        <ChatBot
          steps={steps}
          floating
          opened={opened}
          toggleFloating={this.toggleFloating}
        />
      </Segment>
    );
  }
}

export default Chat;
