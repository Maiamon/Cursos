import './App.css'
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import ExecuteFunction from './components/ExecuteFunction'
import Fromulario from './components/Formulario'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import MyForm from './components/MyForm'
import ShowUserName from './components/ShowUserName'

function App() {

  const carros = [
    { id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0 },
    { id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 3432 },
    { id: 3, brand: 'RENAULT', color: 'Azul', newCar: false, km: 200 },
    { id: 4, brand: 'BMW', color: 'Preto', newCar: true, km: 0 },
  ]


  function ShowMessage() {
    console.log('Evento do Componente pai')
  }

  return (
    <div>
      <h1>Hello World</h1>
      <ManageData />
      <ListRender />
      <Fromulario />
      <MyForm />
      <ConditionalRender />
      <ShowUserName nome='João' />
      <CarDetails brand='VW' km={10000} color='Red' newCar={false} />
      <CarDetails brand='Fiat' km={0} color='Silver' newCar={true} />
      {/* Loop de Componentes em array */}
      {carros.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km} />
      ))}
      { /* Executando Função */}
      <ExecuteFunction myFunction={ShowMessage} />
    </div>
  )
}

export default App
