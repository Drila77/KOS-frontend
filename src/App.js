
import './App.scss';
import List from './components/list/List';
import T from './assets/icons/text.png';
import world from './assets/icons/world.png';
import medal from './assets/icons/badge.png';
import rul from './assets/icons/ruler.png';
import speaker from './assets/icons/loud-speaker.png';
import com from './assets/icons/domain.png';
import bulb from './assets/icons/idea.png';
import percent from './assets/icons/percent.png';
import find from './assets/icons/searching.png';



const lists = [
  {
    title: "The TLD",
    photo:com,
    paragraph:"Does the domain extension math the language of the domain name?"
  },

  {
    title: "International recognition",
    photo:medal,
    paragraph:"Can the domain name be used on an international scale?"
  },

  {
    title: "Sales Opportunities",
    photo:percent,
    paragraph:"Can the domain name be used on an international scale?"
  },

  {
    title: "Domain Length",
    photo:rul,
    paragraph:"Is the domain short enough to remeber?"
  },

  {
    title: "Search engine",
    photo:find,
    paragraph:"Does the domain follow search engine guidelines?"
  },

  {
    title: "Typo susceptibility",
    photo: T,
    paragraph:"How high is the risk of mistyping the domain name?"
  },

  {
    title: "Language",
    photo: world,
    paragraph:"How complex is the actual domain name?"
  },

  {
    title: "Advertising Potential",
    photo:speaker,
    paragraph:"Could the domain be used for advertising campaigns?"
  },

  {
    title: "Business potential",
    photo:bulb,
    paragraph:"Can the domain be used as your company address?"
  }



]

export default  function App() {
  return (
    <div className="App">
      {lists.map((list) => (  
        <List title={list.title} paragraph={list.paragraph} photo={list.photo} /> 
      ))}
    </div>
  );
}


