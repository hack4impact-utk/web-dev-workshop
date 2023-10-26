# Lesson 3 Step 5: Dynamically render the videos
In the last step, we made it so that our video components were able to take in props in order to create different ones without repeating ourself too much.    
However, we can still take this one more step further.    

Let's say we needed to render (show on the page) 100 videos. This is obviously not something we want to write over and over again. Also, when someone posts a video on Youtube, there isn't someone who then writes the Component and adds it to the page, that video and its information is put into a database, and then youtube reads information from that database to render all the vidoes.     

For this example, we aren't going to be working with databases, but what we can do is read them from an array, and maybe even a file.     

## Setting up for dynamic rendering
We are actually done with our Component! There is nothing in the component that we need to change to do dynamic rendering.    
What we do have to change is our ```App()``` component.    

Here are the general steps we are going to take to refactor for dynamic rendering:
1. Create an array where we will store information for each video
1. Add the information to the array
1. Loop through the array and render a component for each value in the array using the things in the array as the props for each component

And that's it! It is actually really simple, and this is something that you are going to be doing **a lot** of in React.

To complete the first step, we will create an array inside of our ```App()``` function like this:
```tsx
const videoInfos = [];
```

With the array for our information created, we now need to add that information to the array.
You can do that simply by doing this:
```tsx
const videoInfos = [
  {
    title: "Video 1 Title",
    profileName: "ThePrimeagen",
    thumbnailSrc: "https://external-preview.redd.it/theprimeagen-on-typescript-v0-4YJWaQmG4CvdtUe_-Qq7m-HahYu_UJNUXYwV1IPa8F0.jpg?width=640&crop=smart&auto=webp&s=a9990110daef8d4cd9cdc0d908d1d51dfe321f24",
    profilePicSrc: "https://pbs.twimg.com/profile_images/1614986714795180033/yOQly3os_400x400.jpg"
  }
];
```
NOTE: if your props interface for a video looks different, change yours to follow that instead of mine.   
For now, we will only put one video in the array. The point of this whole step is that we can put however many we want in here.     

With the array created, we now need to *map* through it and render each component. The way we do this is with the ```array.map()``` method. There is going to be some syntax here that you may not have seen yet, but I will explain it.    

Inside of our ```render(...)``` statement in our App() component, we need to change it from rendering our specific components to using the .map() method. We can do this like this:
```tsx
function App() {
  ...
  return (
    <>
      {
        videoInfos.map(function(data) {
          return (
            <Video
              title={data.title}
              profileName={data.profileName}
              thumbnailSrc={data.thumbnailSrc}
              profilePicSrc={data.profilePicSrc}
            />
          )
        })
      }
    </>
  )
}
```
There is a lot to look at here.     
First, what the `.map()` method does is loop through the array, and it **runs the function** that we gave it. In TypeScript, you can create functions inside of functions. This is something that is really cool, and you should check this out on your own. For now, just know that we are able to create our own function inside of the .map() method.      

Because we created a function inside of the .map() method, it needs to return something. In this case, all we are doing is returning the Component we created. Think of this as returning a component for each element in the array. **Think of returning the Component as creating it. Because we are creating this component, think of this as the same as if we wrote it like before, but this function is doing that for us**.      

With that, you should see one video like before, but now you can add any number of videos to this array with whatever values you want.      

See, that is actually pretty simple. .map() can be weird to get used to, but you will find it easy to use very quickly.