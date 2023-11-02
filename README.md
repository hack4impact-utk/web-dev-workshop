# Web Dev Workshop Lesson 4
Welcome to the 4th lesson of the Hack4Impact Web Development Workshop!    
In this lesson, we will go over the basics of React hooks and do some API calls.    

## How to run this application
If you want to follow along with us in the demo in the lesson, here are the steps to build and run this:
1. In your terminal, go to the directory (folder) of this project. 
    - You should now be in the `web-dev-workshop` directory in your terminal
1. Once in the repository directory in your terminal, `cd` into the directory `week4`
    -. You should now be in the folder `web-dev-workshop/week4`
1. Run the command `npm install` to install all the packages this project needs
1. Run the command `npm run dev`
    - Once this command runs, you should see a URL that you can load in any web browser
    - Go to this url, mine is `http://127.0.0.1:5173/`
    - You should now see the text "Hello React" on your screen

## What is a hook?
Remember what we did last week with useState()? It allowed us to use 1 function, and when we used that function to change its corresponding variable, it updated it everywhere on the page. This is something that is not trivial to do on your own, but React gave us the *hook* `useState` that made this super easy for us.      
Essentially, I like to think of hooks as special things that React gives you to make complicated things much easier. There are many hooks, but the main other one we are going to go over today is `useEffect`.     
`useEffect` allows us to write a function that only happens once: when the page first loads. There are many things that this is useful for like making API calls, but we will get to that later. 

## What is an API?
API stands for *application programming interface*. All that fancy name means is that it is how applications talk to each other.  
Imagine you are trying to make a GPS application. One of the most important things you are going to need is a map. You could go through all of the work to try and get all this data and create your own map, **or** you can use someone else's map. For example, Google Maps. If you want to use google maps in your project, it is actually possible to get a working map that you can scroll, zoom, and do everything you can on google street view, but **in your own application!**    
The way you do this is through an *API*. You ask google for some information about this map, and they will give it to you. 

