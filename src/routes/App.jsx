import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import ScrollToTop from '../scroll/ScrollToTop'
import ChatBot from '../components/ChatBot'
import GoogleTranslate from '../components/translator/GoogleTranslate'
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  return (
    <div className='w-full h-full scrollbar'>
      <div className='w-full h-full'>
        <ScrollToTop/>
        <Header />
        <Sidebar />
        <Outlet />
        {(pathname !== '/app' && pathname !== '/app/calendar' && pathname !== '/app/profile' && pathname !== '/app/tables' && pathname !== '/app/settings') && <Footer />}
        <GoogleTranslate/>
        <ChatBot />
      </div>
    </div>
  )
}

export default App
