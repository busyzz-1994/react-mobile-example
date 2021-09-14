import React from 'react';
import Section from 'components/ui/section';
import { useSetState } from 'hooks';
import styles from './index.module.scss';
import WxImageViewer from 'react-wx-images-viewer';
import { useRecoilValue } from 'recoil';
import { userState } from 'state';
import avatarImg from 'assets/images/avatar.jpg';
import wxqrcodeImg from 'assets/images/wxqrcode.jpg';
const Component = () => {
  // 用户信息
  const userStateValue = useRecoilValue(userState);
  // 图片信息
  const [imagesInfo, setImageInfo] = useSetState({
    imags: [avatarImg, wxqrcodeImg],
    index: 0,
    isOpen: false,
  });
  return (
    <div>
      <Section>用户状态 (来自 recoil )</Section>
      <div>
        <h2>姓名：{userStateValue.name}</h2>
        <h2>年纪：{userStateValue.age}</h2>
      </div>
      <Section>预览图片</Section>
      <div className={styles.imgList}>
        {imagesInfo.imags.map((item, index) => (
          <div
            onClick={() => setImageInfo({ isOpen: true, index })}
            key={index}
            className={styles.imgBox}
          >
            <img src={item} alt='' />
          </div>
        ))}
      </div>
      {imagesInfo.isOpen ? (
        <WxImageViewer
          onClose={() => setImageInfo({ isOpen: false })}
          urls={imagesInfo.imags}
          index={imagesInfo.index}
        />
      ) : null}
    </div>
  );
};

export default Component;
