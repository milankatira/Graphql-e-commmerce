import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CartProvider } from "react-use-cart";
import "./App.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./Routes/Routes";
import "@brainhubeu/react-carousel/lib/style.css";
import Category from "./components/Categories";
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const Routes = () => {
  const elements = useRoutes(routes);
  return (
    <div>
      <NavBar />
      {elements}
      <Category/>
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <div>
            <Routes />
          </div>
        </ApolloProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
