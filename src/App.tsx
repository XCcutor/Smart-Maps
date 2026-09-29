import Navbar from './components/navbar'
import SearchBar from './components/Searchbar';
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