import './App.css';
import Home from './pages/Home';
import {createBrowserRouter,RouterProvider,Link} from 'react-router-dom'
import CreatePost from './pages/CreatePost';
function App() {

  const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
      path:"/createpost",
      element:<CreatePost />
    }
    
])
   
  return (
    <div className="App">
      <a href="/createpost"> Create A Post</a>
      <a href="/"> Home Page</a>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </div>
  );
}

export default App;
