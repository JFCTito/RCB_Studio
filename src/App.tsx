import './App.css'
import HomeView from './views/HomeView/HomeView'
import ProjectsView from './views/ProjectsView/ProjectsView';
import ServicesView from './views/ServicesView/ServicesView';
import FamilyView from './views/FamilyView/FamilyView';
import ContactView from './views/ContactView/ContactView';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <Header/>
      <HomeView/>
      <ServicesView/>
      <ProjectsView/>
      <FamilyView/>
      <ContactView/>
    </>
  )
}

export default App
