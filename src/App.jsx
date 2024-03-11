
import './App.css'
import Product from './components2/Product.jsx';

export default function App() {
  const products = [
    {
      id: 'p1',
      title: 'Milk',
      price: 33,
      date: new Date(2024, 2, 24)
    },
    {
      id: 'p2',
      title: 'Toast',
      price: 80,
      date: new Date(2024, 1, 24)
    },
    {
      id: 'p3',
      title: 'Atta',
      price: 330,
      date: new Date(2024, 2, 2)
    },
    {
      id: 'p4',
      title: 'Tea Pouch',
      price: 80,
      date: new Date(2024, 1, 4)
    },
  ]
  return (
    <div>
      <Product items={products}></Product>
    </div>
  );
}



// import Item from './components/Item'
// import ItemDate from './components/ItemDate'
// function App() {
//   const response=[
//     {
//       name:"raju",
//       day:12,
//       month:"june",
//       year:2000
//     },
//     {
//       name:"Dhruv",
//       day:14,
//       month:"sept",
//       year:2003
//     },
//     {
//       name:"ramesh",
//       day:19,
//       month:"july",
//       year:2001
//     }
//   ]
//   return (
//     <div className='app'>
//       <Item firstname={response[0].name}></Item>
//       <ItemDate day={response[0].day} month={response[0].month} year={response[0].year}></ItemDate>
//       <Item firstname={response[1].name}></Item>
//       <ItemDate day={response[1].day} month={response[1].month} year={response[1].year}></ItemDate>
//       <Item firstname={response[2].name}></Item>
//       <ItemDate day={response[2].day} month={response[2].month} year={response[2].year}></ItemDate>
//     </div>
//   )
// }
