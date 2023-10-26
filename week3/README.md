# Web Dev Workshop Lesson 3: React
Welcome to the 3rd lesson of the Hack4Impact Web Development Workshop!  
In this lesson we will be going over the basics of the React framework and how to use it. 

## Running this app
I have created a starter app template called ```react-example```. This folder contains a basic React application that uses TypeScript.  
Here are the steps to get the app up and running:
1. Have the repository cloned, and navigate to the ```week3/react-example``` folder in your terminal.
1. Once you are in that folder in your terminal, run the command ```npm install```. This will install any *dependencies* that **node.js** might need in order to run the application properly. We will cover dependencies later in this lesson
1. After running ```npm install``` and everything is installed properly, run another command ```npm run dev```.
1. Once you have run ```npm run dev```, a URL should pop up in the terminal. If you navigate to that URL, you should be able to pull up your application in whatever web browser you want!

You should now see a blank website with the text "Hello React" showing!

## How did I create this app?
You might have noticed that there are a **lot** of folders and files in this ```react-example``` folder, and yes most of them are necessary to run the application properly. Because these applications are complex, everyone uses tools in order to **generate** these base applications for us. 

If you wanted to create your own React app with TypeScript from scratch like I did, you can follow these steps:
1. **Make sure you have node.js installed**
1. Navigate to whatever folder you want to create your application in. This can be any folder you want
1. Run the command ```npm create vite@latest```. This command runs the program that creates our application for us.
  - ```vite``` is a program that is commonly used to create many types of web applications
  - We will be using it here to create a **React** application
1. After running ```npm create vite@latest```, you should see something that says ```? Project name: >> vite-project```. If you start typing, you will be able to name your project whatever you want! Hit enter once you have decided your name.
  - For the ```react-example``` project I already created in this repository, this is where I put "react-example" to name it.
  - NOTE: you an actually type ```.``` as the name of your project, and this will create the application in the folder that you are currently in rather than creating a new folder. 
1. After putting the name of your project and hitting enter, you should now see a dropdown of options with things like ```Vanilla```, ```Vue```, ```React```, ```Preact```, etc... Since we are going to be making a ```React``` application, we are going to use that option. 
  - To select that option, use the arrow keys to move up and down the menu.
  - When the pointer is at the ```React``` option, hit enter to select it
1. After selecting ```React``` from the menu, you should now see another menu with options like ```TypeScript```, ```TypeScript + SWC```, etc... We are making a TypeScript project, so we are going to select that option.
  - Just like the last menu, you can use the arrow keys to move up and down.
  - For me, TypeScript is the first option, but navigate to where it is for you and hit enter to select it.
  - I did not choose ```TypeScript + SWC```. If you are curious, SWC is a compiler that is very quick and uses the Rust programming language. If you are interested in that kind of stuff check it out [here](https://swc.rs/)
1. After hitting enter on the ```TypeScript``` option, the application should now be created! ```Vite``` should have listed some commands for you to run the application, but here they are anyway:
  - Navigate to the folder that ```Vite``` created for you. To do this, run the command ```cd [name of project]```. Just replace the text in the square brackets with the name of the project you chose, and do not include the brackets in the command. If you chose ```.``` as the name of the project, the application should be created in the folder you ran the ```npm create vite@latest``` command, so you should already be in the right place.
  - Once inside the folder of the new applciation, run the command ```npm install```. This installs any *dependencies* that the project needs to run properly. We will cover what dependencies are later in this lesson.
  - After running the install command, run the command ```npm run dev```. This will compile and run the application! ```Vite``` should have output a URL to follow, and if you navigate to this URL in any web browswer, you will be able to see your new React application!

You should now have your own React + TypeScript application!

## What is React?
To put it simply, React is a JavaScript framework that is used to make writing complicated web applications much, much easier than using normal HTML and JavaScript.  
NOTE: Though I called it a JavaScript framework, it can (and should) be used with TypeScript as well. 
The way I like to think about React is that it **combines** HTML and TypeScript into one thing. This new thing is called ```jsx``` for JavaScript and ```tsx``` for TypeScript. We will go over what ```tsx``` looks like soon.   

Back in the elden days, there were no frameworks to help with creating web applications. This meant that ALL applications on the internet were created using raw HTML and JavaScript (there was no TypeScript either). This made creating large and complicated applications very difficult, and lead to a number of problems.  
If you think Internet Explorer was annoying for you, it was 100x worse for engineers trying to make their applications compatible and consistent across browsers.   
Fast-forward, and Angular.js and React.js are created, and these frameworks make it much easier to write large applications as well as keep them consistent across browsers.

## What are dependencies?
If you noticed when running the application, we have to run the command ```npm install```. This installed the *dependencies* that we needed in order to run the application.    
In the world of web development, there are **thousands** of other engineers who are better than all of us that have written some very useful and crucial code for us, and we get to use their stuff.  
When we use someone else's code in our project, this is what is called a *dependency*. We are **dependent** on their code for our application to run properly.    
Some of you might be thinking "this is awesome! Other people wrote all the annoying code so now I get to write all of the fun stuff!" and you are exactly right.    
Other of you might be thinking "is this not incredibly brittle and complicated? Would our application not break if someone made a weird change to one of our dependencies?"  and you are exactly right!   
This is the ultimate tradeoff of modern web development. You get to write complicated applications **very** quickly, but you have to keep most of your dependencies up to date and make sure that none of them break. This is a very opinionated manor that some love and some hate. You will find where you stand soon enough.   

To exemplify this problem in a pretty funny way you can read an article [here](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code) that gives a story of how **almost all** of React was broken for a day simply because ONE dependency became out-of-date. This is famously known as the "left-pad incident". The dependency was only a few lines of code, and one update caused it to break. However, **thousands** of dependencies that **thousands** of projects used depended on it, and all of them broke because of it. The lesson with this is that you should be mindful of  dependencies. If there is simple code that you *can* write, you probably *should* write it. Don't rely on others for everything, but use them when it is best.  

## Core principles of React
React is very nice because of the way it intuitively structures bits and pieces of an application.  
In your classes, you might have used ```function```s in order to create distinct pieces of functionality. There is also the benefit that you do not have to write the same code multiple places if you do this. React does the same thing with pieces of an application, and these are called ```components```. You can think of these ```components``` simply as functions that separate different parts of your app.    
For example, think about Instagram. A good example of a component would be a post. This is distinct part of the application as a whole, and it is used multiple places.   
One really cool thing about components is that they can be *nested*. This means that you can have components inside of components. This way, you can continue to seperate pieces of logic into where they belong. To continue the instagram example, if a Post is one component, then the comment section could be another. And inside of the comment section each comment could be a component. You can see that you continue to break down complicated parts of your app into smaller and smaller chunks that are easy to manage. All a comment is is text attached to a user profile, so create a small component that does that. Then create a component for the comment section that just has a bunch of comments. Then add that comment section to a post. Boom, simple.

## Glossary Reference
- React: a Javascript/TypeScript framework to make web application development easier.
- Dependency: a piece of code that your application relies on to work properly
- Component: a small, distinct piece of code to seperate pieces of your application