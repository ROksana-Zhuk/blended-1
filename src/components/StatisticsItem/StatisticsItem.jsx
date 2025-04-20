
import style from './StatisticsItem.module.css'


import stats from '../../data/stats.json';



const StatisticsItem = ({ total, title, icon : Icon }) => {
  return (
    <>
      <Icon size={30}/>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  )
};

export default StatisticsItem;
