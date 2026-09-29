import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar';
import CategoryBar from './components/CategoryBar';
import MapPlaceholder from './components/MapPlaceHolder';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <SearchBar />
        <CategoryBar />
        <MapPlaceholder />
      </main>
    </>
  );
}

export default App;