import { useRef } from 'react'
// import store from '@/redux/store'
import { connect } from 'react-redux'
import { add } from '@/redux/action/count'
import { addPerson } from '@/redux/action/person'
import { Button } from 'antd'

/* 学习测试用 */
function Index(props) {
  // const count = store.getState();
  const { count } = props;
  const refInput = useRef()

  const addOne = () => {
    props.add(1);

    const name = refInput.current.value;
    if (name) {
      props.addPerson({
        name
      })
      refInput.current.value = '';
    }
  }

  return (
    <div>
      {count}
      <Button onClick={addOne}>加一</Button>
      <hr />
      <input type="text" ref={refInput} />
      {
        props.personList.map(person => <span key={person.name}>{person.name}</span>)
      }
    </div>
  )
}

export default connect(
  (state) => ({ count: state.count, personList: state.personList }),
  // (dispatch) => ({
  //   add: number => dispatch(add(number))
  // })
  {
    add,
    addPerson
  }
)(Index)