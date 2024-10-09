import SearchBar from "./components/searchBar"

function App() {

  return (
    <div className="w-full flex justify-center bg-white">
      <div className="mt-10 w-4/5 flex-col items-center">
        <div className="flex justify-between items-center gap-10">
          <div>Today</div>
          <SearchBar />
          <div></div>
        </div>
        <div></div>
      </div>

    </div>
  )
}

export default App
