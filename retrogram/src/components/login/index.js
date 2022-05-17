import { Form, Input, Button, Checkbox, Typography } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { setLocalStorageItem } from '../../utils';
import './index.css';

const { Paragraph, Title, Text } = Typography;

export const Login = () => {
    const { state: { loading, error }, dispatch } = useAuth();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const { username, password } = values;
            const {
                status, data: { foundUser, encodedToken },
            } = await axios.post('/api/auth/login', { username, password });
            if (status === 200 && foundUser && encodedToken) {
                setLocalStorageItem('retrogram', encodedToken);
                dispatch({ type: 'UPDATE_USER', payload: encodedToken });
                navigate('/');
            } else {
                throw new Error('Error occurred while login, Please try again');
            }
        } catch (error) {
            dispatch({ type: 'LOGIN_ERROR', payload: error?.response?.data?.errors?.[0] || error?.message || error });
        }
        dispatch({ type: 'SET_LOADING', payload: false });
    };

    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
                className='flex flex_dcolumn align_center login_form'
            >
                <Title className='text_center login_header' level={3}>Login</Title>
                <Form.Item
                    label="username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    className='login_checkbox'
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                {error && <Text type='danger' className='error_text'>{error}</Text>}

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
                <Paragraph className='no_account'>
                    Don't have an account ? &nbsp;
                    <Link to="/signup">
                        Sign up
                    </Link>
                </Paragraph>
            </Form>
        </>
    );
};