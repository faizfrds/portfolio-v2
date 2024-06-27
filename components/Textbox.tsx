import React from 'react'
import Grid from './Grid'

export default function Textbox() {
  return (
    <div id="textblock">
    <div id="textblock-container" className='text-center'>
        <h1 className="text-yellow-300 text-4xl font-semibold">Projects</h1>
        {/* <p id="textblock-content">
        The year is 1989.<br/><br/>
        You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe.<br/><br/>
        An especially hot, dry summer has everyone on edge. Your supervisor, a woman named Delilah, is available to youat all times over a small, handheld radio—and is your only contact with the world you've left behind.<br/><br/>
        But when something strange draws you out of your lookout tower and into the world below, you'll explore a wild and unknown environment, facing questions and making interpersonal choices that can build or destroy the only meaningful relationship you have.
        </p> */}
        <Grid />
    </div>
    
    <footer id='textblock-footer'>Demo Created With 🧡 By&nbsp;<a id="textblock-devsense" href="https://youtube.com/c/DevSense19">DevSense</a></footer>
</div>
  )
}
