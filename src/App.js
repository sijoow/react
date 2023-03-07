import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  let [txt,setTxt]=useState(['남자코트추천','여자코트추천','새롭게 추천'])
  let [like,setLike]=useState([0,0,0])
  let [modeal,setModal] =useState(false)
  let [title,setTitle]=useState(0);
  let [입력값,입력값변경] = useState('')
  return (
    <>
    <div className="App">
    <div className="black-nav">
      <div>개발 blog</div>
    </div>
      {
        txt.map((a,i)=>{
          return(
            <div className="list">
              <h4
              onClick={()=>{
                setModal(!modeal);
                setTitle(i)
              }}
              >{txt[i]}
                <span onClick={(e)=>{
                  e.stopPropagation();//이벤트버블링 막는함수
                  let copy = [...like];
                  copy[i] =copy[i]+1
                  setLike(copy)
                }}>👍{like[i]}</span>
              </h4> 
              <p>2월 17일 발행</p>
              <button
                onClick={()=>{
                  let copy =[...txt];
                  //여기서 원하는 자료 삭제 splice()
                  copy.splice(i,1);
                  setTxt(copy)
                }}
              >삭제하기</button>
            </div>
          )
        })  
      }

        <input onChange={(e)=>{
          입력값변경(e.target.value) ; 
        }}></input><button onClick={()=>{
          if(입력값){
            let copy =[...txt];
            copy.unshift(입력값)
            //맨 처음에 유저가 입력한글 추가 array .unshift
            setTxt(copy)
          }else{
            alert('값을 입력하세요');
         }
        }}>버튼</button>


        {
          modeal == true ? <Modal title={title} setTxt={setTxt}txt={txt} color={'skyblue'}/> : null
        }
      </div>
    </>
  );
    function Modal(props){
      return(
        <>
              <div className="modal" style={{background:props.color}}>
                <h4>
                  {
                    props.txt[props.title]
                  }
                </h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick ={()=>{
                  props.setTxt([props.txt[1]])
                }}>글수정</button>
              </div>
        </>
      )
    }
}

export default App;
