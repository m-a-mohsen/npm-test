import chalk from 'chalk';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    console.clear()
    const rainbowTitle = chalkAnimation.glitch(
      '\n This is not a Glitch '
    );
    await sleep();
    await sleep();
    await sleep();
    rainbowTitle.stop();}
    
  
    
async function welcome2() {
    console.clear()
  const rainbowTitle = chalkAnimation.neon(
    'It\'s a Game ;)'
  );
  await sleep();
  await sleep();

    rainbowTitle.stop();

 
  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

  `);
}
// chalkAnimation.rainbow(
//     'Who Wants To Be A JavaScript Millionaire? \n'
//   );
// figlet(`Congrats,\n Mahmoud !\n $1,000,000`,  {
//     font: "Colossal",
//     horizontalLayout: "default",
//     verticalLayout: "default",
//     width: 100,
//     whitespaceBreak: false,
//   }, (err, data) => {
//     console.log(gradient.pastel.multiline(data) + '\n');

//     console.log(
//       chalk.green(
//         `Programming isn't about what you know; it's about making the command line look cool`
//       )
//     );
//     // process.exit(0);
//   });
await welcome()
await welcome2()

  