import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import telu from "../assets/img/groups/telu.png"
import class1Logo from '../assets/img/groups/himaif.png';
import class2Logo from '../assets/img/groups/telu.png'; 
import ormawa1Logo from '../assets/img/channels/alfath.png'; 
import ormawa2Logo from '../assets/img/channels/alfath.png'; 
import option from "../assets/icon/option.png"
import send from "../assets/icon/send.png"
import avatar from "../assets/img/chats/avatar-1.png"

const user = {
  id: 2,
  role: 'MAHASISWA', // Example user role
  name: 'John Doe',
};

const groups = [
  { id: 1, logo: telu, group_name: 'Group 1' },
  { id: 2, logo: telu, group_name: 'Group 2' },
];

const classChannels = [
    { id: 1, logo: class1Logo, class_name: 'Class 1' },
    { id: 2, logo: class2Logo, class_name: 'Class 2' },
  ];

  const ormawaChannels = [
    { id: 1, logo: ormawa1Logo, channel_name: 'Ormawa 1' },
    { id: 2, logo: ormawa2Logo, channel_name: 'Ormawa 2' },
  ];

const userContacts = [
  { id: 1, name: 'Contact 1' },
  { id: 2, name: 'Contact 2' },
];

const sampleChats = [
  { message: 'Hello, this is a sample message.', time: '9.23 AM', senderId: 1, receiverId: 2 },
  { message: 'Hello, this is a sample message.', time: '9.23 AM', senderId: 2, receiverId: 1 },
  // Add more sample chat data here
];

function Chat() {
  const [selectedChat, setSelectedChat] = useState(null);

  const selectChat = (chatType, id) => {
    setSelectedChat({ chatType, id });
  };

  const renderChatMessages = () => {
    if (!selectedChat) {
      return <p className="text-center">No Message</p>;
    }

    return sampleChats.map((chat, index) => (
      <div key={index} className={`self-${chat.senderId === user.id ? 'end text-right' : 'start text-left'} mb-1`}>
        <div className={` self-${chat.senderId === user.id ? ' bg-[#C50000]' : ' bg-slate-300'} rounded-2xl rounded-tl-none bg-main-grey p-4 mb-1`}>
          <p>{chat.message}</p>
        </div>
        <p>{chat.time}</p>
      </div>
    ));
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <Sidebar user={user} />
      <div className="grid grid-cols-7 gap-5 w-full h-full">
        <div className="col-span-2 grid grid-rows-5 gap-3 w-full ">
          {/* Group Card */}
          {user.role === 'MAHASISWA' && (
            <div className="row-span-2 h-full">
              <div className="bg-white rounded-3xl p-2 shadow shadow-pink h-full overflow-y-auto">
                <div className="flex flex-col items-center justify-start h-full">
                  <div className="flex bg-[#C50000] items-center justify-between w-full mb-6 bg-gradient-to-b from-primary to-dark-red px-7 py-3 rounded-full">
                    <p className="text-white text-20">Groups</p>
                    <img src={option} alt="option" />
                  </div>
                  <div className="px-7 w-full">
                    {groups.map(group => (
                      <a
                        key={group.id}
                        onClick={() => selectChat('group', group.id)}
                        className="flex items-center justify-start w-full mb-7 cursor-pointer"
                      >
                        <img src={group.logo} alt={group.group_name} className="shadow rounded-full mr-2" />
                        <div className="py-7 rounded-3xl shadow text-center w-full">
                          <p className="font-bold text-20">{group.group_name}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Channel Card */}
          <div className="row-span-1 h-full">
            <div className="bg-white rounded-3xl p-2 shadow shadow-pink h-full">
              <div className="flex flex-col items-center justify-start h-full">
                <div className=" bg-[#C50000] flex items-center justify-between w-full mb-6 bg-gradient-to-b from-primary to-dark-red px-7 py-3 rounded-full">
                  <p className="text-white text-20">Channels</p>
                  <img src={option} alt="option" />
                </div>
                <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                  {classChannels.map(channel => (
                    <a
                      key={channel.id}
                      onClick={() => selectChat('class_channel', channel.id)}
                      className="channelItem flex flex-col items-center justify-start text-center cursor-pointer"
                    >
                      <div className="bg-gradient-to-b from-orange to-red rounded-full p-[3px] mb-2">
                        <img src={channel.logo} alt="" className="h-[70px] w-[70px]" />
                      </div>
                      <p className="font-medium text-16">{channel.class_name}</p>
                    </a>
                  ))}
                  {ormawaChannels.map(channel => (
                    <a
                      key={channel.id}
                      onClick={() => selectChat('ormawa_channel', channel.id)}
                      className="channelItem flex flex-col items-center justify-start text-center cursor-pointer"
                    >
                      <div className="bg-gradient-to-b from-orange to-red rounded-full p-[3px] mb-2">
                        <img src={channel.logo} alt="" className="h-[70px] w-[70px]" />
                      </div>
                      <p className="font-medium text-16">{channel.channel_name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Chat Card */}
          <div className={`h-full ${user.role === 'DOSEN' ? 'row-span-4' : 'row-span-2'}`}>
            <div className="bg-white rounded-3xl p-2 shadow shadow-pink h-full">
              <div className="flex flex-col items-center justify-start h-full">
                <div className=" bg-[#C50000] flex items-center justify-between w-full mb-6 bg-gradient-to-b from-primary to-dark-red px-7 py-3 rounded-full">
                  <p className="text-white text-20">Personal</p>
                  <img src={option} alt="option" />
                </div>
                <div className="px-7 w-full">
                  {userContacts.map(contact => (
                    <a
                      key={contact.id}
                      onClick={() => selectChat('personal', contact.id)}
                      className="flex items-center justify-start w-full mb-7 cursor-pointer"
                    >
                      <img src={telu} alt={contact.name} className="shadow rounded-full mr-2" />
                      <div className="py-7 rounded-3xl shadow text-center w-full">
                        <p className="font-bold text-20">{contact.name}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="col-span-5 h-full overflow-y-auto">
          {selectedChat ? (
            <div className="bg-white rounded-3xl px-10 pt-6 pb-10 shadow shadow-pink h-full">
              <div className="flex flex-col items-center justify-between h-full">
                {/* Card Header */}
                <div className="bg-[#C50000] flex items-center justify-between w-full mb-6 bg-gradient-to-b from-primary to-dark-red px-6 py-3 rounded-3xl">
                  <img src={avatar} alt="avatar-1" className="mr-6" />
                  <div className="flex flex-col items-start justify-center w-full">
                    <p className="font-bold text-white text-30">{selectedChat.id}</p>
                  </div>
                  <img src={option} alt="option" />
                </div>

                {/* Chat Section */}
                <div className="flex flex-col items-center justify-between w-full h-full overflow-y-auto">
                  <div className="flex w-full  flex-col items-end h-full justify-end py-10 gap-3">
                    {renderChatMessages()}
                  </div>
                  {/* Message Input Field */}
                  <form action="/chat" method="post" className="flex items-center justify-between w-full">
                    <input type="text" name="message" placeholder="Enter Your Message" className="message text-black p-7 bg-[#F2F2F2] w-full rounded-3xl mr-4 focus:outline-none" />
                    <button type="submit" id="sendMessage" className="flex items-center justify-center bg-[#F2F2F2] h-full p-4 px-6 rounded-2xl">
                      <img src={send} alt="send" className="hover:scale-110" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <p>Pilih Chat Terlebih dahulu</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
