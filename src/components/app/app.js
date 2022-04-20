import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css'

function App() {
  const data = [
    {name: 'Andrew S.', salary: 800, id: 1},
    {name: 'Eugen M.', salary: 300, id: 2},
    {name: 'Oleg D.', salary: 2500, id: 3},
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data}/>
      <EmployeesAddForm />
    </div>
  )
}

export default App;