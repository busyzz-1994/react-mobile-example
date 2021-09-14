import React from 'react';
import { userState } from 'state';
import { useRecoilState } from 'recoil';
import { Button } from 'antd-mobile';
import styles from './index.module.scss';
const UserInfo = () => {
  const [userStateValue, setUserStateValue] = useRecoilState(userState);
  const fetchData = () => {
    setUserStateValue({
      name: 'busyzz',
      age: 27,
    });
  };
  return (
    <div>
      <div className={styles.userItem}>用户名称：{userStateValue.name}</div>
      <div className={styles.userItem}>用户年纪：{userStateValue.age}</div>
      <Button onClick={fetchData}>获取 User 信息</Button>
    </div>
  );
};

export default UserInfo;
