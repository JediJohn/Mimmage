# Welcome to Mimmage!

**URL to Draft of application:** (https://629670cc47df8635317bbcc9--mimmage.netlify.app)

## What is Mimmage?

Mimmage is a web application with the goal to help people memorize passages of text.  The strength of Mimmage over other methods of memorization is that mimmage can be used **hands free**.  Even if the only time a person has to memorize is during their morning commute to work, Mimmage is there to help.

## How it Works

The user takes a block of text and breaks it up into small, easily repeatable segments.  Mimmage will then read the segments for the user on loop for as many times as needed (default is 24 times is optimal for a lot of people).  The idea is that the person memorizes by the same method they would use to learn a new language.  Again, once the application is set, the user can focus on driving.  There is likely benefit to also following along, but sometimes that is not practical.

## How to Use Mimmage

1. Enter in desired block of text to memorize.
![Enter text](/readme_pics/enter_text.png)
2. Hover mouse over where you want to make a separation between segments and click to lock in the segment.
![Split segments](/readme_pics/split_segments.png)
3. Customize volume, playback speed, and number of repeats per segment and press the green Play button!
![Set desired settings](/readme_pics/play_settings.png)
4. Memorize as you listen to each segment repeat!
![Memorize text](/readme_pics/play_text.png)

## Coming Soon

1. Saving work.  The application is currently just a frontend but soon there will be a backend to save work to a database so the user doesn't have to split segments every refresh.  A JAM stack backend is in the works and should be out within the next few weeks.
2. Ability for the user to record themselves instead of using the browser's text-to-speech synthesizer.
3. Replace words with text.  This will be a more hands on feature, but adding visual cues could be quite helpful for visual learners.

## How to Run a Local Dev Server

1. Clone the repository locally.  
2. Make sure `npm` is installed and install dependencies with:
`npm install`
3. Run the dev server with:
`npm start`

The dev server should start on `localhost:3000` by default!