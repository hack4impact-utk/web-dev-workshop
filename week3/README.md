# Lesson 3 Step 4:  Make Video Configurable
In the last step, we created a React component for a video, but you might have noticed that we are still not able to make more than 1 different video. If we use that video component multiple times, it will just copy-paste the exact same video with the same information. This is obviously not good, so in this step we will make it easy to create videos.

## How do we make it configurable?
The way to make React Components configurable is through something called *props*.      
Props are actually pretty simple to think about. If you have used functions in Java/C++, you can think of props simply as function parameters.      

For example, in C++ if I was to write
```c++

int add(int a, int b) {
  return a + b;
}

int main() {
  int number = add(1, 2);
  int number2 = add(3, 4);
}
```
You can see in this example that I have the ```main()``` function which you should think of as our ```App()``` component.     
We also have our ```add(int a, int b)``` function in C++ which you can think of as our ```Video()``` component.       
Our ```add``` function has the two parameters ```a``` and ```b```. This is the way that the function can use the parameters and do a different result each time. This is done by our ```main``` function calling ```add``` 2 different times with different *arguments*.      

The same can be done with *props* in React. In the same way that we can use functions with parameters, we use Components with props.        

## How to use Props in TypeScript
TypeScript has the awesome ability to do *type checking*. This means that we need to know what data types our props are going to be.    

To show you what this looks like, I will do a basic example below:
```ts
interface exampleProps {
  name: string;
  age: number;
}
```
In this example, we have defined what data types our props are going to be, and now we know what pieces of our props we can use as well. 

## How to make our component **take** props
Now that we have defined props, we need to make sure that our Component has the ability to use them.

To start, here is a version of props we are going to use for our videos:
```ts
interface videoProps {
  title: string;
  profileName: string;
}
```
This interface contains the title of the video and the name of the profile who posted it.     
Now we need to change our component to accept these props. Doing this is simple. Change the function prototype of the ```Video()``` component to be 
```ts
export default function Video(props: videoProps) {...}
```
All you need to change is put the props in the parentheses like any normal function parameter. Also, since this is TypeScript, we need to make sure we say what data type our props are going to be. We defined the interface for ```videoProps``` so now we can use that.        

## Using props inside of the component
Now is the fun part. Our component is now able to take in props, but we still don't use them yet. This is where the real power of React starts to show.       

Inside of the "HTML" that we have written for the component, we need to change the hard-coded text to the props that we have defined. The easiest example of this is the video title. Change your code in ```Video.tsx``` to be:
```ts
<h1 className="video-title">{props.title}</h1>
```
Notice that we changed it from normal text inside the `<h1>` tag to using ```{}```. This is **very** important. Using `{}` inside of React allows you to use variables.     

Also notice we use ```props.title``` to use the title. **When using variables from props, we always use props.[variable] to refer to it**

Now we change the line below as well to make the component use the ```profileName``` part of our props.


However, if you run this code, you may notice that it still doesn't work. The reason for this is because we have not passed in the function *arguments*. Going back to the C++ example from earlier. Our ```App()``` component is our ```main()``` function. Inside of the main() function, we called the ```add()``` function with multiple different values. These values are the arguments. We need to do the same thing for our Component.

## Passing in props **to** the component
Our component now takes in props, but we need to **pass** them in now. This means that in our ```App()``` component we need to set the props that we want.      

In ```App.tsx```, change where we have our ```<Video/>``` component to this:
```tsx
<Video
  title="Maintainability and Readability | Prime Reacts"
  profileName="ThePrimeagen"
/>
```
You might notice that this is similar to setting and `id` or `class` in HTML, and this is why I like to think about Componeents as both functions and custom HTML tags.   

To see two *different* videos now, add this:
```tsx
<Video
  title="Another video"
  profileName="pewdiepie"
/>
```
You should now see two videos with different titles and profiles on the page!

With that added, we can now create multiple videos with whatever title and profile name that we want! There is obviously more to do with props like changing the images, and I challenge you to do that on your own. The completed code is in this branch, so you can look at that if you get stuck.      
