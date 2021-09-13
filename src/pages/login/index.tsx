import React, { useState } from 'react';
import { Button } from 'antd-mobile';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import routesPath from 'config/routesPath';
import classNames from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './index.module.scss';
const schema = yup.object().shape({
  email: yup.string().required('email为必填项').email('必须为email格式'),
  password: yup.string().required('password为必填项'),
  code: yup
    .string()
    .transform((currentValue, originalValue) => {
      return originalValue === '' ? null : currentValue;
    })
    .matches(/^\d+$/, { message: '必须为正整数' })
    .nullable(),
});
type Inputs = {
  email: string;
  password: string;
  code: string;
};
const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    setTimeout(() => {
      history.push(routesPath.home.setting);
    }, 2000);
  };
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <form>
          <div className={styles['login__title']}>请输入账号密码</div>
          <div className={styles['login__email']}>
            <input
              type='text'
              placeholder='请输入邮箱'
              className={classNames({
                [styles.error]: errors.email?.message,
              })}
              {...register('email')}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className={styles['login__password']}>
            <input
              type='text'
              placeholder='输入密码'
              className={classNames({
                [styles.error]: errors.password?.message,
              })}
              {...register('password')}
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className={styles['login__code']}>
            <input
              type='text'
              placeholder='验证码（数字）'
              className={classNames({
                [styles.error]: errors.code?.message,
              })}
              {...register('code')}
            />
            <p>{errors.code?.message}</p>
          </div>
          <div className={styles['login__handle']}>
            <Button
              loading={loading}
              type='primary'
              onClick={handleSubmit(onSubmit)}
            >
              登陆
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
