import React from 'react';
import { TopicMessage } from 'generated-sources';
import CustomParamButton from 'components/Topics/shared/Form/CustomParams/CustomParamButton';
import MessageItem from './MessageItem';

export interface MessagesTableProp {
  messages: TopicMessage[];
  onNext(event: React.MouseEvent<HTMLButtonElement>): void;
}

const MessagesTable: React.FC<MessagesTableProp> = ({ messages, onNext }) => {
  if (!messages.length) {
    return <div>No messages at selected topic</div>;
  }

  return (
    <>
      <div className="table-container">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Offset</th>
              <th>Partition</th>
              <th>Content</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {messages.map(
              ({ partition, offset, timestamp, content }: TopicMessage) => (
                <MessageItem
                  key={`message-${timestamp.getTime()}-${offset}`}
                  partition={partition}
                  offset={offset}
                  timestamp={timestamp}
                  content={content}
                />
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="columns">
        <div className="column is-full">
          <CustomParamButton
            className="is-link is-pulled-right"
            type="fa-chevron-right"
            onClick={onNext}
            btnText="Next"
          />
        </div>
      </div>
    </>
  );
};

export default MessagesTable;
