import { Link } from 'react-router-dom';
import UserOne from '../../images/user/user-01.png';
import UserTwo from '../../images/user/user-02.png';
import UserThree from '../../images/user/user-03.png';
import UserFour from '../../images/user/user-04.png';

const chatData = [
  {
    avatar: UserOne,
    name: 'Dr. Hakeem Shaikh',
    text: 'How are you?',
    time: 12,
    textCount: 3,
    color: '#10B981',
  },
  {
    avatar: UserTwo,
    name: 'Dr. Rashmi Sharma',
    text: 'Appoinment scheduled!',
    time: 30,
    textCount: 0,
    color: '#DC3545',
  },
  {
    avatar: UserFour,
    name: 'Local Guide',
    text: "Availability",
    time: 18,
    textCount: 0,
    color: '#10B981',
  },
  {
    avatar: UserThree,
    name: 'Travel Agent',
    text: 'Here are your trip details',
    time: 32,
    textCount: 5,
    color: '#FFBA00',
  }
];

const ChatCard = () => {
  return (
    <div className="h-[410px] col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-8 text-xl font-rale text-black">
        Chats
      </h4>

      <div>
        {chatData.map((chat, key) => (
          <Link
            to="/"
            className="flex items-center gap-5 py-3 px-8 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <img src={chat.avatar} alt="User" />
              <span
                className="absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white"
                style={{backgroundColor: chat.color}}
              ></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-lg text-black">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-sm text-black">
                    {chat.text}
                  </span>
                  <span className="text-xs"> . {chat.time} min</span>
                </p>
              </div>
              {chat.textCount !== 0 && (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                  <span className="text-xs font-medium text-white">
                    {' '}
                    {chat.textCount}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
