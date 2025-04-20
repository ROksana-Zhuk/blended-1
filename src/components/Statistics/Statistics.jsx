import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

import style from './Statistics.module.css';
import StatisticsItem from '../StatisticsItem/StatisticsItem';

const icons=[
    FaRegThumbsUp,
    MdPeople,
    MdOutlineProductionQuantityLimits,
    GiTreeDoor
];

const Statistics = ({ title, stats }) => {
  return (
    <div>
    {title && (
        <h3 className={style.title}>{title}</h3>
        )
    }

      <ul className={style.list}>
       {stats.map((stat, index) => (
        <li key={stat.id} className={style.item}>
          <StatisticsItem title={stat.title}
                          total={stat.total}
                          icon={icons[index]}/>
        </li>
       ))}
      </ul>
    </div>
  )
};

export default Statistics;

/*
    <li key={friend.id}
    className={
        clsx(
            css.friendListAnimals
        )
    }>
      <FriendListItem info={friend} />
    </li>
  ))} */
