1. What problem does the context API help solve?
Context API solves the problem of having props being able to be passed to multiple components across your project where you need them without having to drill down through each parent.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
An action sends a command to a reducer through a dispatch, which then sends data to the store and tells it which state to update.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, and component state is local within your app. A good place to use application state is when you want your components to all have access to a piece of state. A good place for component state is when only one component might need that piece of data.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk allows us to write asynchronous action creators. By default, redux is synchronous, and thunk is a middleware that changes the way we can send actions.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
I prefer redux to context and default React state management. It makes the most sense for bigger projects and, while it does make things a little bit more to manage in a small scale project, it removes the need to have to manage so many props and troubleshoot prop drilling. Just connect your component to the global state and have fun.
