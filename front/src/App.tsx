// import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserProvider } from "./providers/UserContext/UserContext";
import RoutesMain from "./routes";


function App() {
  return (
    // <div className="App">
    <div>
      <UserProvider>
        <RoutesMain />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </UserProvider>
    </div>
  )
}

export default App;
