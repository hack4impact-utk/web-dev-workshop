# Lesson 3 Step2: Creating a Component
A component is a small bit of our application that we use to make creating large things easier.
This will make more sense in a bit once we actually create it.

## Code Structure
If you notice all of the folders and files in the project folder, you will see that there is a lot of them. There are a few important ones to look at.
* ```public```
* ```src```
* base folder

Each of these has their own purpose, but we will mainly be working in the ```src``` folder.       
Think of this folder as the place where you will write *almost all* of your code.       

The other important one is the ```public``` folder. For now, you don't have to think about this much, and in practice, you rarely have to touch anything in it.     

## Making a component
If you are just looking at the code in this branch, you will see these steps completed already, but if you are following along with your own code you should not have this yet.     
Remember that the best way to think of a component is to think of it like a normal function. We will use our component in a similar way that we "call" functions normally in Java or C++.     


Here is what we are going to do to create our *1st* component. (some of these steps are not necessary for the remaining ones)
1. Create a new folder ```src/components```. (Basically just make a folder inside of the ```src``` folder called "components")
    - This will be where we create **all** of our components
1. Inside of the new ```src/components``` folder, create another folder called ```video```
    - ```video``` is going to be the name of the component that we create. It is best-practice to name the folder and your component name the same
1. Inside of the new ```src/components/video``` folder, create a new file called ```Video.tsx```.
    - This is the file that holds the code for our component
    - Name with a capital letter
    - The ```.tsx``` file extension is the extension for React components
1. Inside of the ```Video.tsx``` file, create a new function with the line ```export default function Video() {...}```
    - The "..." just means keep it empty don't actually put them in there
    - ```export```: means that this function can be "seen" by other parts of our application. Without using ```export```, there is no way for other files in our app to use our component.
    - ```default```: means that this is the **only** thing from this file that can be seen by other files. This is good practice for creating components
    - ```function```: remember that it is easy to think of components in React like functions in Java/C++. They even use the same keyword. Think of a Component as a function that ```return```s HTML. This will make more sense once we write the code for the component
    - ```Video() {...}```: the name of the component that we are creating. Make sure to make the first letter a Capital letter as this is best practice. (some versions/frameworks of react require Capital letters). We will also write the code for the component inside of the curly braces soon.
1. Inside of the ```{}``` we will write the line of code ```return <h1>Video Component</h1>;```
    - Remember that components can be thought of as functions that return HTML.
    - In this case, we are going to simply return the header tag with the name of our component to make sure it is working

And there it is! Our first component is created!      
However, if you refresh your page you will see that nothing has changed. This is because we don't use our component anywhere yet.     
To use our component, follow these steps:
1. Go to the ```src/app.tsx``` file
    - This is the file that you can think of as the "home" page or "base" page of our application. When we first start it, this is the page that is loaded.
    - If you go to "www.facebook.com", the ```app.tsx``` file is the file that would be ran. We will get to different pages in a later lesson, so for now we will put all of our code in this file.
1. Inside of ```src/app.tsx```, **at the top** add a new line ```import Video from './components/Video'```
    - This line basically says ```import``` the ```export```ed component from the ```src/components/Video``` folder.
    - This is easy to think about as when you want to use something that you exported in another file, import it into the file you want. 
    - **Make sure that the path inside the quotes is the path to the folder that you created your component in.** If this path is wrong, you will get an error saying that, and then just change it to the correct one.
1. Inside of the ```function App() {...}``` component (App is also a component), add a new line with ```<Video/>```
    - This is how you add a component to another component
    - Think of components as custom HTML tags that you can create

If you followed those steps correctly, you should have properly created a component, exported it from its own file, imported it to the app file, and used it inside of the App() component.     
If you have not been running already, you can compile and run your application with ```npm run dev``` and you should see the text "Video Component" on your page. Depending on what else is inside your App() component body, there may be other things.      

## Reference Code
Here is the code for my Video() component:
```ts
export default function Video() {
  return <h1>Video Component</h1>;
}
```

Here is the code for my App.tsx file:
```ts
import './App.css'
import Video from './components/video/Video'

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Video />
    </>
  );
}

export default App;
```

And that should be it!
When you create new components from here, you do not need to create the ```src/components``` folder.      
However, you do need to create a new folder for **each** new component that you create and **always** name the folder, file, and component the same name. **The folder name does not need to be uppercase for the first letter, but name both the file and the component with an Uppercase letter to begin**
