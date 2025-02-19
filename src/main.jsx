// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import AuthProviders from './context/AuthProviders.jsx';
// import ThemeProvider from './ThemeProvider.jsx';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// const queryClient = new QueryClient();

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       <QueryClientProvider client={queryClient}>
//     <AuthProviders>
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     </AuthProviders>
//     <ToastContainer />
//          </QueryClientProvider>
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProviders from './context/AuthProviders.jsx';
import ThemeProvider from './ThemeProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import store from './redux/store.js';
import { Provider } from 'react-redux';

// Configure QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >

    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProviders>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
        </Provider>
  </StrictMode>
);
