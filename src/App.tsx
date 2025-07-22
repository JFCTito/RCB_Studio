import './App.css';
import HomeView from './views/HomeView/HomeView';
import ProjectsView from './views/ProjectsView/ProjectsView';
import ServicesView from './views/ServicesView/ServicesView';
import FamilyView from './views/FamilyView/FamilyView';
import ContactView from './views/ContactView/ContactView';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HomeView />
        <ServicesView />
        <ProjectsView />
        <FamilyView />
        <ContactView />
      </main>
    </>
  );
}

export default App;
