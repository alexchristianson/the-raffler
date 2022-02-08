import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from "./components/Nav";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Raffles from './components/Raffles';
import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Nav />
            <Routes>
            <Route exact path='/' element={<Home/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/signup' element={<SignUp/>}/>
            </Routes>
            <Raffles />
            <Footer />
        </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;