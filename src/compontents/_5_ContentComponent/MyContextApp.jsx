import { createContext, useContext } from "react";

// Context Create
const MyContextCreate = createContext();

// Context Provider
function MyContextProvider({ children }) {
  // Shared Data
  const sharedData = {
    miuulMessage: "Frontend React Öğrendim",
  };

  // RETURN
  return (
    <MyContextCreate.Provider value={sharedData}>
      {children}
    </MyContextCreate.Provider>
  ); //end return
} //end MyContextProvider

//Context Consumer
function MyContextConsumer() {
  const sharedData = useContext(MyContextCreate);

  return (
    <div>
      <p>{sharedData.miuulMessage}</p>
    </div>
  ); //end return
} // end MyContextConsumer


// MyContextApp
function MyContextApp(){
    return(
        <MyContextProvider>
            <MyContextConsumer />
        </MyContextProvider>
    );
}

// Export
export default MyContextApp;