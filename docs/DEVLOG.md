# **Dev Log**

## 2024-01-13

It is a little late for a dev log entry but I have been working on this project for a while now. **And I didn't even add a readme file**. I think it is time to start writing about this project.

### Why this project?

I was doing the same things with different frameworks and libraries. So I decided to stop that and *complete a **solid** frontend project that I can use on my portfolio*. So I just wanted to develop a simple Spotify clone. There are some things that I know how to do and more things I don't know anything about. Deciding on the tech stack was the easiest part. I knew that I'm going to use *React*, *TailwindCSS*, *Typescript* and *Vite*. I had my eye on Tauri and never used Redux before.

So this is a project that I can flex my frontend skills and learn Tauri and Redux.

### About Tauri

When I looked at Tauri, I saw that it would keep my and its codes completely separate. And when I don't want to use Tauri, I know I can easily remove it from the project. There is no direct React support, but you can use Tauri with Vite. And Vite has a React template. I have used Vite many times before. It's so easy and fast to use that *there's no reason not to love Vite*. I didn't think even a second. I just started to work on the project.

### What I did today?

Today I added some new eslint plugins to the project. I think refactoring is becoming comfort zone for me. It's my final quiz week and I don't want to spend my brain on these right now. I probably will continue to work on this later.

### Toughts on the project

Firstly I didn't like the audio player logic. I was using Redux to control the audio player and it feels like overengineering. Using Redux as an event handler is not a good idea. And there is a major bug with the audio player in the Chrome. It stutters every second. I don't know why but I think it is related to the Redux. I'm going to migrate the audio player logic to Web Audio API. I think it will be a good learning experience. 

#### Hate on Redux

Before learning Redux, I had big prejudices about it. I learned Redux while working on this project. And I learned that my prejudices were all correct. Lots of boilerplate, unnecessary complexity and poor documentation (especially Typescript).

I've used Zustand or Context Api before and they never slowed me down. But I spent a lot of time learning that I couldn't store objects in Redux. And using it with Typescript? It's the worst punishment you can get in web developers' hell.

After dealing with Redux this much, I think I'll stick with Zustand. 

##### Kind regards.
#### [Emre Can](https://github.com/emrecancorapci) 
