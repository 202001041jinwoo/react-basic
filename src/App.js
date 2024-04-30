import 'bootstrap/dist/css/bootstrap.min.css';

import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from'./pages/EditPage';
import ListPage from './pages/ListPage';
import AdminPage from './pages/AdminPage';
import ShowPage from './pages/ShowPage';

const routes = [
  {
    path: "/",
    component:HomePage
  },
  {
    path: "/blogs",
    component:ListPage
  },
  {
    path: "/admin",
    component:AdminPage
  },
  {
    path: "/blogs/create",
    component: CreatePage
  },
  {
    path: "/blogs/:id/edit",
    component:EditPage
  },
  {
    path: "/blogs/:id",
    component:ShowPage
  }
  
];
function App() {
  return (
    <Router>
      <NavBar />
      <div className='container mt-3'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<ListPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/blogs/create" element={<CreatePage />} />
          <Route path="/blogs/:id/edit" element={<EditPage />} />
          <Route path="/blogs/:id" element={<ShowPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
 