import React from 'react'
import '../style/video.css'
const VideoTutorials = () => {
  return (
    <div className='video'>
       <div className='video-first'>
              <div className='video-first-text'>
              <p className='video-first-text1'>Prepbytes Video Library</p>
              <p className='video-first-text2'>Increase your knowledge with PrepBytes free videos. PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming , Language Fundamentals - C, C++, Java, Data Structures and Algorithms, Aptitude, Operating System, Interview Questions and much more all at one place.</p>
              </div>
              <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/video_lib_illustration.png' alt='not found' className='video-first-img'/> 
       </div>
       <div className='video-second'>
          CATEGORIES
       </div>
       <div className='video-third'>
           <div className='video-third-card'>
            <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_competitive.png' alt='not found' className='video-third-card-img'/>
            <p className='video-third-card-text1'>Competitive Programming</p>
            <p  className='video-third-card-text2'>Competitive Programming questions solved by top rated coders</p>
            <div className='video-third-card-logo'><img src='data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo=' alt='not found' /><div>21 Videos</div></div>
           </div>
           <div className='video-third-card'>
            <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_interview.png' alt='not found' className='video-third-card-img'/>
            <p className='video-third-card-text1'>Competitive Programming</p>
            <p  className='video-third-card-text2'>Competitive Programming questions solved by top rated coders</p>
            <div className='video-third-card-logo'><img src='data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo=' alt='not found' /><div>21 Videos</div></div>
           </div>
           <div className='video-third-card'>
            <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_ds.png' alt='not found' className='video-third-card-img'/>
            <p className='video-third-card-text1'>Competitive Programming</p>
            <p  className='video-third-card-text2'>Competitive Programming questions solved by top rated coders</p>
            <div className='video-third-card-logo'><img src='data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo=' alt='not found' /><div>21 Videos</div></div>
           </div>
           <div className='video-third-card'>
            <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_ds.png' alt='not found' className='video-third-card-img'/>
            <p className='video-third-card-text1'>Competitive Programming</p>
            <p  className='video-third-card-text2'>Competitive Programming questions solved by top rated coders</p>
            <div className='video-third-card-logo'><img src='data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo=' alt='not found' /><div>21 Videos</div></div>
           </div>
           <div className='video-third-card'>
            <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_ds.png' alt='not found' className='video-third-card-img'/>
            <p className='video-third-card-text1'>Competitive Programming</p>
            <p  className='video-third-card-text2'>Competitive Programming questions solved by top rated coders</p>
            <div className='video-third-card-logo'><img src='data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo=' alt='not found' /><div>21 Videos</div></div>
           </div>
           <div className='video-third-card'>
            <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_ds.png' alt='not found' className='video-third-card-img'/>
            <p className='video-third-card-text1'>Competitive Programming</p>
            <p  className='video-third-card-text2'>Competitive Programming questions solved by top rated coders</p>
            <div className='video-third-card-logo'><img src='data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo=' alt='not found' /><div>21 Videos</div></div>
           </div>
       </div>
    </div>
  )
}

export default VideoTutorials
