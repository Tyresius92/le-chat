import React from 'react';
import { renderThemed } from '../../testUtils/renderWrapper';
import Message from '../Message';

const message = {
  senderIcon: null,
  senderName: 'Some Guy',
  timeSent: 'Now',
  messageText: 'unit test',
};
describe('Message', () => {
  it('contains the message content', () => {
    const { getByText } = renderThemed(<Message {...message} />);

    expect(getByText(message.senderName)).toBeInTheDocument();
    expect(getByText(message.timeSent)).toBeInTheDocument();
    expect(getByText(message.messageText)).toBeInTheDocument();
  });
});
