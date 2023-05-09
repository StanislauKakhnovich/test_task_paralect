import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from 'react-router-dom';

// function Product(){
//     // получаем параметры
//     const params = useParams();
//     const prodId = params.id;
//     const phone = phones.find(p=>p.id == prodId);
//     if(phone===undefined)
//         return <h2>Товар не найден</h2>;
//     else
//         return <h2>Товар {phone.name}</h2>;
// }
let x = [{'id':'1','profession':'x', 'firm_name': 'nothing', 'payment_from': '0', 'payment_to': '0', 'currency':'0', 'type_of_work': {'title': 'full day'}, 'town': {'title': 'Minsk'}},
{'id':'2','profession':'y', 'firm_name': 'nothing', 'payment_from': '0',  'payment_to': '0', 'currency':'0', 'type_of_work': {'title': 'full day'}, 'town': {'title': 'Minsk'}}];

function VacancyCard (items) {
    const params = useParams();
    const prodId = params.id;
    console.log(prodId);

        const item = x.find(p=>p.id == prodId);
        console.log(item);
        return (
            //<div></div>
            <div>{item}</div>
        );
  

}

export default VacancyCard;