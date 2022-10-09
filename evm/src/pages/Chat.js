import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const 
steps = [
	{
		id: '0',
		message: 'Hey Geek!',
		trigger: '1',
	}, 
	{
		id: '1',
		message: 'Please write your name',
		trigger: '2'
	}, 
	{
		id: '2',
		user: true,
		trigger: '3',
	}, 
	{
		id: '3',
		message: " hi {previousValue}, how can I help you?",
		trigger: 4
	}, 
	{
		id: '4',
		options: [
		],
		end: true
	}
];

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "../img/robo.jpg",
	floating: true,
};

function Chat() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					headerTitle="GeekBot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default Chat;