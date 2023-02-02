//Diem khac biet giua component va html la doi voi component co the ket hop html vs js bang cu phap  JSX;de in ra bien JS thi bat dau {}
// class component
// function component(react 16.8 ra đời giúp cho function component có tác dụng giống class component)
// ly do co the import React tu thu vien react vi khi cai dat da cai dat react roi
import React from 'react';
//ke thua lai tat ca cac tinh nang 1 component co the co
class MyComponent extends React.Component
{   //dinh nghia 1 bien state co 2 cach (state la 1 bien obj), kiem soat data của component
    state ={
        name:'Huy',
        address: 'HP',
    };
    //render la tap hop cac khoi html de chuyen no thanh giao dien
    //JSX la 1 cu phap dac biet cua JS (JSX cho phep viet code cua JS trong HTML)
    //JSX chi co the return ve 1 phan tu(1 element)
  render(){
    return (
        <div>my first component
            My name is {this.state.name}
        </div>
    );
  }
}
export default MyComponent;