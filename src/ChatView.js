import creds from './test_creds/getstream.json'
import React, { useState, useEffect } from "react";
import {
  Chat,
  Channel,
  Thread,
  Window,
  ChannelList,
  ChannelListTeam,
  MessageList,
  MessageTeam,
  MessageInput,
  withChannelContext
} from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";

const chatClient = new StreamChat(creds.REACT_APP_GS_KEY);

function ChatView() {
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = 'Old Macdonald';
  const uid = creds.REACT_APP_GS_UID;
  const displayName = 'Old Macdonald';
  const currToken = creds.REACT_APP_GS_TOKEN;
  const channelType = 'team';
  const channelId = 'general-channel';

  useEffect(() => {
    async function getToken() {
      

      chatClient.setUser(
        {
          id: uid,
          name: displayName
        },
        currToken
      );

      const channel = chatClient.channel("team", "general-channel");

      try {
        await channel.watch();
      } catch (err) {
        console.log(err);
        return;
      }

      setChannel(channel);
      setLoading(false);
    }

    getToken();
  }, [setLoading]);

  if (loading || !user) {
    return <div>Loading chat...</div>;
  }

  if (channel) {
    const CustomChannelHeader = withChannelContext(
      class CustomChannelHeader extends React.PureComponent {
        render() {
          return (
            <div className="str-chat__header-livestream">
              <div className="str-chat__header-livestream-left">
                <p className="str-chat__header-livestream-left--title">
                  {this.props.channel.data.name}
                </p>
                <p className="str-chat__header-livestream-left--members">
                  {Object.keys(this.props.members).length} members,{" "}
                  {this.props.watcher_count} online
                </p>
              </div>
              <div className="str-chat__header-livestream-right">
                <div className="str-chat__header-livestream-right-button-wrapper">
                  <button
                    className="logout"
                    onClick={() =>
                      // logout({
                      //   returnTo: "http://localhost:3000/"
                      // })
                      console.log('ha')
                    }
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          );
        }
      }
    );

    return (
      <Chat client={chatClient} theme="team light">
        <ChannelList
          filters={}
          options={{
            subscribe: true,
            state: true
          }}
          List={ChannelListTeam}
        />
        <Channel channel={channel}>
          <Window>
            <CustomChannelHeader />
            <MessageList Message={MessageTeam} />
            <MessageInput focus />
          </Window>
          <Thread Message={MessageTeam} />
        </Channel>
      </Chat>
    );
  }

  return null;
}

export default ChatView;
