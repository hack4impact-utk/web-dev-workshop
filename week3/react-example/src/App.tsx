import './App.css'
import Video from './components/video/Video'

function App() {
  const videoInfos = [
    {
      title: "Video 1 Title",
      profileName: "ThePrimeagen",
      thumbnailSrc: "https://external-preview.redd.it/theprimeagen-on-typescript-v0-4YJWaQmG4CvdtUe_-Qq7m-HahYu_UJNUXYwV1IPa8F0.jpg?width=640&crop=smart&auto=webp&s=a9990110daef8d4cd9cdc0d908d1d51dfe321f24",
      profilePicSrc: "https://pbs.twimg.com/profile_images/1614986714795180033/yOQly3os_400x400.jpg"
    },
    {
      title: "Video 1 Title",
      profileName: "ThePrimeagen",
      thumbnailSrc: "https://external-preview.redd.it/theprimeagen-on-typescript-v0-4YJWaQmG4CvdtUe_-Qq7m-HahYu_UJNUXYwV1IPa8F0.jpg?width=640&crop=smart&auto=webp&s=a9990110daef8d4cd9cdc0d908d1d51dfe321f24",
      profilePicSrc: "https://pbs.twimg.com/profile_images/1614986714795180033/yOQly3os_400x400.jpg"
    }
  ];

  return (
    <div className="home-container">
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
    </div>
  )
}

export default App
