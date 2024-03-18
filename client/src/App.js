import './App.css';
import Home from './pages/Home';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {

  const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<Home />
        
    
    },
    
])
   
  return (
    <div className="App">
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </div>
  );
}

export default App;
