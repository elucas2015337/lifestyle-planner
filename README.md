# Lifestyle Planner
Proyect created for the DDR Innova coding challenge

Gather user info and returns professional, workout, hobby and nutrition suggestions. User can provide feedback for tunning the response.


![Main form](https://cdn.discordapp.com/attachments/855212089295241236/1375487743874039838/image.png?ex=6831de49&is=68308cc9&hm=f62b22f765378ddec70b3821cd09a8367c2bda1c25b501623890c1e24dc64da7&)
![Main form](https://cdn.discordapp.com/attachments/855212089295241236/1375487808621248592/image.png?ex=6831de58&is=68308cd8&hm=685b7f5f34fb59ac83e730290cad5aef2abafd5656c5220790d4045ed55915f4&)
## Dependencies
- Node 20 +
- Ionic 7
- OpenRouter DeepSeek R1 api key: https://openrouter.ai/deepseek/deepseek-r1:free

## Setup instructions
1. Install Ionic CLI
   
```
npm install -g @ionic/cli
```
2. Clone the repository

```
git clone https://github.com/elucas2015337/lifestyle-planner.git
```
  "v0" branch does not contain the improved UI, switch to "ui_rebuild" branch to see the final version


3. Add a .env file in the at the same directory level as vite.config, this file must contain your OpenRouter deepseek key

```
VITE_OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

4. Checkout to the folder directory and install dependencies.
```
cd lifestyle-planner
npm i
```
5. Start the project.

```
npm run dev
```

## Here are the main AI chats used for building this project. 

1. Project setup and wiring main AI components: https://chatgpt.com/share/683050e2-fb5c-800f-b61f-1aed0a4ed987
2. UI improvements: https://chatgpt.com/share/683090ef-d7f4-800f-8e75-0d7a91a1145d
