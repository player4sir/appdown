import { createBrowserRouter } from 'react-router-dom';
import DownloadPage from './pages/download';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DownloadPage />,
  },
]); 